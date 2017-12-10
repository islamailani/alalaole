import * as express from 'express';
import { inject, injectable } from 'inversify';

import TYPES from '../types';
import { Controller } from './Controller';

import admin from '../middlewares/AdminMiddleware';
import authorize from '../middlewares/AuthorizationMiddleware';

import { User } from '../models/User';

import { EmailService } from '../services/EmailService';
import { UserService } from '../services/UserService';

@injectable()
export class UserController implements Controller {
    private userService: UserService;
    private emailService: EmailService;

    constructor(
        @inject(TYPES.UserService) userService: UserService,
        @inject(TYPES.EmailService) emailService: EmailService
    ) {
        this.userService = userService;
        this.emailService = emailService;
    }

    public register(app: express.Application): void {
        app.route('/auth/register')
            .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const user = new User(
                    req.body.password,
                    req.body.email,
                    req.body.name,
                    req.body.location,
                    req.body.radius,
                    req.body.age,
                    req.body.gender
                );
                const createdUser = await this.userService.createUser(user).catch((err) => next(err));
                const admins = await this.userService.getAdmins();
                admins.forEach((adm) => {
                    this.emailService.sendMail(
                        adm.email,
                        'New user registration request',
                        'There is a new user that wants to register, you can approve him here:'
                    );
                });
                res.json(createdUser);
            });
        app.route('/auth/login')
            .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const user = new User(
                    req.body.password,
                    req.body.email
                );
                const createdUser = await this.userService.loginUser(user).catch((err) => next(err));
                res.json(createdUser);
            });
        app.route('/auth/logout')
            .post(authorize, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                await this.userService.logOutUser(req.user);
                res.json({ message: 'Ok', status: 200 });
            });
        app.route('/users/pending')
            .get([authorize, admin], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const users = await this.userService.getPendingApprovalUsers().catch((err) => next(err));
                res.json(users);
            });
    }
}
