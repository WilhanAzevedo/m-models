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
            <div>
              <span>Alterar foto</span>
            </div>
            <div>
              <img src="../assets/user.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="form">
          <div class="input">
            <span>Nome completo</span>
            <Input :type="'text'" :placeholder="'Jhonatan Borges'" />
          </div>
          <div class="input">
            <span>Data de nascimento</span>
            <Input
              :type="'date'"
              :placeholder="'2017-01-17'"
              :data="'2017-01-17'"
            />
          </div>
          <div class="input">
            <span>Idade</span>
            <Input :type="'number'" :placeholder="'23'" />
          </div>
          <div class="input">
            <span>Gênero</span>
            <Input :type="'text'" :placeholder="'Feminino'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Input from "../components/Input.vue";
export default {
  components: {
    Menu,
    Input,
  },
};
</script>

<style>
.edit-profile {
  height: 100vh;
}
.edit-profile .edit-infos {
  width: 75%;
  margin: 0 auto;
  padding: 30px 0;
}

.edit-profile .info-title {
  font-size: 0.875rem;
}
.edit-profile .info-personal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-profile .change-photo {
  width: 200px;
  margin-right: 50px;
}
.edit-profile .change-photo .photo img {
  width: 100%;
  clip-path: circle(39%);
}
.edit-profile .change-photo .button-edit {
  display: flex;
  align-items: center;
}
.edit-profile .form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.edit-profile .form {
  width: 100%;
}
.edit-profile .input {
  margin: 10px 0;
  width: 50%;
}
.edit-profile .input span {
  font-size: 0.875rem;
  /* margin-bottom: 100px; */
  /* background: red; */
}
</style>