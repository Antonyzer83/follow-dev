const publicRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('../views/404NotFound')
  }
];

export default publicRoutes;
