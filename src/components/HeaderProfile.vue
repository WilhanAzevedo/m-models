<template>
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
          <div class="about-description" v-if="caracteristicas_adcionais">
            <span v-text="caracteristicas_adcionais"> </span>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'EditProfile' }" class="edit">
      <span> Editar </span>
      <img src="../assets/edit.svg" alt="Editar" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
    caracteristicas_adcionais: String,
  },
};
</script>

<style>
.personal-information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
}
.photo-circle {
  height: 190px;
  margin-right: 80px;
}

.photo-circle img {
  width: 190px;
  height: 190px;
  object-fit: cover;
  border-radius: 100%;
}

.description {
  display: flex;
  align-items: center;
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
@media (max-width: 936px) {
  .personal-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .photo-circle {
    height: 190px;
    border-radius: 100%;
    margin: 0;
  }

  .photo-circle img {
    width: 190px;
    height: 190px;
    object-fit: cover;
  }
  .info-user {
    text-align: center;
    padding: 9px 0px;
  }
  .about-description {
    overflow-wrap: break-word;
    hyphens: auto;
    word-break: break-word;
    text-align: center;
  }
  .about {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about .about-description {
    font-size: 0.7rem;
    text-align: center;
  }

  .description {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .bottom-info {
    max-width: 120px;
    margin: 0 auto;
    font-size: 0.8rem;
  }
  .edit {
    text-align: center;
  }
}
</style>
