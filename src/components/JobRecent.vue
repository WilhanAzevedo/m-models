<template>
  <div class="job-recent" @click="clickDetails(id)">
    <div class="content">
      <div class="job-image">
        <img v-if="img" :src="img" :alt="placeholder" />
      </div>
      <div class="job-title">
        <span>{{ title }}</span>
      </div>
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
    id: Number,

    placeholder: String,
    clickDetails: Function,
  },
};
</script>

<style>
.job-recent {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
.job-recent .job-title {
  text-align: center;
  font-size: 1rem;
  color: #908f8f;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.job-recent .content {
  padding: 0rem 10rem;
}

.job-recent img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.8rem;
  cursor: pointer;
}
/* RESPONSIVE MY JOBS ================================ */

@media (max-width: 600px) {
  .job-recent img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 0.8rem;
    cursor: pointer;
  }
}
</style>
