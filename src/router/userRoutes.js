const userRoutes = [
  {
    path: '/exercices',
    name: 'exercices',
    component: () => import('../views/exercices/ExerciceList.vue')
  }
];

userRoutes.forEach((row) => {
  row.meta = {
    requiresAuth: true
  };
});

export default userRoutes;
