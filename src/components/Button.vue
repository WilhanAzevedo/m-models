<template>
  <button :class="backgroundButton" @click="router">
    {{ textButton }}
  </button>
</template>

<script>
export default {
  props: {
    textButton: String,
    backgroundButton: String,
    router: Function,
  },
};
</script>
<style>
button {
  padding: 1rem 4rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  margin: 5px 0px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
/* button:hover {
  background: black;
} */

.primary {
  background: rgb(29, 28, 28);
  color: white;
}
.primary:hover {
  background: black;
}
.secondary {
  background: transparent;
  color: black;
}
</style>