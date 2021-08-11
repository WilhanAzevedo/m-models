<template>
  <div class="job-recent">
    <div class="job-image">
      <img v-if="img" :src="img" :alt="placeholder" />
    </div>
    <div class="job-title">
      <span>{{ title }}</span>
    </div>
    <!-- <div class="job-date">
      <span>{{ date }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    // date: String,
    img: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: String,
  },
};
</script>

<style>
.job-recent {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background: red; */
}
.job-recent .job-title {
  text-align: center;
  font-size: 0.8rem;
  width: 90%;
  color: #908f8f;
}

.job-recent img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.8rem;
  cursor: pointer;
}
</style>