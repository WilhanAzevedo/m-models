<template>
  <div class="job-details">
    <Menu />
    <div class="job-header">
      <div class="header-details">
        <div class="image">
          <img
            src="https://blog.revendakwg.com.br/wp-content/uploads/2017/05/fazer-uma-revista-750x410.png"
            alt=""
          />
        </div>

        <div class="details">
          <div class="top">
            <div class="top-details">
              <div class="title">
                <span>Editorial de revista</span>
              </div>
              <div class="location">
                <div><img src="../assets/localization.svg" alt="" /></div>
                <div class="city"><span>Brasília</span></div>
                <div>16/02/2021</div>
              </div>
            </div>
            <div class="close-button">
              <img src="../assets/close-button.svg" alt="" />
            </div>
          </div>
          <div class="description">
            <span
              >Precisamos de 2 rapazes e duas meninas de 18 a 25 anos <br />
              Por se tratar de um editorial de revista, não haverá cachê, pois
              trata-se da divulgação dos modelos</span
            >
          </div>
          <div class="button-apply">
            <Button
              :textButton="'Candidatar-se'"
              :backgroundButton="'primary'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Button from "../components/Button.vue";
export default {
  components: { Menu, Button },
};
</script>

<style>
.job-details {
  height: 100vh;
}
.job-header {
  width: 75%;
  margin: 0 auto;
  margin-top: 50px;
}

.header-details {
  padding: 35px;
  background: white;
  border-radius: 5px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.header-details .image {
  width: 50%;
}

.header-details .image img {
  width: 80%;
  height: 328px;
  object-fit: cover;
  border-radius: 5px;
}
.header-details .details {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.header-details .details .title {
  font-size: 1.1rem;
  color: #404040;
}
.header-details .location {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: #5a5757;
}
.header-details .location img {
  width: 1rem;
}
.header-details .location .city {
  margin-right: 10px;
}
.header-details .description {
  font-size: 0.9rem;
  color: #908f8f;
  padding: 20px 0;
  padding-bottom: 140px;
}
.header-details .button-apply {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-left: 210px;
}
.header-details .top {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.header-details .close-button {
  align-items: center;
  display: flex;
  justify-content: center;
  background: #f0f2f5;
  border-radius: 5px;
  cursor: pointer;
}
.header-details .close-button img {
  padding: 10px;
}
</style>