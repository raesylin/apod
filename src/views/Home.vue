<template>
  <div class="home" :style="{ backgroundImage: `url(${meta.hdurl}), url(${meta.url})` }">
    <Canvas
      :isExpanded="isExpanded"
      :title="meta.title"
      :copyright="meta.copyright"
    >
      <ImageWrapper slot="media" v-if="meta.media_type === 'image'" />
      <VideoWrapper slot="media" v-else :url="meta.url" />
    </Canvas>
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
import ImageWrapper from '@/components/ImageWrapper.vue';
import VideoWrapper from '@/components/VideoWrapper.vue';

export default {
  components: {
    Canvas,
    Footer,
    Meta,
    ImageWrapper,
    VideoWrapper,
  },
  props: {
    date: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapState(['isExpanded', 'meta']),
  },
  async beforeRouteUpdate(routeTo, routeFrom, next) {
    try {
      await store.dispatch('fetchPicMeta', routeTo.params.date);
      next();
    } catch (e) {
      console.log('error fetching pic meta', e);
      next(false);
    }
  },
  created() {
    store.dispatch('fetchPicMeta', this.date);
  },
};
</script>

<style lang="scss">
.home {
  background-color: black;
  background-image: var(--pic-url);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
}
</style>
