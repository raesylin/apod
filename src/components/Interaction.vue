<template>
  <div class="interaction">
    <Tooltip text="Download HD Image">
      <span class="interaction__tile" v-if="url">
        <a
          :href="url"
          class="interaction__link"
          :download="url"
          title="Download HD image"
        >
          <font-awesome-icon :icon="['fas', 'download']" />
        </a>
      </span>
    </Tooltip>

    <Tooltip text="Share on Twitter">
      <span class="interaction__tile" title="Share on Twitter">
        <a
          class="interaction__link"
          :href="twitterLink"
          data-size="large"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </span>
    </Tooltip>

    <Tooltip text="Share on Facebook">
      <span
        class="interaction__tile"
        title="Share on Facebook"
        @click="shareOnFacebook"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </span>
    </Tooltip>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue';

export default {
  components: {
    Tooltip,
  },
  props: {
    url: {
      type: String,
      default: 'Astronomy Picture of the Day',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    twitterLink() {
      return `https://twitter.com/intent/tweet?text=${this.title}&url=${window.location.href}`;
    },
  },
  methods: {
    async shareOnFacebook() {
      await this.loadFBSDK(document, 'script', 'facebook-jssdk');
      await this.initFB();
      return false;
    },

    async loadFBSDK(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    },

    async initFB() {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '238897593157013',
          xfbml: true,
          version: 'v8.0',
        });
        window.FB.ui(
          {
            method: 'share',
          },
          (response) => {
            console.log('here', response);
          },
        );
      };
    },
  },
};
</script>

<style lang="scss">
.interaction {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  &__tile {
    cursor: pointer;
    font-size: 20px;
    opacity: 0.7;
    transition: all 0.2s ease-out;
    padding: 0px 20px;

    &:hover {
      color: steelblue;
      opacity: 1;
    }
  }
}
</style>
