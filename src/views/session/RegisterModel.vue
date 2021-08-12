<template>
  <div class="register-model">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.jpeg" alt="Logo" />
      </div>
      <h2>Você escolheu modelo, vamos começar com alguns cadastros simples</h2>
    </div>
    <div class="form">
      <Input :type="'name'" :placeholder="'Nome completo'" :img="'user.svg'" />
      <Input
        :type="'name'"
        :placeholder="'Data de nascimento'"
        :img="'birth-date.svg'"
      />
      <Input :type="'number'" :placeholder="'Idade'" :img="'age.svg'" />
      <Input :type="'number'" :placeholder="'Telefone'" :img="'call.svg'" />
      <Input :type="'name'" :placeholder="'Gênero'" :img="'gender.svg'" />
      <Button
        :textButton="'Avançar'"
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
  methods: {
    router() {
      this.$router.push({ name: "Localization" });
    },
  },
};
</script>

<style>
.register-model {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100%;
  /* background: red; */
  width: 350px;
  margin: 0 auto;
  padding-top: 50px;
}
.register-model .form {
  width: 100%;
}
.register-model .header .logo img {
  width: 30%;
  margin-bottom: 2rem;
}

.register-model .header h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}
</style>