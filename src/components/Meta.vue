<template>
  <transition name="slide-right">
    <div class="meta">
      <span class="meta__sub">
        {{ (new Date(meta.date)).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'}) }}
      </span>
      <h3 class="meta__title">{{ meta.title }}</h3>
      <p class="meta__explanation">{{ meta.explanation }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default: () => ({}),
    },
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    console.log(this.meta);
  },
};
</script>

<style lang="scss">
.meta {
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: $meta-max-width;
  padding: 30px 50px 120px 50px;
  width: $meta-width;

  &__sub {
    font-weight: 300;
    font-size: 24px;
  }

  &__title {
    color: white;
    font-size: 32px;
    white-space: normal;
  }

  &__explanation {
    color: lightgrey;
    font-size: 20px;
    font-weight: 100;
    line-height: 1.7;
  }
}
</style>
