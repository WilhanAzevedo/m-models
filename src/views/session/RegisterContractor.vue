<template>
  <div class="register-contractor">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.jpeg" alt="Logo" />
      </div>
      <h2>
        Você escolheu contratante, vamos começar com alguns cadastros simples
      </h2>
      <div>
        <Input :type="'text'" :placeholder="'Nome'" :img="'user.svg'" />
        <Input
          :type="'e-mail'"
          :placeholder="'E-mail'"
          :img="'icon-email.svg'"
        />
        <Input
          :type="'password'"
          :placeholder="'Senha'"
          :img="'icon-lock.svg'"
        />
        <Button
          :textButton="'Avançar'"
          :backgroundButton="'primary'"
          :router="router"
        />
      </div>
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
      this.$router.push({ name: "CompanyInformation" });
    },
  },
};
</script>

<style>
.register-contractor {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* background: red; */
  width: 350px;
  margin: 0 auto;
  padding-top: 50px;
}

.register-contractor .header .logo img {
  width: 30%;
  margin-bottom: 2rem;
}

.register-contractor .header h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}
</style>
