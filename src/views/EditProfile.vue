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
      <div class="about-input">
        <span>Sobre mim:</span>
        <Input :type="'text'" :placeholder="'Irracionais nas horas vagas'" />
      </div>
      <div class="info-title">
        <span>Caracteristicas</span>
      </div>
      <div class="form-features">
        <div class="input">
          <span>Cor do cabelo</span>
          <Input :type="'text'" :placeholder="'Preto'" />
        </div>
        <div class="input">
          <span>Cor dos olhos</span>
          <Input :type="'text'" :placeholder="'Preto'" />
        </div>
        <div class="input">
          <span>Cor da pele</span>
          <Input :type="'text'" :placeholder="'Negra'" />
        </div>
        <div class="input">
          <span>Manequim</span>
          <Input :type="'text'" :placeholder="'M'" />
        </div>
        <div class="input">
          <span>Altura</span>
          <Input :type="'number'" :placeholder="'1.80'" />
        </div>
        <div class="input">
          <span>Peso</span>
          <Input :type="'number'" :placeholder="'63.0'" />
        </div>
        <div class="input">
          <span>Quadril</span>
          <Input :type="'number'" :placeholder="'50'" />
        </div>
        <div class="input">
          <span>Busto torax</span>
          <Input :type="'number'" :placeholder="'63'" />
        </div>
        <div class="input">
          <span>Calçado</span>
          <Input :type="'number'" :placeholder="'42'" />
        </div>
        <div class="input">
          <span>Cintura</span>
          <Input :type="'number'" :placeholder="'50'" />
        </div>
      </div>
      <div class="button-save">
        <div>
          <Button :textButton="'Salvar'" :backgroundButton="'primary'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
export default {
  components: {
    Menu,
    Input,
    Button,
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
  height: 200px;
}
.edit-profile .change-photo {
  width: 200px;
  margin-right: 50px;
}
.edit-profile .change-photo .photo img {
  width: 137px;
  height: 137px;
  object-fit: cover;
  border-radius: 100%;
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
}
.edit-profile .button-save div {
  width: 15%;
  margin-top: 10px;
}
</style>