
import * as express from 'express';

import container from '../inversify.config';

import { UserService } from '../services/UserService';
import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

export default async function authorize(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.user) {
        next(new HttpError('You are not allowed to do this !', 403));
    }

    next();
}
