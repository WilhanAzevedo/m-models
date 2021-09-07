<template>
  <div class="app-profile">
    <Menu />
    <div class="profile">
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
                <span v-text="features.caracteristicas_adcionais">
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
      <!-- TAB ======================== -->

      <div class="tab">
        <div
          :class="tab1 ? 'tab-active' : 'tab-off'"
          @click="openSection('sectionJobs')"
        >
          <span> Seção de Jobs</span>
        </div>
        <div
          :class="tab2 ? 'tab-active' : 'tab-off'"
          @click="openSection('polaroids')"
        >
          <span> Seção de Polaroids</span>
        </div>
        <div
          :class="tab3 ? 'tab-active' : 'tab-off'"
          @click="openSection('books')"
        >
          <span> Seção de Books</span>
        </div>
      </div>

      <!-- IMAGES =========================== -->

      <div
        id="sectionJobs"
        :class="tab1 ? 'tabcontent active-tab' : 'tabcontent'"
        v-if="albuns"
      >
        <div class="images-profile">
          <div class="add-photo" @click="setImageJobs()">
            <input
              type="file"
              hidden
              id="upload-jobs"
              accept="image"
              @change="onChange"
            />
            <img src="../assets/cloud-upload.svg" alt="Adicionar fotos" />
            <div class="add-upload">
              <span>Adicionar foto</span>
            </div>
          </div>
          <div
            class="picture-profile"
            v-for="(upload, key) in albuns[0].uploads"
            :key="key"
          >
            <img :src="upload.url" alt="" />
          </div>
        </div>
      </div>

      <div
        id="polaroids"
        :class="tab2 ? 'tabcontent active-tab' : 'tabcontent'"
        v-if="albuns"
      >
        <div class="images-profile" @click="setImageJobs()">
          <div class="add-photo">
            <img src="../assets/cloud-upload.svg" alt="Adicionar fotos" />
            <div class="add-upload">
              <span>Adicionar foto</span>
            </div>
          </div>
          <div
            class="picture-profile"
            v-for="(upload, key) in albuns[1].uploads"
            :key="key"
          >
            <img :src="upload.url" alt="" />
          </div>
        </div>
      </div>

      <div
        id="books"
        :class="tab3 ? 'tabcontent active-tab' : 'tabcontent'"
        v-if="albuns"
      >
        <div class="images-profile">
          <div class="add-photo" @click="setImageJobs()">
            <img src="../assets/cloud-upload.svg" alt="Adicionar fotos" />
            <div class="add-upload">
              <span>Adicionar foto</span>
            </div>
          </div>
          <div
            class="picture-profile"
            v-for="(upload, key) in albuns[2].uploads"
            :key="key"
          >
            <img :src="upload.url" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal-overlay">
      <div class="modal">
        <span class="modal-title">Nova foto: {{ albumSelected.name }}</span>
        <div class="modal-image">
          <img :src="imgUrl" alt="Adicionar foto" height="300" />
        </div>
        <div class="button-modal">
          <a @click="close()" href="#" class="button cancel">Cancelar</a>
          <Button
            :textButton="'Salvar'"
            :backgroundButton="'primary'"
            :router="saveUpload"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Model from "../services/request/model";
import Jobs from "../services/request/jobs";
import Button from "../components/Button.vue";
export default {
  components: {
    Menu,
    Button,
  },
  mounted() {
    this.getUser();
  },
  data() {
    return {
      user: null,
      features: null,
      albuns: null,
      tab1: true,
      tab2: false,
      tab3: false,
      imgUrl: null,
      img: null,
      albumSelected: { name: "Seção de Jobs", id: 1 },
      notify: null,
    };
  },
  methods: {
    open() {
      //  Abrir modal
      // Adicionar a class active ao modal
      document.querySelector(".modal-overlay").classList.add("active");
      document.querySelector(".modal-overlay").classList.add("active");
    },
    close() {
      //  fechar o modal
      // remover a class active do modal
      document.querySelector(".modal-overlay").classList.remove("active");
      this.imgUrl = null;
      this.img = null;
    },
    async saveUpload() {
      const data = new FormData();
      data.append("url", this.img);
      data.append("id_modelo", this.user.id);
      data.append("id_tipoalbum", this.albumSelected.id);
      const response = await Model.uploadImageAlbum(data);
      if (response.data) {
        this.getAlbum(this.user.id);
        this.$vToastify.success({
          body: "Foto adicionada com sucesso",
          title: "Tudo certo!",
        });
        this.close();
      }
    },
    onChange(e) {
      this.imgUrl = URL.createObjectURL(e.target.files[0]);
      this.img = e.target.files[0];
      this.open();
    },
    async setImageJobs() {
      document.getElementById("upload-jobs").click();
    },
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
        this.user = response.data.modelo[0];
        this.getAlbum(this.user.id);
      }
    },
    async getAlbum(id) {
      const response = await Jobs.getAlbum(id);
      this.albuns = response.data;
      console.log(this.albuns);
    },
    openSection(sectionName) {
      if (sectionName === "sectionJobs") {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.albumSelected = { name: "Seção de Jobs", id: 1 };
      }
      if (sectionName === "polaroids") {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.albumSelected = { name: "Seção de Polaroids", id: 2 };
      }
      if (sectionName === "books") {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.albumSelected = { name: "Seção de Books", id: 3 };
      }
    },
  },
};
</script>

<style>
.app-profile {
  background: white;

  overflow-x: hidden;
}
.profile {
  width: 75%;
  margin: 0 auto;
}
.personal-information {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 40px;
}
.photo-circle {
  width: 120px;
  height: 120px;
  margin-right: 50px;
}

.photo-circle img {
  border-radius: 100%;
  width: inherit;
  height: inherit;
  border-radius: 100%;

  /* width: 100%; */
  /* clip-path: circle(40%); */
}

.description {
  display: flex;
  align-items: flex-start;
}

.description .info-user {
  color: #404040;
}
.about-description {
  overflow-wrap: break-word;
  hyphens: auto;
  word-break: break-word;
}

.bottom-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #908f8f;
}
.bottom-info .location {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 100%;
}

.bottom-info .location img {
  width: 18px;
}
.about {
  width: 100%;
  color: #908f8f;
  margin-top: 10px;
}
.about-title {
  color: #404040;
}

/* Caracteristicas ============================= */

.features-title {
  color: #404040;
  padding-top: 40px;
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
.images-profile .add-photo {
  width: 33.33%;
  height: 307px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  background: white;
  transition: all 0.2s ease-in-out;
}
.images-profile .add-photo:hover {
  background: #e5e5e5;
  width: 33.34%;
}
.images-profile .add-photo img {
  width: 50px;
}
.images-profile .add-upload {
  font-size: 1rem;
  color: #808080;
}
.images-profile {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.images-profile .picture-profile {
  width: 33.33%;
}
.images-profile .picture-profile img {
  width: 98%;
  height: 307px;
  object-fit: cover;
}

/* Style the tab ================================================*/
.profile .tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #404040;
  margin-bottom: 10px;
}
.tab-active,
.tab-off {
  cursor: pointer;
  width: 32.7%;
}
.tab-active {
  font-weight: 500;
  padding: 10px 0;
  font-size: 1rem;

  color: rgb(7, 6, 6);
  border-bottom: 1px solid rgb(7, 6, 6);
  transition: all 0.4s ease-in-out;
}
.tab-off {
  padding: 10px 0;
  font-size: 1rem;
  color: #908f8f;
  border-bottom: 1px solid #908f8f;
}

/* Style the tab content */
.tabcontent {
  display: none;
}
.active-tab {
  display: block;
}

/* MODAL UPLOAD ================================= */
.modal-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}
.modal {
  background: #f0f2f5;
  padding: 2.5rem;
  position: relative;
}
.modal .modal-title {
  font-size: 0.875rem;
  padding: 1rem 0;
}
.modal-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-image img {
  margin: 16px 0px;

  width: 400px;
  height: 400px;
  object-fit: cover;
}
.button-modal {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-modal a {
  padding: 1rem 4rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  margin: 5px 0px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: transparent;
  color: black;
}

/* RESPONSIVE ================================= */
@media (max-width: 468px) {
  .personal-information,
  .profile {
    width: 100%;
    padding: 0 15px;
  }
  .photo-circle {
    width: 200px;
    margin-right: 10px;
  }

  .photo-circle img {
    width: 80%;
    clip-path: circle(39%);
  }
  .about .about-description {
    width: 130%;
    font-size: 0.7rem;
  }
  .description {
    margin-right: 40px;
  }
  /* .info-user {
    display: flex;
    align-items: center;
    flex-direction: column;
  
  } */
  .bottom-info {
    display: flex;

    font-size: 0.7rem;
  }
  .features {
    width: 100%;
    padding: 0 15px;
    font-size: 0.875rem;
  }
  .features .feature-item {
    width: 30%;
    font-size: 0.8rem;
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
