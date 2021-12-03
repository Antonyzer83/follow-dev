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
  },
  {
    path: '/exercices/update/:id',
    name: 'exerciceUpdate',
    component: () => import('../views/exercices/ExerciceForm.vue')
  },
  {
    path: '/programs',
    name: 'programs',
    component: () => import('../views/programs/ProgramList.vue')
  },
  {
    path: '/programs/:id',
    name: 'program',
    component: () => import('../views/programs/Program.vue')
  }
];

userRoutes.forEach((row) => {
  row.meta = {
    requiresAuth: true
  };
});

export default userRoutes;
