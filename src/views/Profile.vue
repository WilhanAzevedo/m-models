<template>
  <div class="profile">
    <Menu />
    <div class="personal-information">
      <div class="photo-circle">
        <img src="../assets/img-contractor.jpg" alt="Perfil" />
      </div>
      <div class="description">
        <div class="info-user">
          <span>Jhonatan Borges</span>
          <div class="bottom-info">
            <div class="age">23y</div>
            <div class="location">
              <img src="../assets/localization.svg" alt="Localização" />
              <span>Sinop, MT</span>
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
        <router-link :to="{ name: 'EditProfile' }" class="edit">
          <span> Editar </span>
          <img src="../assets/edit.svg" alt="Editar" />
        </router-link>
      </div>
    </div>
    <!-- CARACTERISTICAS ===================== -->
    <div class="features">
      <div class="features-title">
        <span>Caracteristicas</span>
      </div>
      <div class="features-list">
        <div class="feature-item">
          <span>Olhos pretos</span>
        </div>
        <div class="feature-item">
          <span>Peso 64kg</span>
        </div>
        <div class="feature-item">
          <span>Manequim M</span>
        </div>
        <div class="feature-item">
          <span>Quadril 50</span>
        </div>
        <div class="feature-item">
          <span>Altura 1.80</span>
        </div>
        <div class="feature-item">
          <span>Calçado 42</span>
        </div>
      </div>
    </div>
    <!-- IMAGENS ======================== -->
    <div class="section">
      <div class="my-pictures">
        <span>Minhas fotos</span>
      </div>
      <div class="add-pictures">
        <span>Adicionar foto</span>
        <img src="../assets/add-pictures.svg" alt="Adicionar fotos" />
      </div>
    </div>
    <div class="images-profile">
      <div class="picture-profile">
        <img
          src="https://images.pexels.com/photos/6389877/pexels-photo-6389877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div class="picture-profile">
        <img
          src="https://images.pexels.com/photos/6602751/pexels-photo-6602751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div class="picture-profile">
        <img
          src="https://images.pexels.com/photos/8624947/pexels-photo-8624947.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>
      <div class="picture-profile">
        <img
          src="https://images.pexels.com/photos/935822/pexels-photo-935822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div class="picture-profile">
        <img
          src="https://images.pexels.com/photos/4668528/pexels-photo-4668528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div class="picture-profile">
        <img
          src="https://images.pexels.com/photos/2616970/pexels-photo-2616970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu,
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
  justify-content: flex-start;
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
  margin: 0 auto;
  display: flex;
  align-items: center;
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