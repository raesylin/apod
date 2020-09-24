<template>
  <div class="video-wrapper">
    <iframe :src="url" frameborder="0" class="video-wrapper__frame"></iframe>
  </div>
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

<style lang="scss">
.video-wrapper {
  height: 100%;
  width: 100%;

  &__frame {
    height: 100%;
    width: 100%;
  }
}
</style>
