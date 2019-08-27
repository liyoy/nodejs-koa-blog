import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ '../views/article/list.vue'),
    },
    {
      path: '/article/detail/:id',
      name: 'article_detail',
      component: () => import(/* webpackChunkName: "article_detail" */ '../views/article/detail.vue'),
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "video" */ '../views/video/index.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import(/* webpackChunkName: "books" */ '../views/books/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
    },
  ],
});
