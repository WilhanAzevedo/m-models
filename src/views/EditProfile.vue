<template>
  <div class="edit-profile">
    <Menu />
    <div class="edit-infos">
      <div class="tab">
        <div
          :class="tab1 ? 'tab-active' : 'tab-off'"
          @click="openSection('infoUser')"
        >
          <span>Informações pessoais</span>
        </div>
        <div
          :class="tab2 ? 'tab-active' : 'tab-off'"
          @click="openSection('features')"
        >
          <span>Caracteristicas</span>
        </div>
      </div>
      <div id="infoUser" :class="tab1 ? 'tabcontent active-tab' : 'tabcontent'">
        <!-- <div class="info-title">
          <span>Informações pessoais</span>
        </div> -->
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
              <span>Nome</span>
              <Input
                :type="'text'"
                :placeholder="'Nome'"
                :value="user.nome"
                @input="onName"
              />
            </div>
            <div class="input">
              <span>Sobrenome</span>
              <Input
                :type="'text'"
                :placeholder="'Sobrenome'"
                :value="user.sobre_nome"
                @input="onAboutName"
              />
            </div>
            <div class="input">
              <span>Data de nascimento</span>
              <Input
                :type="'date'"
                :placeholder="'2017-01-17'"
                :data="'2017-01-17'"
                :value="formatDate(user.data_nascimento)"
                @input="onDateBirthday"
              />
            </div>
            <div class="input">
              <span>Idade</span>
              <Input
                :type="'number'"
                :placeholder="'Idade'"
                :value="user.idade"
                @input="onAge"
              />
            </div>
            <div class="input">
              <span>Gênero</span>
              <InputSelect
                :type="'select'"
                :placeholder="'Gênero'"
                :value="user.genero"
                @input="onGender"
              />
            </div>
            <div class="input">
              <span>Estado</span>
              <Input
                :type="'text'"
                :placeholder="'Estado'"
                :value="user.estado"
              />
            </div>
            <div class="input">
              <span>Cidade</span>
              <Input
                :type="'text'"
                :placeholder="'Cidade'"
                :value="user.cidade"
              />
            </div>
            <div class="input">
              <span>Celular</span>
              <Input
                :type="'text'"
                :placeholder="'Celular'"
                :value="user.numero_whats"
              />
            </div>
            <div class="button-save">
              <div>
                <Button
                  :textButton="'Salvar'"
                  :backgroundButton="'primary'"
                  :router="saveInfoUser"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" :class="tab2 ? 'tabcontent active-tab' : 'tabcontent'">
        <div class="about-input" v-if="feature">
          <span>Sobre mim:</span>
          <Input
            :type="'text'"
            :placeholder="'Irracionais nas horas vagas'"
            :value="feature.caracteristicas_adcionais"
          />
        </div>
        <div class="info-title">
          <span>Detalhes</span>
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
            <Input
              :type="'number'"
              :value="feature.peso"
              :placeholder="'63.0'"
            />
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
              :router="saveFeatures"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Input from "../components/Input.vue";
import InputSelect from "../components/InputSelect.vue";
import Button from "../components/Button.vue";
import Model from "../services/request/model";
export default {
  components: {
    Menu,
    Input,
    Button,
    InputSelect,
  },
  data() {
    return {
      feature: null,
      user: null,
      tab1: true,
      tab2: false,
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
    onName(value) {
      this.user.nome = value;
    },
    onAboutName(value) {
      this.user.sobre_nome = value;
    },

    onDateBirthday(value) {
      this.user.data_nascimento = value;
    },

    onAge(value) {
      this.user.idade = value;
    },
    onGender(value) {
      this.user.genero = value;
    },

    saveInfoUser() {
      console.log(this.user);
    },
    saveFeatures() {
      console.log(this.feature);
    },
    openSection(sectionName) {
      if (sectionName === "infoUser") {
        this.tab1 = true;
        this.tab2 = false;
      }
      if (sectionName === "features") {
        this.tab1 = false;
        this.tab2 = true;
      }

      console.log(sectionName);
    },
  },
};
</script>

<style>
.edit-profile {
  height: 100%;
}
.edit-profile .edit-infos {
  width: 75%;
  height: 100vh;
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
  width: 100%;
}
.edit-profile .button-save div {
  margin-top: 10px;
  /* width: 10%; */
}
/* TAB ==================================== */
.edit-profile .tab {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  /* padding: 6px 12px; */
  /* border-top: none; */
}
.active-tab {
  display: block;
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