<template>
  <div class="jobs">
    <Menu />
    <div class="list-jobs">
      <div class="list-title">
        <span>Últimos serviços</span>
      </div>
      <hooper :settings="hooperSettings" style="height: 240px">
        <slide v-for="(job, index) in jobsRecentsList" :key="index">
          <JobRecent
            :img="job.foto_servico"
            :title="job.nome_servico"
            :date="job.data_cadastro"
            :placeholder="job.nome_servico"
            :id="job.id"
            :clickDetails="clickDetails"
        /></slide>
      </hooper>
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
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: { Menu, JobRecent, Job, Hooper, Slide },
  mounted() {
    if(this.$store.state.pago){
    this.getJobs();
    this.getJobsRecents();
    }else{
      this.$router.push({ name: "plans" });
    }
  },
  data() {
    return {
      listJobs: [],
      jobsRecentsList: [],
      hooperSettings: {
        itemsToShow: 2,
        centerMode: false,
        breakpoints: {
          400: {
            centerMode: false,
            itemsToShow: 2,
            pagination: "fraction",
          },
          620: {
            centerMode: false,
            itemsToShow: 2,
            pagination: "fraction",
          },
          800: {
            centerMode: false,
            itemsToShow: 3,
            pagination: "fraction",
          },
          1000: {
            itemsToShow: 4,
            pagination: "fraction",
          },
        },
      },
    };
  },
  methods: {
    clickDetails(id) {
      this.$router.push({ name: "JobDetails", params: { id: id } });
    },
    async getJobs() {
      const token = localStorage.getItem("token");
      const response = await jobs.getJobs(token);
      this.listJobs = response.data;
    },
    async getJobsRecents() {
      const token = localStorage.getItem("token");
      const response = await jobs.getJobsRecents(token);
      this.jobsRecentsList = response.data;
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
  font-size: 1.8rem;
  color: black;
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
  width: 28%;
}
/* RESPONSIVE MY JOBS ================================ */

@media (max-width: 600px) {
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
