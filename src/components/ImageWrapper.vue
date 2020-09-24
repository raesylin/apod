<template>
  <div class="image-wrapper" :style="{ backgroundImage: `url(${url})`}"></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.image-wrapper {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
