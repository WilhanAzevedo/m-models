<template>
  <div class="password">
    <div class="header-password">
      <img src="../../assets/logo.jpeg" alt="Logo" />
      <h2>Digite seu e-mail para recuperação</h2>
    </div>
    <div class="form">
      <Input :img="'icon-email.svg'" :type="'email'" :placeholder="'E-mail'" />
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
      this.$router.push({ name: "ConfirmCode" });
      console.log("jshadlkd");
    },
  },
};
</script>

<style>
.password {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* background: red; */
  width: 350px;
  margin: 0 auto;
  padding-top: 170px;
}
.password .form {
  width: 100%;
}
.password .header-password img {
  width: 30%;
  margin-bottom: 2rem;
}

h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}
</style>
