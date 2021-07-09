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
        <div id="menu-responsive">
          <img src="../assets/menu.svg" alt="" />
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
  font-family: "Poppins", sans-serif;
  font-weight: normal;
}
.menu .header {
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

.menu .header .logo {
  width: 75px;
}
.menu .header .logo img {
  width: 80%;
}

.menu .header li {
  padding: 0px 20px;
  list-style: none;
  font-size: 0.8rem;
  cursor: pointer;
}

/* RESPONSIVE ============================= */
@media (max-width: 1068px) {
  .main-nav {
    display: none;
    visibility: hidden;
  }
}
@media (min-width: 1068px) {
  #menu-responsive {
    display: none;
    visibility: hidden;
  }
}
@media (max-width: 400px) {
  .menu .header {
    width: 100%;
    padding: 0 15px;
  }
  #menu-responsive img {
    width: 130%;
  }
}
</style>