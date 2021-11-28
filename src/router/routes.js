import publicRoutes from './publicRoutes';
import userRoutes from './userRoutes';

const baseRoutes = [];

const routes = baseRoutes.concat(
  publicRoutes,
  userRoutes
);

export default routes;
