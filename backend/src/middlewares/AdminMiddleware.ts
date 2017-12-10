import * as express from 'express';

import container from '../inversify.config';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { Role } from '../models/User';

export default async function admin(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.user.role !== Role.Admin) {
        next(new HttpError('You are not allowed to do this !', 403));
    }

    next();
}
