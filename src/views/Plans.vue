<template>
  <div class="plans">
    <MenuPlanos />
    <div class="list-plans">
      <div class="list-title">
        <span>Identificamos que você nao possui plano ativo</span>
      </div>
      <div class="title-select">
        <span>Escolha seu plano</span>
      </div>
      <div class="content">
        <div class="list" v-for="(plan, index) in plans" :key="index">
          <Plans
            :title="plan.reason"
            :valor="plan.transaction_amount"
            :id="plan.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuPlanos from "../components/MenuPlanos.vue";
import plans from "../services/request/plans";
import Plans from "../components/Plans.vue";
export default {
  components: { MenuPlanos, Plans },
  mounted() {
    plans.getPlans().then((response) => {
      this.plans = response.data;
    });
  },
  data() {
    return {
      plans: {},
    };
  },
};
</script>

<style>
.plans {
  height: 100vh;
}
.list-plans {
  width: 75%;
  margin: 0 auto;
  padding-top: 50px;
}

.list {
  margin: 0 auto;
  margin-top: 20px;
}

.content {
  display: flex;
}
.plans .list-title {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: black;
}

.plans .title-select {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: black;
}

@media (max-width: 400px) {
  .content {
    display: grid;
  }
}
</style>
