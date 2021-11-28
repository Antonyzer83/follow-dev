const publicRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
];

export default publicRoutes;
