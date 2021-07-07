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
            <div>
              <span>
                Junte-se a nós para um lançamento especial do Nubank, em nosso
                canal no Youtube
              </span>
            </div>
          </div>
        </div>
        <div class="edit">
          <span> Editar </span>
          <img src="../assets/edit.svg" alt="Editar" />
        </div>
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
  /* background: red; */
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
.description .edit {
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
  /* background: red; */
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
  width: 60%;
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
  margin-bottom: 50px;
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
  width: 95%;
  height: 300px;
  object-fit: cover;
  margin-top: 10px;
}
</style>