import { Container } from 'inversify';

import TYPES from './types';

import { Controller } from './controllers/Controller';

import { UserController } from './controllers/UserController';
import { UserRepository, UserRepositoryImplDb } from './repository/UserRepository';
import { UserService, UserServiceImpl } from './services/UserService';

import { IssueController } from './controllers/IssueController';
import { IssueRepository, IssueRepositoryImplDb } from './repository/IssueRepository';
import { IssueService, IssueServiceImpl } from './services/IssueService';

import { VoteRepository, VoteRepositoryImpl } from './repository/VoteRepository';
import { VoteService, VoteServiceImpl } from './services/VoteService';

import { CommentRepository, CommentRespositoryImpl } from './repository/CommentRespository';
import { CommentService, CommentServiceImpl } from './services/CommentService';

const container = new Container();
container.bind<Controller>(TYPES.Controller).to(UserController);
container.bind<Controller>(TYPES.Controller).to(IssueController);

container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImplDb);
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);

container.bind<IssueRepository>(TYPES.IssueRepository).to(IssueRepositoryImplDb);
container.bind<IssueService>(TYPES.IssueService).to(IssueServiceImpl);

container.bind<VoteRepository>(TYPES.VoteRepository).to(VoteRepositoryImpl);
container.bind<VoteService>(TYPES.VoteService).to(VoteServiceImpl);

container.bind<CommentRepository>(TYPES.CommentRepository).to(CommentRespositoryImpl);
container.bind<CommentService>(TYPES.CommentService).to(CommentServiceImpl);

export default container;
