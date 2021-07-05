<template>
  <div class="newpassword">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.jpeg" alt="Logo" />
      </div>
      <h2>Agora redefina sua nova senha</h2>
    </div>
    <div>
      <Input
        :type="'text'"
        :placeholder="'Nova senha'"
        :img="'icon-lock.svg'"
      />
      <Input
        :type="'text'"
        :placeholder="'Confirme nova senha'"
        :img="'icon-lock.svg'"
      />
      <Button
        :textButton="'Confirmar'"
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
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.newpassword {
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

.newpassword .header .logo img {
  width: 30%;
  margin-bottom: 2rem;
}

.newpassword .header h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}
</style>