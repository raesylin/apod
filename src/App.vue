<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import navigationMixin from '@/mixins/navigation';
import { loadingIdleTime } from '@/utils/constants';

export default {
  mixins: [navigationMixin],
  created() {
    window.addEventListener('keyup', (ev) => {
      if (ev.key === 'ArrowLeft') {
        this.goPrev();
      } else if (ev.key === 'ArrowRight') {
        this.goNext();
      }
    });

    setTimeout(() => {
      this.toggleCanvas(true);
    }, loadingIdleTime);
  },
  methods: mapActions(['toggleCanvas']),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:100,300,400,700,900");

body {
  box-sizing: border-box;
  color: white;
  font-size: 16px;
  font-family: "Source Sans Pro", Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  margin: 0px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
