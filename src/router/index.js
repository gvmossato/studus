import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'studus | Início' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: 'studus | Sobre' },
  },
  {
    path: '/mailing',
    name: 'mailing',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: 'studus | Mailing' },
  },
  {
    path: '/free',
    name: 'free',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: 'studus | Gratuito' },
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: 'studus | Amigo' },
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: 'studus | Guia' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash, behavior: 'smooth' };
    if (savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  },
});

export default router;
