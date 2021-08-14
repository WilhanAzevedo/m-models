<template>
  <div class="edit-profile">
    <Menu />
    <div class="edit-infos">
      <div class="info-title">
        <span>Informações pessoais</span>
      </div>
      <div class="info-personal">
        <div class="change-photo">
          <div class="photo">
            <img src="../assets/img-contractor.jpg" alt="Alterar foto" />
          </div>
          <div class="button-edit">
            <span>Alterar foto</span>
            <img src="../assets/add-pictures.svg" alt="" />
          </div>
        </div>
        <div class="form" v-if="user">
          <div class="input">
            <span>Nome completo</span>
            <Input
              :type="'text'"
              :placeholder="'Nome completo'"
              :value="user.nome + ' ' + user.sobre_nome"
            />
          </div>
          <div class="input">
            <span>Data de nascimento</span>
            <Input
              :type="'date'"
              :placeholder="'2017-01-17'"
              :data="'2017-01-17'"
              :value="formatDate(user.data_nascimento)"
            />
          </div>
          <div class="input">
            <span>Idade</span>
            <Input
              :type="'number'"
              :placeholder="'Idade'"
              :value="user.idade"
            />
          </div>
          <div class="input">
            <span>Gênero</span>
            <Input
              :type="'text'"
              :placeholder="'Gênero'"
              :value="user.genero"
            />
          </div>
        </div>
      </div>
      <div class="about-input">
        <span>Sobre mim:</span>
        <Input :type="'text'" :placeholder="'Irracionais nas horas vagas'" />
      </div>
      <div class="info-title">
        <span>Caracteristicas</span>
      </div>
      <div class="form-features" v-if="feature">
        <div class="input">
          <span>Cor do cabelo</span>
          <Input
            :type="'text'"
            :value="feature.cor_cabelo.nome"
            :placeholder="'Cor do cabelo'"
          />
        </div>
        <div class="input">
          <span>Cor dos olhos</span>
          <Input
            :type="'text'"
            :value="feature.cor_olho.nome"
            :placeholder="'Preto'"
          />
        </div>
        <div class="input">
          <span>Cor da pele</span>
          <Input
            :type="'text'"
            :value="feature.cor_pele.nome"
            :placeholder="'Negra'"
          />
        </div>
        <div class="input">
          <span>Manequim</span>
          <Input
            :type="'text'"
            :value="feature.manequim.nome"
            :placeholder="'M'"
          />
        </div>
        <div class="input">
          <span>Altura</span>
          <Input
            :type="'number'"
            :value="feature.altura"
            :placeholder="'1.80'"
          />
        </div>
        <div class="input">
          <span>Peso</span>
          <Input :type="'number'" :value="feature.peso" :placeholder="'63.0'" />
        </div>
        <div class="input">
          <span>Quadril</span>
          <Input
            :type="'number'"
            :value="feature.quadril"
            :placeholder="'50'"
          />
        </div>
        <div class="input">
          <span>Busto torax</span>
          <Input
            :type="'number'"
            :value="feature.busto_torax"
            :placeholder="'63'"
          />
        </div>
        <div class="input">
          <span>Calçado</span>
          <Input
            :type="'number'"
            :value="feature.calcado"
            :placeholder="'42'"
          />
        </div>
        <div class="input">
          <span>Cintura</span>
          <Input
            :type="'number'"
            :value="feature.cintura"
            :placeholder="'50'"
          />
        </div>
      </div>
      <div class="button-save">
        <div>
          <Button
            :textButton="'Salvar'"
            :backgroundButton="'primary'"
            :router="save"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import Model from "../services/request/model";
export default {
  components: {
    Menu,
    Input,
    Button,
  },
  data() {
    return {
      feature: null,
      user: null,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    formatDate(date) {
      const newDate = new Date(date);
      const splittedDate = newDate.toISOString().slice(0, 10);
      return splittedDate;
    },
    async getUser() {
      const user = await JSON.parse(localStorage.getItem("usuario"));
      if (!user) {
        this.$router.replace({ name: "login" });
      }
      if (user) {
        const response = await Model.getFeaturesModel(user.modelo.id);
        if (response.status === 200) {
          this.feature = response.data.caracteristicas[0];
          this.user = response.data.modelo[0];
        }
      }
    },
    save() {},
  },
};
</script>

<style>
.edit-profile {
  height: 100%;
}
.edit-profile .edit-infos {
  width: 75%;
  margin: 0 auto;
  padding: 30px 0;
}

.edit-profile .info-title {
  font-size: 0.875rem;
  border-bottom: 1px solid #908f8f;
  padding: 10px 0;
  margin: 10px 0;
}
.edit-profile .info-personal {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 200px; */
}

.edit-profile .change-photo .photo img {
  width: 137px;
  height: 137px;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 50px;
}
.edit-profile .button-edit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #908f8f;
  cursor: pointer;
  border: 1px solid #908f8f;
  padding: 5px 10px;
  border-radius: 8px;
  margin-right: 6px;
  font-size: 0.875rem;
  width: 137px;
}
.edit-profile .button-edit span {
}

.edit-profile .button-edit img {
  width: 20px;
}
.edit-profile .form {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.edit-profile .form .input {
  width: 45%;
  margin: 10px 0;
  margin-right: 30px;
}
.edit-profile .input span {
  font-size: 0.875rem;
}

.edit-profile .about-input {
  width: 90%;
}
.edit-profile .about-input span {
  font-size: 0.875rem;
}
.edit-profile .form-features {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.edit-profile .form-features .input {
  width: 15%;
  margin-right: 30px;
}

.edit-profile .button-save {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 10px;
  /* width: 15%; */
}
.edit-profile .button-save div {
  margin-top: 10px;
  /* width: 10%; */
}
/* RESPONSIVE ============================== */

@media (max-width: 468px) {
  .edit-profile .edit-infos {
    width: 90%;
  }

  .edit-profile .info-personal {
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .edit-profile .change-photo {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: crimson; */
    flex-direction: column;
    width: 100%;
  }
  .edit-profile .change-photo .photo img {
    margin-right: 0;
  }

  .edit-profile .form .input {
    width: 100%;
    margin: 10px 0;
    margin-right: 0px;
  }
  .edit-profile .about-input {
    width: 100%;
  }
  .edit-profile .form-features .input {
    width: 100%;
    margin: 10px 0;
    margin-right: 0;
  }
  .edit-profile .form-features .input:nth-child(n + 1):nth-child(-n + 4) {
    width: 100%;
  }
  .edit-profile .form-features .input:nth-child(n + 5):nth-child(-n + 10) {
    width: 31%;
  }
  .edit-profile .button-save {
    width: 100%;
    display: block;
  }
}
</style>