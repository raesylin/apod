<template>
  <div
    :class="['tooltip', modClass]"
    @mouseenter="isActive = true"
    @mouseleave="isActive = false"
  >
    <slot></slot>
    <div :class="['tooltip__text', modTextClass]">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    text: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      default: 'top',
    },
  },
  computed: {
    modClass() {
      return `tooltip--${this.position}`;
    },
    modTextClass() {
      return this.isActive ? 'tooltip__text--active' : null;
    },
  },
  created() {
    console.log('here');
  },
};
</script>

<style lang="scss">
.tooltip {
  position: relative;

  &__text {
    background: rgba(black, 0.8);
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    opacity: 0;
    padding: 0px;
    position: absolute;
    transition: all 0.2s linear;
    width: auto;
    white-space: nowrap;
    z-index: 1;

    &--active {
      opacity: 1;
      padding: 10px 20px;
    }
  }

  &--top &__text {
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translate3d(-50%, 0, 0,);
  }
}
</style>
