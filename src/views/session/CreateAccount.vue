<template>
  <div class="createaccount">
    <div class="header">
      <div class="logo">
        <img src="../../assets/create-account.svg" alt="Adicionar" />
      </div>
      <h2>Vamos começar escolhendo a área que deseja atuar:</h2>
    </div>
    <div class="section" @click="$router.push({ name: 'RegisterModel' })">
      <div class="image-card">
        <img src="../../assets/img-model.jpg" alt="Modelo" />
      </div>
      <div class="text-card">
        <div class="title">
          <span>Modelo</span>
        </div>
        <span class="description">
          Clique aqui se você é uma(o) modelo ou responsável por um(a).
        </span>
      </div>
    </div>
    <div class="section" @click="$router.push({ name: 'RegisterContractor' })">
      <div class="image-card">
        <img src="../../assets/img-contractor.jpg" alt="Contratante" />
      </div>
      <div class="text-card">
        <div class="title">
          <span>Contratante</span>
        </div>
        <span class="description">
          Clique aqui se você é um contratante que deseja ofertar vagas para
          modelos desta plataforma.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.createaccount {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* background: red; */
  width: 400px;
  margin: 0 auto;
  padding-top: 100px;
}

.createaccount .header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.createaccount .logo {
  background: white;
  width: 40%;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.createaccount .logo img {
  width: 70%;
}

.createaccount h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}

.section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  height: 130px;
  cursor: pointer;
}

.section img {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 0.8rem 0rem 0rem 0.8rem;
}

.image-card {
  width: 130px;
  height: 130px;
}

.text-card {
  text-align: left;
  background: white;
  border-radius: 0rem 0.8rem 0.8rem 0rem;
  padding: 10px 10px;
  height: 100%;
}
.section .text-card .title {
  border-bottom: 1px solid black;
  font-size: 1.1rem;
  font-weight: 500;
  width: 90%;
  border-bottom-width: 1px;
  margin-bottom: 10px;
}

.section .text-card .description {
  font-size: 0.8rem;
  /* margin-top: 10px; */
}

@media (max-width: 600px) {
  .createaccount {
    width: 380px;
  }
  .text-card {
    font-size: 0.875rem;
  }
}
</style>