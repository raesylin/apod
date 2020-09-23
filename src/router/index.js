import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: () => {
      const today = new Date();
      return `/date/${today.toISOString().substr(0, 10)}`;
    },
  },
  {
    path: '/date/:date',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
