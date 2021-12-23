<template>
  <div class="plans-component">
    <div class="plan-card">
      <div>
        <span>{{ title }}</span>
      </div>
      <div>
        <span>R$ {{ string(valor) }}</span><br>
        
      </div>
      <div>
        <button class="primary" @click="pagar(id)">Escolher</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import plans from "../services/request/plans";
export default {
  props: {
    title: String,
    valor : Number,
    id: Number,
  },
  methods: {
    string(val) {
      let string = val.toString();
      string = string.replace(".", ",");
      return string;
    },
    pagar(id) {
      let dados = {
        plan_id: id,
      };
      this.$vToastify.success({
          body: "Aguarde o pagamento para continuar",
          title: "Pagamento",
      });
      plans.payPlan(dados).then(response => {
        if (response.status === 200) {
           window.location.href = response.data.init_point;     
        }
      });
    },
  },
};
</script>

<style>
.plan-card {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}

.plan-card {
  text-align: center;
  font-size: 1rem;
  color: #908f8f;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  /* -webkit-line-clamp: 2; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  padding: 1.1rem;
  box-shadow: 0px 1px 5px 0px #949494;

}

.plan-card .content {
  padding: 0rem 10rem;
}

.plan-card{
  width: 180px;
  object-fit: cover;
  border-radius: 0.8rem;
  cursor: pointer;
}
button {
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  margin: 5px 0px;
  width: 60%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.primary {
  background: rgb(29, 28, 28);
  color: white;
}
.primary:hover {
  background: black;
}
.secondary {
  background: transparent;
  color: black;
}
/* RESPONSIVE MY JOBS ================================ */

@media (max-width: 400px) {
  .plan-card{
    /* width: 150px; */
    object-fit: cover;
    border-radius: 0.8rem;
    cursor: pointer;
  }
}
</style>
