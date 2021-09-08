<template>
  <div class="register-model">
    <div class="header">
      <div class="logo">
        <img src="../../assets/logo.jpeg" alt="Logo" />
      </div>
      <h2>Você escolheu modelo, vamos começar com alguns cadastros simples</h2>
    </div>
    <div class="form">
      <Input
        :type="'text'"
        :placeholder="'Nome'"
        :img="'user.svg'"
        @input="onName"
      />
      <Input
        :type="'text'"
        :placeholder="'Sobrenome'"
        :img="'user.svg'"
        @input="onAboutName"
      />
      <Input
        :type="'date'"
        :placeholder="'2017-01-17'"
        :data="'2017-01-17'"
        :value="formatDate(user.data_nascimento)"
        @input="onDateBirthday"
      />
      <Input
        :type="'number'"
        :placeholder="'Idade'"
        :img="'age.svg'"
        :value="user.idade"
        disabled
        @input="onAge"
      />
      <Input
        :type="'tel'"
        :placeholder="'Telefone'"
        :img="'call.svg'"
        @input="onWhats"
      />

      <InputSelect
        :type="'select'"
        :placeholder="'Gênero'"
        :value="{ nome: user.genero }"
        :values="gender"
        @input="onGender"
      />
      <Input
        :type="'email'"
        :placeholder="'E-mail'"
        :img="'call.svg'"
        @input="onEmail"
      />
      <Input
        :type="'password'"
        :placeholder="'Senha'"
        :img="'call.svg'"
        @input="onPass"
      />
      <Button
        :textButton="'Avançar'"
        :backgroundButton="'primary'"
        :router="save"
      />
    </div>
  </div>
</template>

<script>
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import InputSelect from "../../components/InputSelect.vue";

export default {
  components: {
    Input,
    Button,
    InputSelect,
  },
  data() {
    return {
      user: {
        nome: null,
        sobre_nome: null,
        email: null,
        senha: null,
        data_nascimento: new Date(),
        idade: null,
        numero_whats: null,
        genero: null,
      },
      error: false,
      gender: [
        { nome: "Masculino" },
        { nome: "Feminino" },
        { nome: "Prefiro não informar" },
      ],
    };
  },
  methods: {
    validForm() {
      if (this.user) {
        if (
          this.user.nome &&
          this.user.sobre_nome &&
          this.user.email &&
          this.user.senha &&
          this.user.data_nascimento &&
          this.user.genero &&
          this.user.numero_whats &&
          this.user.idade
        ) {
          return true;
        } else false;
      }
    },
    save() {
      if (this.validForm()) {
        this.$store.commit("setUserRegister", this.user);
        this.$router.push({ name: "Localization" });
      } else {
        this.$vToastify.error({
          body: "Preencha todos os campos",
          title: "Erro",
        });
      }
    },
    onGender(value) {
      this.user.genero = value;
    },
    onWhats(value) {
      this.user.numero_whats = value;
    },
    onAge(value) {
      this.user.idade = value;
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
    formatDate(date) {
      const newDate = new Date(date);
      const splittedDate = newDate.toISOString().slice(0, 10);
      return splittedDate;
    },
    onDateBirthday(value) {
      this.user.idade = this.getAge(value);
      this.user.data_nascimento = value;
    },
    onAboutName(value) {
      this.user.sobre_nome = value;
    },
    onName(value) {
      this.user.nome = value;
    },
    onEmail(value) {
      this.user.email = value;
    },
    onPass(value) {
      this.user.senha = value;
    },
    router() {
      this.$router.push({ name: "Localization" });
    },
  },
};
</script>

<style>
.register-model {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 100%;
  /* background: red; */
  width: 350px;
  margin: 0 auto;
  padding-top: 50px;
}
.register-model .form {
  width: 100%;
}
.register-model .header .logo img {
  width: 30%;
  margin-bottom: 2rem;
}

.register-model .header h2 {
  font-weight: 400;
  font-size: 1.2rem;
  padding: 20px 10px;
}
</style>
