import { createRouter, createWebHistory } from '@ionic/vue-router';
import routes from './routes';
import store from '../store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && ! store.getters.isLoggedIn) {
    next({
      name: 'login'
    });
  } else {
    next();
  }
});

export default router;
