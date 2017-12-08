import { Container } from 'inversify';

import TYPES from './types';

import { Controller } from './controllers/Controller';

import { UserController } from './controllers/UserController';
import { UserRepository, UserRepositoryImplDb } from './repository/UserRepository';
import { UserService, UserServiceImpl } from './services/UserService';

import { IssueService } from './services/IssueService';

const container = new Container();
container.bind<Controller>(TYPES.Controller).to(UserController);

container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImplDb);
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);

container.bind<IssueService>(TYPES.IssueService).to(UserServiceImpl);

export default container;
