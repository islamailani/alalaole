
import * as express from 'express';
import { QueryFailedError } from 'typeorm';

import container from '../inversify.config';
import TYPES from '../types';

import { HttpError } from '../utils/HttpError';
import { logger } from '../utils/Logger';

export default async function handleErrors(err: Error | HttpError, req: express.Request, res: express.Response, next: express.NextFunction) {
    if (err instanceof HttpError) {
        res.status(err.status).send(JSON.stringify({ message: err.message, status: err.status }));
    } else if (err instanceof QueryFailedError) {
        res.status(400).send(JSON.stringify({
            status: 400,
            message: (err as QueryFailedError).message
        }));
    } else {
        logger.error(err.stack);
        res.status(500).send(JSON.stringify({ message: 'Internal server error', status: 500 }));
    }
}
