import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

// Todas as rotas abaixo desse middleware precisam estar autenticadas
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/task', TaskController.store);
routes.get('/task', TaskController.index);

export default routes;