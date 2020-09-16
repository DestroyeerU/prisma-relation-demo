import { Router } from 'express';

import ServerController from '@controllers/ServerController';
import UserController from '@controllers/UserController';
import UserServerController from '@controllers/UserServerController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.showServers);
routes.post('/users', UserController.store);

routes.get('/servers', ServerController.index);
routes.get('/servers/:id', ServerController.show);
routes.post('/servers', ServerController.store);

routes.get('/userServers', UserServerController.index);
routes.post('/userServers', UserServerController.store);

export default routes;
