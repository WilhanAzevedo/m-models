<template>
  <div>
    <div class="menu">
      <div class="header">
        <div class="nav-bar">
          <div class="logo" @click="home()">
            <img src="../assets/logo.jpeg" alt="Logo" />
          </div>
          <div>
            <ul class="main-nav">
              <li>
                <a href="https://wa.me/556193707131" target="_blank">Suporte</a>
              </li>
              <li>
                <a href="https://t.me/joinchat/osN4TrYbmVFlMzkx" target="_blank"
                  >M Models no Telegram</a
                >
              </li>
              <li><router-link :to="{ name: 'login' }">Sair</router-link></li>
            </ul>
          </div>
          <div id="menu-responsive" @click="openNav">
            <img src="../assets/menu.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >

      <div class="overlay-content">
        <a href="https://wa.me/556193707131" target="_blank">Suporte</a>

        <a href="https://t.me/joinchat/osN4TrYbmVFlMzkx" target="_blank"
          >M Models no Telegram</a
        >
        <a href="#"><router-link :to="{ name: 'login' }">Sair</router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },

    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },

    home() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.menu {
  border-bottom: 2px solid #f4f4f4;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  background: white;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 17px;
}
.main-nav li:hover {
  background-color: #ddd;
  border-radius: 0.4rem;
  padding: 5px 6px;
}

.main-nav ul {
  list-style: none;
}

.menu .header .logo {
  width: 194px;
}
.menu .header .logo img {
  width: 80%;
  cursor: pointer;
}

.menu .header li {
  padding: 0px 20px;
  list-style: none;
  font-size: 0.8rem;
  cursor: pointer;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
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
@media (max-width: 420px) {
  .menu .header {
    width: 90%;
    padding: 0 15px;
  }
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
  #menu-responsive img {
    width: 130%;
  }
  .menu .header .logo {
    width: 75px;
  }
}
</style>
