<template>
  <div class="job-details">
    <Menu />
    <div class="job-header" v-if="job">
      <div class="header-details">
        <div class="image">
          <img :src="job.foto_servico" :alt="job.nome_servico" />
        </div>

        <div class="details">
          <div class="top">
            <div class="top-details">
              <div class="title">
                <span v-text="job.nome_servico">Editorial de revista</span>
              </div>
              <div class="location">
                <div><img src="../assets/localization.svg" alt="" /></div>
                <div class="city">
                  <span v-text="job.lugar_divulgacao">Brasília</span>
                </div>
                <div v-text="formatDate(job.data_cadastro)"></div>
              </div>
            </div>
            <div class="close-button" @click="$router.go(-1)">
              <img src="../assets/close-button.svg" alt="" />
            </div>
          </div>
          <div class="image-responsive">
            <img :src="job.foto_servico" :alt="job.nome_servico" />
          </div>
          <div class="description">
            <span v-text="job.descricao"></span>
          </div>
          <div class="button-apply">
            <Button
              :textButton="'Candidatar-se'"
              :backgroundButton="'primary'"
              :router="setJobModel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Button from "../components/Button.vue";
import jobs from "../services/request/jobs";
export default {
  components: { Menu, Button },
  mounted() {
    this.getJob();
  },
  data() {
    return {
      job: null,
    };
  },
  methods: {
    async getJob() {
      const response = await jobs.getJob(this.$route.params.id);
      this.job = response.data[0];
    },
    formatDate(date) {
      const newDate = new Date(date);
      const splittedDate = newDate.toISOString().slice(0, 10);
      return new Date(splittedDate).toLocaleString();
    },

    async setJobModel() {
      const user = await JSON.parse(localStorage.getItem("usuario"));
      if (user) {
        const data = {
          id_modelo: user.modelo.id,
          id_servico: this.job.id,
        };
        await jobs
          .setJobModel(data)
          .then((response) => {
            if (response.data) {
              this.$vToastify.success({
                body: "Candidatado com sucesso",
                title: "Tudo certo!",
              });
            }
          })
          .catch(() => {
            this.$vToastify.error({
              body: "Você ja é um candidato para esse trabalho",
              title: "Epa!",
            });
          });
      }
    },
  },
};
</script>

<style>
.job-details {
  height: 100vh;
}
.job-header {
  width: 75%;
  margin: 0 auto;
  margin-top: 50px;
}

.header-details {
  padding: 35px;
  background: white;
  border-radius: 5px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.header-details .image {
  width: 50%;
}

.header-details .image img {
  width: 80%;
  height: 328px;
  object-fit: cover;
  border-radius: 5px;
}
.header-details .details {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.header-details .details .title {
  font-size: 1.1rem;
  color: #404040;
}
.header-details .location {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: #5a5757;
}
.header-details .location img {
  width: 1rem;
}
.header-details .location .city {
  margin-right: 10px;
}
.header-details .description {
  font-size: 0.9rem;
  color: #908f8f;
  padding: 20px 0;
  padding-bottom: 140px;
}
.header-details .button-apply {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-left: 210px;
}
.header-details .top {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.header-details .close-button {
  align-items: center;
  display: flex;
  justify-content: center;
  background: #f0f2f5;
  border-radius: 5px;
  cursor: pointer;
}
.header-details .close-button img {
  padding: 10px;
}
.header-details .image-responsive {
  visibility: hidden;
  display: none;
}
/* RESPONSIVE JOBS DETAILS================================ */

@media (max-width: 400px) {
  .job-header {
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
  }
  .header-details .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
  }
  .header-details .image {
    visibility: hidden;
    display: none;
  }
  .header-details .image-responsive {
    width: 100%;
  }
  .header-details .image-responsive img {
    width: 100%;
    height: 328px;
    object-fit: cover;
    border-radius: 5px;
  }
  .header-details .image-responsive {
    visibility: visible;
    display: inline;
  }
  .header-details .button-apply {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-left: 0;
  }
  .header-details .description {
    font-size: 0.9rem;
    color: #908f8f;
    padding: 20px 0;
    padding-bottom: 40px;
  }
}
</style>
