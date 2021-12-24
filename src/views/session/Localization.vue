<template>
  <div class="localization">
    <div class="header">
      <img src="../../assets/logo.jpeg" alt="Logo" />
      <p>E por ultimo precisamos que forneça sua localização</p>
    </div>
    <div class="form">
      <Input
        :type="'text'"
        :placeholder="'Cidade'"
        :img="'localization.svg'"
        @input="onCity"
      />
      <Input
        :type="'text'"
        :placeholder="'Estado'"
        :img="'localization.svg'"
        @input="onState"
      />
      <Button
        :textButton="'Finalizar cadastro'"
        :backgroundButton="'primary'"
        :router="save"
      />
    </div>
  </div>
</template>

<script>
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import model from "../../services/request/model";
export default {
  components: {
    Input,
    Button,
  },
  data() {
    return {
      estado: null,
      cidade: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.userRegister;
    },
  },
  methods: {
    validForm() {
      if (this.estado && this.cidade) {
        return true;
      } else {
        return false;
      }
    },
    onState(value) {
      this.estado = value;
    },
    onCity(value) {
      this.cidade = value;
    },
    async save() {
      if (this.validForm()) {
        const user = {
          email: this.user?.email,
          senha: this.user?.senha,
          tipo: "1",
          nome: this.user?.nome,
          sobre_nome: this.user?.sobre_nome,
          idade: this.user?.idade,
          data_nascimento: this.user?.data_nascimento,
          genero: this.user?.genero
            ? JSON.parse(this.user.genero).nome
            : "Outro",
          cidade: this.cidade,
          estado: this.estado,
          numero_whats: this.user?.numero_whats,
        };
        console.log(user);
        await model
          .saveUser(user)
          .then(() => {
            this.$vToastify.success({
              body: "Agora é fazer o login",
              title: "Cadastrado com sucesso",
              callback : this.$router.push({ name: "login" })
            });
          })
          .catch((err) => {
            this.$vToastify.error({
              body: err.response.data.message,
              title: "Erro",
            });
          });
      }

      
    },
  },
};
</script>

<style>
.localization {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 350px;
  margin: 0 auto;
}
.localization .form {
  width: 100%;
}
.localization .header img {
  width: 45%;
  border-radius: 0.8rem;
  margin-bottom: 35px;
}

.localization p {
  font-weight: 400;
  font-size: 1rem;
  padding: 20px 0px;
}
</style>
