<template>
  <div class="edit-profile">
    <Menu />
    <div class="edit-infos">
      <div class="tab">
        <div
          :class="tab1 ? 'tab-active' : 'tab-off'"
          @click="openSection('infoUser')"
        >
          <span>Usúario</span>
        </div>
        <div
          :class="tab2 ? 'tab-active' : 'tab-off'"
          @click="openSection('features')"
        >
          <!-- CARACTERISTICAS ================================= -->
          <span>Caracteristicas</span>
        </div>
      </div>
      <div
        id="infoUser"
        :class="tab1 ? 'tabcontent active-tab' : 'tabcontent'"
        v-if="user"
      >
        <div class="change-photo">
          <div class="personal-image">
            <label class="label">
              <input type="file" @change="onFileChange" />
              <figure class="personal-figure">
                <img :src="urlImg" class="personal-avatar" alt="avatar" />
                <figcaption class="personal-figcaption">
                  <img
                    src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
                  />
                </figcaption>
              </figure>
            </label>
          </div>
          <!-- ========================= -->
        </div>
        <div class="info-personal">
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
                disabled
                @input="onAge"
              />
            </div>
            <div class="input">
              <span>Gênero</span>
              {{ user.genero }}
              <InputSelect
                :type="'select'"
                :placeholder="'Gênero'"
                :value="{ nome: user.genero }"
                :values="gender"
                @input="onGender"
              />
            </div>
            <div class="input">
              <span>Celular</span>
              <Input
                :type="'text'"
                :placeholder="'Celular'"
                :value="user.numero_whats"
                @input="onWhats"
              />
            </div>
            <div class="input">
              <span>Estado</span>
              <Input
                :type="'text'"
                :placeholder="'Estado'"
                :value="user.estado"
                @input="onState"
              />
            </div>
            <div class="input">
              <span>Cidade</span>
              <Input
                :type="'text'"
                :placeholder="'Cidade'"
                :value="user.cidade"
                @input="onCity"
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
            @input="onAbout"
          />
        </div>
        <div class="info-title">
          <span>Detalhes</span>
        </div>
        <div class="form-features" v-if="feature">
          <div class="input">
            <span>Cor do cabelo</span>
            <InputSelect
              :type="'select'"
              :placeholder="'Cor do cabelo'"
              :value="feature.cor_cabelo"
              :values="colorHair"
              @input="onColorHair"
            />
          </div>
          <div class="input">
            <span>Cor dos olhos</span>

            <InputSelect
              :type="'select'"
              :placeholder="'Cor dos Olhos'"
              :value="feature.cor_olho"
              :values="colorEyes"
              @input="onColorEyes"
            />
          </div>
          <div class="input">
            <span>Cor da pele</span>
            <InputSelect
              :type="'select'"
              :placeholder="'Cor da pele'"
              :value="feature.cor_pele"
              :values="colorSkin"
              @input="onColorSkin"
            />
          </div>
          <div class="input">
            <span>Manequim</span>
            <InputSelect
              :type="'select'"
              :placeholder="'Tamanho manequim'"
              :value="feature.manequim"
              :values="manequimOptions ? manequimOptions : []"
              @input="onManequim"
            />
          </div>
          <div class="input">
            <span>Altura</span>
            <Input
              :type="'number'"
              :value="feature.altura"
              :placeholder="'Altura'"
              @input="onHeight"
            />
          </div>
          <div class="input">
            <span>Peso</span>
            <Input
              :type="'number'"
              :value="feature.peso"
              :placeholder="'Peso'"
              @input="onWeight"
            />
          </div>
          <div class="input">
            <span>Quadril</span>
            <Input
              :type="'numupload ber'"
              :value="feature.quadril"
              :placeholder="'Quadril'"
              @input="onHip"
            />
          </div>
          <div class="input">
            <span>Busto torax</span>
            <Input
              :type="'number'"
              :value="feature.busto_torax"
              :placeholder="'Busto torax'"
              @input="onBust"
            />
          </div>
          <div class="input">
            <span>Calçado</span>
            <Input
              :type="'number'"
              :value="feature.calcado"
              :placeholder="'Calçado'"
              @input="onShoe"
            />
          </div>
          <div class="input">
            <span>Cintura</span>
            <Input
              :type="'number'"
              :value="feature.cintura"
              :placeholder="'Cintura'"
              @input="onWaist"
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
      urlImg: null,
      changeImg: false,
      userImg: null,
      formFeatures: {
        id: null,
      },
      gender: [
        { nome: "Masculino" },
        { nome: "Feminino" },
        { nome: "Prefiro não informar" },
      ],
      colorHair: [],
      colorEyes: [],
      colorSkin: [],
      manequimOptions: [],
      create: false,
    };
  },
  mounted() {
    this.getUser();
    this.getFeatures();
  },
  methods: {
    async getFeatures() {
      const response = await Model.getFeaturesForm();
      if (response.data.length > 0) {
        this.colorHair = response.data[0].predefinidas;
        this.colorEyes = response.data[1].predefinidas;
        this.colorSkin = response.data[2].predefinidas;
        this.manequimOptions = response.data[3].predefinidas;
      }
    },
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
          if (response.data.caracteristicas.length > 0) {
            this.feature = response.data.caracteristicas[0];
          }

          if (response.data.caracteristicas.length < 1) {
            this.feature = {
              cor_cabelo: null,
              cor_olho: null,
              cor_pele: null,
              manequim: null,
              altura: null,
              peso: null,
              quadril: null,
              busto_torax: null,
              calcado: null,
              cintura: null,
              caracteristicas_adcionais: null,
            };
            this.create = true;
          }
          this.user = response.data.modelo[0];
          this.urlImg = this.user.foto_perfil;
          this.formFeatures.id = response.data.modelo[0].id;
        }
      }
    },
    // Informações pessoais
    onName(value) {
      this.user.nome = value;
    },
    onAboutName(value) {
      this.user.sobre_nome = value;
    },

    onDateBirthday(value) {
      this.user.idade = this.getAge(value);
      this.user.data_nascimento = value;
    },

    onAge(value) {
      this.user.idade = value;
    },
    onGender(value) {
      this.user.genero = value;
    },
    onWhats(value) {
      this.user.numero_whats = value;
    },
    onState(value) {
      this.user.estado = value;
    },

    onCity(value) {
      this.user.cidade = value;
    },

    // Caracteristicas

    onAbout(value) {
      this.feature.caracteristicas_adcionais = value;
    },
    onColorHair(value) {
      this.feature.cor_cabelo = JSON.parse(value);
    },
    onColorEyes(value) {
      this.feature.cor_olho = JSON.parse(value);
    },
    onColorSkin(value) {
      this.feature.cor_pele = JSON.parse(value);
    },
    onManequim(value) {
      this.feature.manequim = JSON.parse(value);
    },
    onHeight(value) {
      this.feature.altura = JSON.parse(value);
    },
    onWeight(value) {
      this.feature.peso = JSON.parse(value);
    },
    onHip(value) {
      this.feature.quadril = JSON.parse(value);
    },
    onBust(value) {
      this.feature.busto_torax = JSON.parse(value);
    },
    onShoe(value) {
      this.feature.calcado = JSON.parse(value);
    },
    onWaist(value) {
      this.feature.cintura = JSON.parse(value);
    },

    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },

    async saveInfoUser() {
      if (this.changeImg) {
        this.handleProfileImg();
      }
      const user = {
        nome: this.user.nome,
        sobre_nome: this.user.sobre_nome,
        idade: this.user.idade,
        numero_whats: this.user.numero_whats,
        data_nascimento:
          this.formatDate(this.user.data_nascimento) + " 00:00:00",
        cidade: this.user.cidade,
        estado: this.user.estado,
        id: this.user.id,
      };
      const response = await Model.changeUser(user);
      if (response.data) {
        this.$vToastify.success({
          body: "Alterado com sucesso",
          title: "Tudo certo!",
        });
      }
    },
    async saveFeatures() {
      const features = {
        altura: this.feature.altura,
        peso: this.feature.peso,
        manequim: this.feature.manequim.id,
        busto_torax: this.feature.busto_torax,
        quadril: this.feature.quadril,
        calcado: this.feature.calcado,
        cor_olho: this.feature.cor_olho.id,
        cor_cabelo: this.feature.cor_cabelo.id,
        cor_pele: this.feature.cor_pele.id,
        cintura: this.feature.cintura,
        id_modelo: this.user.id,
        idModelo: this.user.id,
        update_at: null,
        caracteristicas_adcionais: this.feature.caracteristicas_adcionais,
        id: this.user.id,
      };
      console.log("aqui");
      if (this.create) {
        const response = await Model.createFeatures(features);
        if (response.data) {
          this.$vToastify.success({
            body: "Cadastrado com sucesso",
            title: "Tudo certo!",
          });
        }
      } else {
        const response = await Model.changeFeatures(features);
        if (response.data) {
          this.$vToastify.success({
            body: "Alterado com sucesso",
            title: "Tudo certo!",
          });
        }
      }
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
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.urlImg = URL.createObjectURL(file);
      this.changeImg = true;

      this.userImg = file;
    },
    async handleProfileImg() {
      const formData = new FormData();
      formData.append("foto_perfil", this.userImg);
      const response = await Model.handleProfileImg(this.user.id, formData);
      if (response.data) {
        this.$vToastify.success({
          body: "Alterado com sucesso",
          title: "Tudo certo!",
        });
      }
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
}
/* ALTERAR FOTO ===================*/
.personal-image {
  text-align: center;
}
.personal-image input[type="file"] {
  display: none;
}
.personal-figure {
  position: relative;
  width: 150px;
  height: 150px;
}
.personal-figure img {
  position: relative;
  object-fit: cover;
}
.personal-avatar {
  cursor: pointer;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 2px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  transition: all ease-in-out 0.3s;
}
.personal-avatar:hover {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}
.personal-figcaption {
  cursor: pointer;
  position: absolute;
  top: 0px;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.personal-figcaption:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.personal-figcaption > img {
  width: 20px;
  height: 20px;
}

/* .edit-profile .change-photo .photo img {
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

.edit-profile .button-edit img {
  width: 20px;
} */
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
}
.active-tab {
  display: block;
}
/* RESPONSIVE ============================== */

@media (max-width: 468px) {
  .edit-profile .edit-infos {
    width: 95%;
    height: 100%;
  }

  .edit-profile .info-personal {
    display: block;
    align-items: center;
    justify-content: center;
    width: 95%;
  }
  .edit-profile .change-photo {
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 50%;
    margin-right: 8px;
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
}
</style>
