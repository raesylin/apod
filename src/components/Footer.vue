<template>
  <div :class="['footer', { 'footer--hidden': isHidden }]">
    <div class="footer__toggle" @click="toggleFooter">
      <font-awesome-icon :icon="['fas', 'angle-double-up']" v-if="isHidden" />
      <font-awesome-icon :icon="['fas', 'angle-double-down']" v-else />
    </div>
    <div class="footer__content">
      <h1 class="footer__title">
        <router-link to="/">Astronomy Picture of the Day</router-link>
      </h1>
      <span class="footer__sub">
        Source:
        <a href="https://api.nasa.gov/" class="footer__link" target="_blank"
          >NASA</a
        >
      </span>
      <span class="footer__sub">
        Redesign and development:
        <a
          href="https://raesylin.github.io"
          class="footer__link"
          target="_blank"
          >Rachel Lin</a
        >
      </span>
      <Calendar class="footer__calendar" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { loadingIdleTime } from '@/utils/constants';
import Calendar from '@/components/Calendar.vue';

export default {
  components: {
    Calendar,
  },
  data() {
    return {
      isHidden: false,
    };
  },
  created() {
    const dev = false;
    if (!dev) {
      setTimeout(() => {
        this.isHidden = true;
      }, loadingIdleTime);
    }
  },
  methods: {
    toggleFooter() {
      this.isHidden = !this.isHidden;
    },
    ...mapActions(['clearLoadingTimout']),
  },
};
</script>

<style lang="scss">
.footer {
  background: linear-gradient(transparent, black);
  bottom: 0px;
  display: flex;
  flex-direction: column;
  height: $footer-height;
  padding: 0px 30px;
  position: fixed;
  transition: transform 0.5s linear;
  width: 100%;

  &--hidden {
    transform: translate3d(0, $footer-translate-distance, 0);
  }

  &__toggle {
    align-items: center;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    justify-content: center;
    padding: 5px 0 10px 0;
    width: 100%;
  }

  &__content {
    align-items: flex-end;
    display: flex;
    flex-wrap: nowrap;
    padding: ($footer-height - $footer-translate-distance) 0px;
    width: 100%;
  }

  &__title {
    color: white;
    font-size: 28px;
    margin: 0;
  }

  &__sub {
    color: lightslategrey;
    font-size: 12px;
    line-height: 1.5;
    margin-left: 20px;
  }

  &__link {
    transition: color 0.8s ease-out;

    &:hover {
      color: hotpink;
    }
  }

  &__calendar {
    flex-grow: 1;
  }
}
</style>
