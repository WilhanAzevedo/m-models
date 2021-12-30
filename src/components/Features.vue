<template>
  <div class="features" v-if="features">
    <div class="features-title">
      <span>Caracteristicas</span>
    </div>
    <div class="features-list">
      <div class="feature-item">
        <span v-text="'Olho ' + features.cor_olho.nome"></span>
      </div>
      <div class="feature-item">
        <span v-text="'Peso ' + features.peso + 'kg'"></span>
      </div>
      <div class="feature-item">
        <span v-text="'Manequim ' + features.manequim.nome"></span>
      </div>
      <div class="feature-item">
        <span v-text="'Quadril ' + features.quadril"></span>
      </div>
      <div class="feature-item">
        <span v-text="'Altura ' + features.altura">Altura 1.80</span>
      </div>
      <div class="feature-item" v-text="'Calçado ' + features.calcado">
        <span>Calçado 42</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Object,
    },
  },
};
</script>

<style>
/* Caracteristicas ============================= */

.features-title {
  color: #404040;
  padding-top: 40px;
}
.features-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.features .feature-item {
  background: #e5e5e5;
  border-radius: 23.1374px;
  width: 15%;
  text-align: center;
  padding: 5px 7px;
  font-size: 0.875rem;
  color: #908f8f;
  margin-right: 10px;
  margin-top: 10px;
}

@media (max-width: 468px) {
  .features {
    width: 100%;
    padding: 0 15px;
    font-size: 0.875rem;
  }
  .features .feature-item {
    width: 50%;
    font-size: 0.8rem;
  }
}

@media (max-width: 936px) {
  .features .feature-item {
    width: 40%;
  }
}
</style>
