<template>
  <div class="job-card" @click="clickDetails">
    <div class="card-image">
      <img v-if="img" :src="img" :alt="placeholder" />
    </div>
    <div class="card-title">
      <span>{{ title }}</span>
    </div>
    <div class="card-date">
      <span>{{ date }}</span>
    </div>
    <div class="card-description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: {
      type: String,
      required: false,
      default: "",
    },
    date: String,
    placeholder: String,
    description: String,
    clickDetails: Function,
  },
};
</script>

<style>
.job-card {
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 1rem;
  cursor: pointer;
}
.job-card .card-image {
  max-width: 270px;
  background: white;
}
.job-card .card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.job-card .card-title {
  font-size: 1rem;
  padding-top: 25px;
  color: #404040;
}
.job-card .card-date {
  font-size: 0.7rem;
  padding-top: 12px;
  padding-bottom: 10px;
  color: #5a5757;
}

.job-card .card-description {
  color: #908f8f;
  font-size: 0.8rem;
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>