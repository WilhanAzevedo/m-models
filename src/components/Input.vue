<template>
  <div class="input-group">
    <img :src="require('../assets/' + img)" :alt="placeholder" />
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    placeholder: String,
    type: String,
  },
};
</script>

<style>
.input-group {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 10px;
  margin: 10px 0;
  border-radius: 0.4rem;
  width: 350px;
}
input {
  font-weight: 400;
  color: #1a1919;
  border-radius: 0.4rem;
  outline: none;
  background: white;
  font-size: 1rem;
  margin-left: 5px;
  width: 100%;
}
</style>