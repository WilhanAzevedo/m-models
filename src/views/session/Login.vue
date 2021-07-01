<template>
  <div class="login">
    <div class="header">
      <img src="../../assets/logo.jpeg" alt="Logo" />
      <p>Bem vindo(a) ao M Models</p>
    </div>

    <div class="form">
      <div class="inputs">
        <div class="input-group">
          <img src="../../assets/icon-email.svg" alt="Email" />
          <input type="e-mail" id="e-mail" name="e-mail" placeholder="Email" />
        </div>
        <div class="input-group">
          <img src="../../assets/icon-lock.svg" alt="Senha" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
          />
        </div>
      </div>

      <div>
        <a href="#"> Esqueceu a senha?</a>
      </div>

      <div class="buttons">
        <button class="primary">Entrar</button> <br />
        <button class="secondary">Criar conta</button>
      </div>
    </div>
  </div>
</template>

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

.login .form .inputs input {
  font-weight: 400;
  color: black;
  border-radius: 0.4rem;
  outline: none;
  background: white;
  font-size: 1rem;
  margin-left: 5px;
}

.login .form .inputs .input-group {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 10px;
  margin: 10px 0;
  border-radius: 0.4rem;
  width: 350px;
}

.login .form a {
  font-size: 0.875rem;
  text-decoration: none;
  color: #5a5757;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0px;
}

.login .buttons button {
  padding: 1rem 4rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  margin: 5px 0px;
  width: 350px;
  cursor: pointer;
}

.buttons .primary {
  background: black;
  color: white;
}
.buttons .secondary {
  background: transparent;
  color: black;
}
</style>