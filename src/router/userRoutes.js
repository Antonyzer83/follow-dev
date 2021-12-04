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
  },
  {
    path: '/programs/create',
    name: 'programCreate',
    component: () => import('../views/programs/ProgramForm.vue')
  },
  {
    path: '/programs/update/:id',
    name: 'programUpdate',
    component: () => import('../views/programs/ProgramForm.vue')
  },
  {
    path: '/performances',
    name: 'performances',
    component: () => import('../views/performances/PerformanceList.vue')
  },
  {
    path: '/programs/:programId/performances/:performanceId',
    name: 'performance',
    component: () => import('../views/performances/Performance')
  },
  {
    path: '/programs/:id/performances/create',
    name: 'performanceCreate',
    component: () => import('../views/performances/PerformanceForm.vue')
  },
  {
    path: '/programs/:programId/performances',
    name: 'programPerformances',
    component: () => import('../views/performances/PerformanceList.vue')
  }
];

userRoutes.forEach((row) => {
  row.meta = {
    requiresAuth: true
  };
});

export default userRoutes;
