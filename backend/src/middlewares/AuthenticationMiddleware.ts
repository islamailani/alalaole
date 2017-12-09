
import * as express from 'express';

import container from '../inversify.config';

import { UserService } from '../services/UserService';
import TYPES from '../types';

export default async function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    const token = req.headers['x-api-token'];

    if (token) {
        const userService = container.get<UserService>(TYPES.UserService);
        req.user = await userService.findByToken(token.toString());
    }

    next();
}
