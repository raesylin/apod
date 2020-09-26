<template>
  <div
    :class="[
      'canvas',
      {
        'canvas--expanded': isExpanded,
      },
    ]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <slot name="media"></slot>
    <div class="canvas__text">
      <span class="canvas__copyright" v-if="copyright">&copy; {{ copyright }}</span>
      <h1
        :class="[
          'canvas__title',
          { 'canvas__title--show': isHovered && isExpanded },
        ]"
      >
        {{ title }}
      </h1>
    </div>
    <transition name="fade">
      <div
        class="canvas__nav canvas__nav--left"
        v-show="isHovered"
        @click="goPrev"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </transition>
    <transition name="fade">
      <div
        class="canvas__nav canvas__nav--right"
        v-show="isHovered && !isToday"
        @click="goNext"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </transition>
    <div
      class="canvas__toggle"
      @click="
        () => {
          toggleCanvas(!isExpanded);
        }
      "
    >
      <font-awesome-icon
        :icon="['fas', 'long-arrow-alt-right']"
        :class="[
          'canvas__toggle-arrow',
          { 'canvas__toggle-arrow--rotated': isExpanded },
        ]"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import navigationMixin from '@/mixins/navigation';
import { formatDate } from '@/utils/dateUtils';

export default {
  mixins: [navigationMixin],
  data() {
    return {
      isHovered: false,
      today: formatDate(),
    };
  },
  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Astronomy Picture of the Day',
    },
    copyright: {
      type: String,
      required: false,
    },
  },
  computed: {
    isToday() {
      return this.$route.params.date === this.today;
    },
  },
  methods: {
    ...mapActions(['toggleCanvas']),
  },
};
</script>

<style lang="scss">
.canvas {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  flex-grow: 1;
  height: 100%;
  position: relative;

  &__media-wrapper {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 100%;
  }

  &__copyright {
    color: lightslategrey;
    font-size: 0.75rem;
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.14;
    margin: 10px 0px;
    opacity: 0;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.9);
    transition: opacity 0.5s linear;

    &--show {
      opacity: 1;
    }
  }

  &__nav {
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 54px;
    font-weight: 900;
    height: auto;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    transition: opacity 0.5s ease-out;
    width: 100px;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  &__toggle {
    font-size: 28px;
    opacity: 0.8;
    position: absolute;
    right: 10px;
    top: 10px;
    transition: opacity $layout-transition-time ease-out;

    &:hover {
      animation: shake 1.2s infinite both;
      backface-visibility: hidden;
      cursor: pointer;
      opacity: 1;
    }
  }

  &__toggle-arrow {
    transition: transform $layout-transition-time ease-out;

    &--rotated {
      transform: rotate(180deg);
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(10deg);
  }
  95% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
