<template>
  <div class="home" :style="cssVars">
    <Canvas
      :isExpanded="isExpanded"
      :picTitle="meta.title"
      :picUrl="meta.hdurl || meta.url"
      :copyright="meta.copyright"
    />
    <Meta :meta="meta" :isCollapsed="isExpanded" />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store';
import Canvas from '@/components/Canvas.vue';
import Footer from '@/components/Footer.vue';
import Meta from '@/components/Meta.vue';

export default {
  components: {
    Canvas,
    Footer,
    Meta,
  },
  props: {
    date: {
      type: String,
      required: false,
    },
  },
  computed: {
    cssVars() {
      return {
        '--pic-url': `url(${this.meta?.hdurl || this.meta?.url})`,
      };
    },
    ...mapState(['isExpanded', 'meta']),
  },
  created() {
    console.log(this.date);
    store.dispatch('fetchPicMeta', this.date);
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
  z-index: 1;

  &::before {
    background-image: var(--pic-url);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}
</style>
