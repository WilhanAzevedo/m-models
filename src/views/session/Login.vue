<template>
  <div class="login">
    <div class="header">
      <img src="../../assets/logo.jpeg" alt="Logo" />
      <p>Bem vindo(a) ao M Models</p>
    </div>

    <div class="form">
      <div class="inputs">
        <Input
          :img="'icon-email.svg'"
          :type="'e-mail'"
          :placeholder="'E-mail'"
          @input="onEmail"
        />
        <Input
          :img="'icon-lock.svg'"
          :type="'password'"
          :placeholder="'Senha'"
          @input="onPass"
        />
      </div>

      <div>
        <router-link :to="{ name: 'ForgotPassword' }">
          Esqueceu a senha?</router-link
        >
      </div>
      <div v-if="error" class="user-no-found">
        <span>Usuário não encontrado</span>
      </div>

      <div class="buttons">
        <Button
          :textButton="'Entrar'"
          :backgroundButton="'primary'"
          :router="login"
        />
        <Button
          :textButton="'Criar conta'"
          :backgroundButton="'secondary'"
          :router="createAccount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button.vue";
import Input from "../../components/Input.vue";
import auth from "../../services/request/auth";
export default {
  components: { Button, Input },
  data() {
    return {
      user: {
        email: null,
        senha: null,
      },
      error: false,
    };
  },

  methods: {
    createAccount() {
      this.$router.push({ name: "CreateAccount" });
    },
    login() {
      auth
        .login(this.user)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.modelo) {
              localStorage.setItem("usuario", JSON.stringify(response.data));
              localStorage.setItem("token", response.data.token);
              this.$router.push({ name: "jobs" });
            }
            if (response.data.contratante) {
              this.$vToastify.error({
                body: "Ainda não é possivel logar como contratante",
                title: "Vish!",
              });
            }
          }
        })
        .catch(() => (this.error = true));
    },
    onEmail(value) {
      this.error = false;
      this.user.email = value;
    },
    onPass(value) {
      this.error = false;
      this.user.senha = value;
    },
  },
};
</script>

<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* background: red; */
  width: 350px;
  margin: 0 auto;
}

.login .header img {
  width: 45%;
  border-radius: 0.8rem;
  margin-bottom: 35px;
}

.login p {
  font-weight: 400;
  font-size: 1rem;
  padding: 20px 0px;
}
a {
  font-size: 0.875rem;
  text-decoration: none;
  color: #5a5757;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0px;
}
.user-no-found {
  background: #fcdfdf;
  border: 1px solid #d12b2b;
  border-radius: 0.2rem;
  padding: 5px;
  margin-bottom: 10px;
}
.user-no-found span {
  color: #d12b2b;
  font-size: 13px;
}
</style>
