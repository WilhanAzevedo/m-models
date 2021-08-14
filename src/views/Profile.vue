<template>
  <div class="profile">
    <Menu />
    <div class="personal-information" v-if="user">
      <div class="description">
        <div class="photo-circle">
          <img :src="user.foto_perfil" alt="Perfil" />
        </div>
        <div class="info-user">
          <span v-text="user.nome + ' ' + user.sobre_nome"></span>
          <div class="bottom-info">
            <div class="age" v-text="user.idade + 'y'"></div>
            <div class="location">
              <img src="../assets/localization.svg" alt="Localização" />
              <span v-text="user.cidade + ', ' + user.estado"></span>
            </div>
          </div>
          <div class="about">
            <span class="about-title">Sobre mim:</span>
            <div class="about-description">
              <span>
                Junte-se a nós para um lançamento especial do Nubank, em nosso
                canal no Youtube
              </span>
            </div>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'EditProfile' }" class="edit">
        <span> Editar </span>
        <img src="../assets/edit.svg" alt="Editar" />
      </router-link>
    </div>
    <!-- CARACTERISTICAS ===================== -->
    <div class="features" v-if="features">
      <div class="features-title">
        <span>Caracteristicas</span>
      </div>
      <div class="features-list">
        <div class="feature-item">
          <span v-text="'Olho ' + features.cor_olho.nome"></span>
        </div>
        <div class="feature-item">
          <span v-text="'Peso ' + features.peso + 'kg'"></span>
        </div>
        <div class="feature-item">
          <span v-text="'Manequim ' + features.manequim.nome"></span>
        </div>
        <div class="feature-item">
          <span v-text="'Quadril ' + features.quadril"></span>
        </div>
        <div class="feature-item">
          <span v-text="'Altura ' + features.altura">Altura 1.80</span>
        </div>
        <div class="feature-item" v-text="'Calçado ' + features.calcado">
          <span>Calçado 42</span>
        </div>
      </div>
    </div>
    <!-- IMAGENS ======================== -->

    <div class="tab">
      <button class="tablinks" @click="openCity(event, 'sectionJobs')">
        Seção de Jobs
      </button>
      <button class="tablinks" @click="openCity(event, 'polaroids')">
        Seção de Polaroids
      </button>
      <button class="tablinks" @click="openCity(event, 'books')">
        Seção de Books
      </button>
    </div>

    <!-- Tab content -->
    <div id="sectionJobs" class="tabcontent">
      <div class="images-profile">
        <div
          class="picture-profile"
          v-for="(upload, key) in albuns[0].uploads"
          :key="key"
        >
          <img :src="upload.url" alt="" />
        </div>
      </div>
      <div class="add-pictures">
        <span>Adicionar foto</span>
        <img src="../assets/add-pictures.svg" alt="Adicionar fotos" />
      </div>
    </div>

    <div id="polaroids" class="tabcontent">
      <div class="images-profile">
        <div
          class="picture-profile"
          v-for="(upload, key) in albuns[1].uploads"
          :key="key"
        >
          <img :src="upload.url" alt="" />
        </div>
      </div>
      <div class="add-pictures">
        <span>Adicionar foto</span>
        <img src="../assets/add-pictures.svg" alt="Adicionar fotos" />
      </div>
    </div>

    <div id="books" class="tabcontent">
      <div class="images-profile">
        <div
          class="picture-profile"
          v-for="(upload, key) in albuns[2].uploads"
          :key="key"
        >
          <img :src="upload.url" alt="" />
        </div>
      </div>
      <div class="add-pictures">
        <span>Adicionar foto</span>
        <img src="../assets/add-pictures.svg" alt="Adicionar fotos" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Model from "../services/request/model";
import Jobs from "../services/request/jobs";
export default {
  components: {
    Menu,
  },
  mounted() {
    this.getUser();
  },
  data() {
    return {
      user: null,
      features: null,
      albuns: null,
    };
  },
  methods: {
    async getUser() {
      const user = await JSON.parse(localStorage.getItem("usuario"));
      if (!user) {
        this.$router.replace({ name: "login" });
      }
      if (user) {
        const response = await Model.getFeaturesModel(user.modelo.id);
        if (response.status === 200) {
          this.features = response.data.caracteristicas[0];
        }
        this.user = user.modelo;
        this.getAlbum(this.user.id);
      }
    },
    async getAlbum(id) {
      const response = await Jobs.getAlbum(id);
      this.albuns = response.data;
      console.log(this.albuns);
    },
    openCity(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    },
  },
};
</script>

<style>
.profile {
  background: white;
}
.personal-information {
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  max-width: 1366px;
}
.photo-circle {
  width: 152px;
  margin-right: 50px;
}

.photo-circle img {
  width: 100%;
  clip-path: circle(39%);
}

.description {
  display: flex;
  align-items: flex-start;
}

.description .info-user {
  color: #404040;
}
.description a {
  display: flex;
  color: #908f8f;
  font-size: 0.9rem;
  cursor: pointer;
}

.bottom-info {
  display: flex;
  align-items: center;
  justify-content: start;
  color: #908f8f;
}
.bottom-info .location {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.bottom-info .location img {
  width: 18px;
}
.about {
  width: 80%;
  color: #908f8f;
  margin-top: 10px;
}
.about-title {
  color: #404040;
}

/* Caracteristicas ============================= */
.features {
  width: 75%;
  margin: 0 auto;
  max-width: 1366px;
}
.features-title {
  color: #404040;
}
.features-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.features .feature-item {
  background: #e5e5e5;
  border-radius: 23.1374px;
  width: 15%;
  text-align: center;
  padding: 5px 7px;
  font-size: 0.875rem;
  color: #908f8f;
  margin-right: 10px;
  margin-top: 10px;
}

/* IMAGENS =================================== */
.profile .section {
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #404040;
  margin-bottom: 10px;
}
.profile .section .add-pictures {
  display: flex;
  align-items: center;
  color: #908f8f;
  cursor: pointer;
  border: 1px solid #908f8f;
  padding: 5px 10px;
  border-radius: 8px;
  margin-right: 6px;
}
.profile .section .add-pictures span {
  margin-right: 8px;
}
.images-profile {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.images-profile .picture-profile {
  width: 33.33%;
}
.images-profile .picture-profile img {
  width: 98%;
  height: 300px;
  object-fit: cover;
}
/* Style the tab */
.tab {
  /* overflow: hidden; */
  max-width: 1366px;
  margin: 0 auto;

  border: 1px solid #ccc;
  background-color: #f1f1f1;
  display: flex;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  max-width: 1366px;
  margin: 0 auto;
}
/* RESPONSIVE ================================= */
@media (max-width: 468px) {
  .personal-information {
    width: 100%;
    padding: 0 15px;
  }
  .photo-circle {
    width: 200px;
    margin-right: 10px;
  }

  .photo-circle img {
    width: 100%;
    clip-path: circle(39%);
  }
  .about .about-description {
    width: 130%;
    font-size: 0.7rem;
  }
  .bottom-info {
    font-size: 0.7rem;
  }
  .features {
    width: 100%;
    padding: 0 15px;
    font-size: 0.875rem;
  }
  .features .feature-item {
    width: 30%;
    font-size: 0.86rem;
  }
  .profile .section {
    width: 88%;
    font-size: 0.8rem;
  }
  .images-profile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  }
  .images-profile .picture-profile {
    width: 100% !important;
  }
  .images-profile .picture-profile img {
    width: 100% !important;
    height: 400px;
  }
}

@media (max-width: 936px) {
  .personal-information {
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .description {
    font-size: 0.8rem;
    margin-top: 20px;
  }
  .about {
    width: 100%;
    color: #908f8f;
    margin-top: 10px;
    font-size: 0.8rem;
  }
  .features .feature-item {
    width: 30%;
  }
  .images-profile .picture-profile {
    width: 50%;
  }
  .images-profile .picture-profile img {
    width: 95%;
    height: 400px;
  }
}
</style>