<template>
  <transition name="slide-right">
    <div :class="['meta', { 'meta--collapsed': isCollapsed }]">
      <span class="meta__sub">{{ intlDate }}</span>
      <h3 class="meta__title">{{ meta.title }}</h3>
      <p class="meta__explanation">{{ meta.explanation }}</p>
    </div>
  </transition>
</template>

<script>
import { formatDateString } from '@/utils/dateUtils';

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
  computed: {
    intlDate() {
      return formatDateString(this.meta.date, 'intl');
    },
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
  transition: all $layout-transition-time ease-out;
  width: $meta-width;

  &--collapsed {
    opacity: 0;
    padding: 0;
    width: 0;
  }

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
    height: 60vh;
    line-height: 1.7;
    overflow: auto;
  }
}
</style>
