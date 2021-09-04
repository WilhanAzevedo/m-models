<template>
  <div class="localization">
    <div class="header">
      <img src="../../assets/logo.jpeg" alt="Logo" />
      <p>E por ultimo precisamos que forneça sua localização</p>
    </div>
    <div class="form">
      <Input
        :type="'text'"
        :placeholder="'Cidade'"
        :img="'localization.svg'"
        @input="onCity"
      />
      <Input
        :type="'text'"
        :placeholder="'Estado'"
        :img="'localization.svg'"
        @input="onState"
      />
      <Button
        :textButton="'Finalizar cadastro'"
        :backgroundButton="'primary'"
        :router="router"
      />
    </div>
  </div>
</template>

<script>
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
export default {
  components: {
    Input,
    Button,
  },
  data() {
    return {
      estado: null,
      cidade: null,
    };
  },
  methods: {
    onState(value) {
      this.user.estado = value;
    },

    onCity(value) {
      this.user.cidade = value;
    },
    router() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.localization {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 350px;
  margin: 0 auto;
}
.localization .form {
  width: 100%;
}
.localization .header img {
  width: 45%;
  border-radius: 0.8rem;
  margin-bottom: 35px;
}

.localization p {
  font-weight: 400;
  font-size: 1rem;
  padding: 20px 0px;
}
</style>