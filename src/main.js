import Vue from 'vue';
import VueMeta from 'vue-meta';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faChevronLeft,
  faChevronRight,
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faCalendar,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faDownload,
  faTwitter,
  faFacebook,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
