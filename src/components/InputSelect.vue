<template>
  <div class="input-group-select">
    <select class="input-select" @input="$emit('input', $event.target.value)">
      <option value="" disabled selected hidden>
        <span>{{ placeholder }}</span>
      </option>
      <option
        v-for="(item, key) in values"
        :value="JSON.stringify(item)"
        :key="key"
        :selected="value.nome === item.nome ? true : false"
      >
        {{ item.nome }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    value: Object,
    values: Array,
  },
};
</script>

<style>
.input-group-select {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 10px;
  margin: 5px 0;
  border-radius: 0.4rem;
  /* width: 350px; */
}
.input-select {
  font-weight: 400;
  color: #1a1919;
  border-radius: 0.4rem;
  outline: none;
  background: white;
  font-size: 1rem;
  margin-left: 5px;
  width: 100%;
}
.input-group-select .input-select option:checked {
  background: #808080;
  color: white;
  padding: 12px 10px;
  font-size: 1rem;
}
</style>
