<template>
  <div class="app-profile">
    <Menu />
    <div class="profile">
      <HeaderProfile
        :user="user"
        :caracteristicas_adcionais="features.caracteristicas_adcionais"
      />
      <!-- CARACTERISTICAS ===================== -->
      <Features :features="features" />
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
            <div class="btn-delete" @click="deletePhoto(upload)">
              <span>X</span>
            </div>
            <img :src="upload.url" alt="" />
          </div>
        </div>
      </div>

      <div
        id="polaroids"
        :class="tab2 ? 'tabcontent active-tab' : 'tabcontent'"
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
            v-for="(upload, key) in albuns[1].uploads"
            :key="key"
          >
            <div class="btn-delete" @click="deletePhoto(upload)">
              <span>X</span>
            </div>
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
            <div class="btn-delete" @click="deletePhoto(upload)">
              <span>X</span>
            </div>
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
            :disabled="disabled"
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
import HeaderProfile from "../components/HeaderProfile.vue";
import Features from "../components/Features.vue";
export default {
  components: {
    Menu,
    Button,
    HeaderProfile,
    Features,
  },
  mounted() {
    if (this.$store.state.pago) {
      this.getUser();
    } else {
      this.$router.push({ name: "plans" });
    }
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
      disabled: false,
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
      this.disabled = true;

      const data = new FormData();
      data.append("url", this.img);
      data.append("id_modelo", this.user.id);
      data.append("id_tipoalbum", this.albumSelected.id);
      const response = await Model.uploadImageAlbum(data);
      if (response.data) {
        this.disabled = false;
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
    async deletePhoto(img) {
      const response = await Model.deletePhotoUser(img.id);
      if (response.data) {
        this.$vToastify.success({
          body: "Foto removida com sucesso",
          title: "Tudo certo!",
        });
        this.getAlbum(this.user.id);
      }
    },
  },
};
</script>

<style>
.btn-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c40233;
  color: white;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 24px;
  position: relative;
  top: 40px;
  left: 20px;
  cursor: pointer;
}
.app-profile {
  background: white;

  overflow-x: hidden;
}
.profile {
  width: 75%;
  margin: 0 auto;
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
  background-position: center;
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
  .profile .section {
    width: 100%;
    font-size: 0.8rem;
  }
  .profile {
    width: 100%;
    margin: 0 auto;
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
    width: 95% !important;
    height: 400px;
  }
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
    height: 70vh;
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
    width: 320px;
    height: 320px;
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
  .images-profile .add-photo {
    width: 100%;
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
    width: 100%;
  }
  .tab-active {
    font-weight: 500;
    padding: 10px 0;
    font-size: 0.78rem;

    color: rgb(7, 6, 6);
    border-bottom: 1px solid rgb(7, 6, 6);
    transition: all 0.4s ease-in-out;
  }
  .tab-off {
    padding: 10px 0;
    font-size: 0.78rem;
    color: #908f8f;
    border-bottom: 1px solid #908f8f;
  }
}

@media (max-width: 936px) {
  .images-profile .picture-profile {
    width: 50%;
  }
  .images-profile .picture-profile img {
    width: 95%;
    height: 400px;
  }
}
</style>
