<template>
  <div class="input-group">
    <img v-if="img" :src="require('../assets/' + img)" :alt="placeholder" />
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
    },
    value: [String, Number],

    disabled: Boolean,
  },
};
</script>

<style>
.input-group {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 10px;
  margin: 5px 0;
  border-radius: 0.4rem;
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