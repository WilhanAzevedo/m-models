<template>
  <div class="my-jobs">
    <Menu />
    <div class="all-jobs">
      <div class="list-title">
        <span>Meus Jobs</span>
      </div>
      <div class="all-cards">
        <Job
          img="https://blog.revendakwg.com.br/wp-content/uploads/2017/05/fazer-uma-revista-750x410.png"
          title="Editorial de revista"
          date="16/07/2021 - 00:00"
          placeholder="Imagem ilustrativa de revista"
          description="Precisamos de 2 rapazes e 2 moças de 18 a 25 anos..."
          :clickDetails="clickDetails"
        />
        <Job
          img="https://www.quimicolla.com.br/wp-content/uploads/2020/12/Producao-de-calcados-de-ponta-a-ponta-em-Sao-Joao-Batista-pichi.jpg"
          title="Loja de calçados"
          date="16/07/2021 - 00:00"
          placeholder="Imagem ilustrativa de calçados"
          :clickDetails="clickDetails"
          description="Precisamos de uma mulher que tenha entre 30 e 40 anos para ser modelo em uma campanha de calçados."
        />
        <Job
          img="https://blog.lavillecasa.com.br/wp-content/uploads/2020/01/GettyImages-942746880-1-750x499.jpg"
          title="Atendente em evento"
          date="16/07/2021 - 00:00"
          placeholder="Um homem preparando drinks"
          :clickDetails="clickDetails"
          description="Precisamos urgente de homens e mulheres de 18 a 30 anos de idade para trabalhar como atendente"
        />
        <Job
          img="https://blog.revendakwg.com.br/wp-content/uploads/2017/05/fazer-uma-revista-750x410.png"
          title="Editorial de revista"
          date="16/07/2021 - 00:00"
          placeholder="Imagem ilustrativa de revista"
          description="Precisamos de 2 rapazes e 2 moças de 18 a 25 anos..."
          :clickDetails="clickDetails"
        />
        <Job
          img="https://www.quimicolla.com.br/wp-content/uploads/2020/12/Producao-de-calcados-de-ponta-a-ponta-em-Sao-Joao-Batista-pichi.jpg"
          title="Loja de calçados"
          date="16/07/2021 - 00:00"
          placeholder="Imagem ilustrativa de calçados"
          :clickDetails="clickDetails"
          description="Precisamos de uma mulher que tenha entre 30 e 40 anos para ser modelo em uma campanha de calçados."
        />
        <Job
          img="https://blog.lavillecasa.com.br/wp-content/uploads/2020/01/GettyImages-942746880-1-750x499.jpg"
          title="Atendente em evento"
          date="16/07/2021 - 00:00"
          placeholder="Um homem preparando drinks"
          :clickDetails="clickDetails"
          description="Precisamos urgente de homens e mulheres de 18 a 30 anos de idade para trabalhar como atendente"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Job from "../components/Job.vue";
export default {
  components: { Menu, Job },
  methods: {
    clickDetails() {
      this.$router.push({ name: "JobDetails" });
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
  width: 32%;
}
/* RESPONSIVE MY JOBS ====================== */
@media (max-width: 400px) {
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