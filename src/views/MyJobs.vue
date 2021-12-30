<template>
  <div class="my-jobs">
    <Menu />
    <div class="all-jobs">
      <div class="list-title">
        <span>Meus Jobs</span>
      </div>
      <div class="all-cards">
        <Job
          v-for="(job, index) in myJobsList"
          :key="index"
          :id="job.id"
          :img="job.foto_servico"
          :title="job.nome_servico"
          :date="job.data_update"
          :placeholder="job.nome_servico"
          :description="job.descricao"
          :clickDetails="clickDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Job from "../components/Job.vue";
import jobs from "../services/request/jobs";
export default {
  components: { Menu, Job },
  mounted() {
    this.getJobsUser();
    this.$store.commit("setJobSelected", null);
  },
  data() {
    return {
      myJobsList: [],
    };
  },
  methods: {
    clickDetails(id) {
      this.$store.commit("setJobSelected", id);
      this.$router.push({
        name: "JobDetails",
        params: { id: id },
      });
    },
    async getJobsUser() {
      const user = await JSON.parse(localStorage.getItem("usuario"));
      if (user) {
        const response = await jobs.getJobUser(user.modelo.id);
        this.myJobsList = response.data[0].servicos;
      }
    },
  },
};
</script>

<style>
.jobs {
}
.my-jobs .all-jobs {
  width: 75%;
  margin: 0 auto;
  padding-top: 50px;
}
.my-jobs .list-title {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #404040;
}

.my-jobs .all-jobs .all-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.my-jobs .all-cards .job-card {
  margin: 10px 0;
  width: 28%;
}
/* RESPONSIVE MY JOBS ====================== */
@media (max-width: 736px) {
  .my-jobs .all-jobs,
  .list-jobs {
    width: 95%;
    margin: 0 auto;
  }
  .my-jobs .all-cards .job-card {
    margin: 10px 0;
    width: 100%;
  }
}
</style>
