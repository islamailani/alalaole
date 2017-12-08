import { Container } from 'inversify';

import TYPES from './types';

import { RegisterableController } from './controllers/RegisterableController';
import { UserController } from './controllers/UserController';
import { UserRepository, UserRepositoryImplDb } from './repository/UserRepository';
import { UserService, UserServiceImpl } from './services/UserService';

const container = new Container();
container.bind<RegisterableController>(TYPES.Controller).to(UserController);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImplDb);
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);

export default container;
