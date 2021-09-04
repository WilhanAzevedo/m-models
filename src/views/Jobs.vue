<template>
  <div class="jobs">
    <Menu />
    <div class="list-jobs">
      <div class="list-title">
        <span>Ultimos serviços</span>
      </div>
      <div class="list-jobs-recents">
        <JobRecent
          img="https://blog.revendakwg.com.br/wp-content/uploads/2017/05/fazer-uma-revista-750x410.png"
          title="Editorial de revista"
          date="16/07/2021 - 00:00"
          placeholder="Imagem ilustrativa de revista"
          :clickDetails="clickDetails"
        />
        <JobRecent
          img="https://www.quimicolla.com.br/wp-content/uploads/2020/12/Producao-de-calcados-de-ponta-a-ponta-em-Sao-Joao-Batista-pichi.jpg"
          title="Loja de calçados"
          date="16/07/2021 - 00:00"
          placeholder="Imagem ilustrativa de calçados"
          :clickDetails="clickDetails"
        />
        <JobRecent
          img="https://blog.lavillecasa.com.br/wp-content/uploads/2020/01/GettyImages-942746880-1-750x499.jpg"
          title="Atendente em evento"
          date="16/07/2021 - 00:00"
          placeholder="Um homem preparando drinks"
          :clickDetails="clickDetails"
        />
      </div>
    </div>
    <!-- ALL JOBS ============================================-->
    <div class="all-jobs">
      <div class="list-title">
        <span>Todos os serviços</span>
      </div>
      <div class="all-cards">
        <Job
          v-for="(job, index) in listJobs"
          :key="index"
          :img="job.foto_servico"
          :title="job.nome_servico"
          :date="job.data_cadastro"
          :placeholder="job.nome_servico"
          :description="job.descricao"
          :id="job.id"
          :clickDetails="clickDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import JobRecent from "../components/JobRecent.vue";
import Job from "../components/Job.vue";
import jobs from "../services/request/jobs";
export default {
  components: { Menu, JobRecent, Job },
  mounted() {
    this.getJobs();
  },
  data() {
    return {
      listJobs: [],
    };
  },
  methods: {
    clickDetails(id) {
      this.$router.push({ name: "JobDetails", params: { id: id } });
    },
    async getJobs() {
      const response = await jobs.getJobs();
      this.listJobs = response.data;
    },
  },
};
</script>

<style>
.jobs {
}
.list-jobs,
.all-jobs {
  width: 75%;
  margin: 0 auto;
  padding-top: 50px;
}
.jobs .list-title {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #404040;
}

.jobs .list-jobs-recents {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* background: red; */
}

.all-jobs .all-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.jobs .all-cards .job-card {
  margin: 10px 0;
  width: 32%;
}
/* RESPONSIVE MY JOBS ================================ */

@media (max-width: 400px) {
  .jobs .all-jobs,
  .list-jobs {
    width: 95%;
    margin: 0 auto;
  }
  .jobs .all-cards .job-card {
    margin: 10px 0;
    width: 100%;
  }
}
</style>
