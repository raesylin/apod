<template>
  <div
    :class="['footer', { 'footer--hidden': isHidden }]"
    @mouseenter="isHidden = false"
    @mouseleave="isHidden = true"
  >
    <div class="footer__toggle">{{ isHidden ? `&DoubleUpArrow;` : `&DoubleDownArrow;` }}</div>
    <div class="footer__content">
      <h1 class="footer__title">Astronomy Picture of the Day</h1>
      <span class="footer__sub">
        Source:
        <a href="https://api.nasa.gov/" class="footer__link" target="_blank">NASA</a>
      </span>
      <span class="footer__sub">
        Redesign and development:
        <a href="https://raesylin.github.io" class="footer__link" target="_blank">Rachel Lin</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },
  created() {
    const dev = true;
    if (!dev) {
      setTimeout(() => {
        this.isHidden = true;
      }, 3000);
    }
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
}
</style>
