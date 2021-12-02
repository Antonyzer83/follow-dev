const userRoutes = [
  {
    path: '/exercices',
    name: 'exercices',
    component: () => import('../views/exercices/ExerciceList.vue')
  },
  {
    path: '/exercices/:id',
    name: 'exercice',
    component: () => import('../views/exercices/Exercice.vue')
  },
  {
    path: '/exercices/create',
    name: 'exerciceCreate',
    component: () => import('../views/exercices/ExerciceForm.vue')
  }
];

userRoutes.forEach((row) => {
  row.meta = {
    requiresAuth: true
  };
});

export default userRoutes;
