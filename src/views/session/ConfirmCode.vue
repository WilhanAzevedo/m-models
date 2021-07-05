<template>
  <div class="code">
    <div class="header-code">
      <div class="logo">
        <img src="../../assets/logo.jpeg" alt="Logo" />
      </div>
      <h2>
        Enviamos um código de confirmação no seu e-mail. Por favor, insira-o no
        campo abaixo
      </h2>
    </div>
    <div>
      <Input
        :type="'text'"
        :placeholder="'Código'"
        :img="'icon-lock-open.svg'"
      />
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
  components: { Input, Button },
  methods: {
    router() {
      this.$router.push({ name: "NewPassword" });
    },
  },
};
</script>

<style>
.code {
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

.code .header-code .logo img {
  width: 30%;
  margin-bottom: 2rem;
}

h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
  text-align: center;
}
</style>