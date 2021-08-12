<template>
  <div class="company-information">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.jpeg" alt="Logo" />
        <h2>Alguns cadastros de informações da sua empresa</h2>
      </div>
      <div>
        <Input :type="'text'" :placeholder="'Site'" :img="'network.svg'" />
        <Input
          :type="'text'"
          :placeholder="'Nome fantasia'"
          :img="'fantasy-name.svg'"
        />
        <Input
          :type="'text'"
          :placeholder="'Atividade'"
          :img="'activity.svg'"
        />
        <Input
          :type="'text'"
          :placeholder="'Razão social'"
          :img="'corporate-name.svg'"
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
      this.$router.push({ name: "Localization" });
    },
  },
};
</script>

<style>
.company-information {
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

.company-information .header .logo img {
  width: 30%;
  margin-bottom: 2rem;
}

.company-information .header h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}
</style>