<template>
  <div id="app">
    <div class="root">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (localStorage.getItem("userPay") && localStorage.getItem("token")) {
      this.$store.commit("setUserPay", true);
    } else {
      this.$store.commit("setUserPay", false);
      this.$router.push({ name: "login" });
    }
  },
};
</script>
<style>
* {
  margin: 0;
  border: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

#app {
  background: #f0f2f5;
  font-family: "Poppins", sans-serif;
}
</style>
