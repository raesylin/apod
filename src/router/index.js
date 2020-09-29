import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import { formatDate } from '@/utils/dateUtils';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: () => `/date/${formatDate()}`,
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
