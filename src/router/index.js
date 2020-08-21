import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exceptions',
    name: 'Exceptions',
    component: () => import('../views/Exceptions.vue'),
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue'),
  },
  {
    path: '/messages',
    name: 'Messages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue'),
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: () => import('../views/Tracking.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
