import * as express from 'express';
import { inject, injectable } from 'inversify';

import TYPES from '../types';
import { Controller } from './Controller';

import { User } from '../models/User';
import { UserService } from '../services/UserService';

@injectable()
export class UserController implements Controller {
    private userService: UserService;

    constructor( @inject(TYPES.UserService) userService: UserService) {
        this.userService = userService;
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
    }
}
