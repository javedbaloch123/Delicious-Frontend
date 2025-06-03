// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/view/HomeView.vue';
import NotFoundView from '@/view/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home Page - Delicious'
    }
  },
  {
    path: '/About',
    name: 'about',
    component: HomeView,
    meta: {
      title: 'About Page - Delicious'
    }
  },
  {
    path: '/Menu',
    name: 'menu',
    component: HomeView,
    meta: {
      title: 'Menu Page - Delicious'
    }
  },
  {
    path: '/Specials',
    name: 'special',
    component: HomeView,
    meta: {
      title: 'Specials Page - Delicious'
    }
  },
  {
    path: '/Events',
    name: 'events',
    component: HomeView,
    meta: {
      title: 'Events Page - Delicious'
    }
  },
  {
    path: '/Chefs',
    name: 'chefs',
    component: HomeView,
    meta: {
      title: 'Chefs Page - Delicious'
    }
  },
  {
    path: '/Gallery',
    name: 'gallery',
    component: HomeView,
    meta: {
      title: 'Gallery Page - Delicious'
    }
  },
  {
    path: '/Contact',
    name: 'contact',
    component: HomeView,
    meta: {
      title: 'Contact Page - Delicious'
    }
  },
  
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  }
});

export default router;
