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

        <div class="py-5">
          <span class="text-center">Não tem uma conta?</span> <br />
          <span class="text-center gray-text">Crie uma conta agora</span>
          <Button
            :textButton="'Inscreva-se'"
            :backgroundButton="'danger'"
            :router="createAccount"
          />
        </div>
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
            localStorage.setItem("usuario", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token);
            if (response.data.pago) {
              this.$store.commit("setUserPay", true);
              this.$router.push({ name: "jobs" });
            } else {
              this.$store.commit("setUserPay", false);
              this.$router.push({ name: "plans" });
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
.py-5 {
  padding: 15px 0;
}
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
.gray-text {
  color: #5a5757;
}
</style>
