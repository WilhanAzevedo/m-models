<template>
  <div class="menu">
    <div class="header">
      <div class="nav-bar">
        <div class="logo">
          <img src="../assets/logo.jpeg" alt="Logo" />
        </div>
        <div>
          <ul class="main-nav">
            <li>Perfil</li>
            <li>Portfólio</li>
            <li>Job</li>
            <li>Jobs contratados</li>
            <li>Suporte</li>
            <li>M Models no Telegram</li>
            <li>Sair</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menu {
  background: white;
  border-bottom: 2px solid #f4f4f4;
  font-family: "Montserrat", sans-serif;
}
.header {
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  background: white;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1400px;
  padding: 0;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav ul {
  list-style: none;
}

.header .logo {
  width: 75px;
}
.header .logo img {
  width: 80%;
}

.header li {
  padding: 0px 20px;
  list-style: none;
  font-size: 0.8rem;
}
</style>