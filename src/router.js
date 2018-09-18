import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
// import Experience from './views/Experience.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/experience',
      name: 'experience',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* webpackChunkName: "experience" */
      component: () => import('./views/Experience.vue'),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('./views/Education.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
});
