import { Container } from 'inversify';

import { Controller } from './controllers/controller';
import { UserController } from './controllers/UserController';
import TYPES from './types';

const container = new Container();
container.bind<Controller>(TYPES.Controller).to(UserController);

export default container;
