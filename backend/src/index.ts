import * as bodyParser from 'body-parser';
import * as express from 'express';
import 'reflect-metadata';
import { createConnection, QueryFailedError } from 'typeorm';

import container from './inversify.config';
import TYPES from './types';
import { logger } from './utils/Logger';

import { Controller } from './controllers/Controller';
import { HttpError } from './utils/HttpError';

import { Config } from './config/Config';
import authorize from './middlewares/AuthenticationMiddleware';

createConnection(Config.ConnectionOptions).then(async (connection) => {

    const app: express.Application = express();
    app.use(bodyParser.json());

    app.use(authorize);

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.setHeader('Content-Type', 'application/json');
        next();
    });

    const controllers: Controller[] = container.getAll<Controller>(TYPES.Controller);
    controllers.forEach((controller) => controller.register(app));

    app.use((err: Error | HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (err instanceof HttpError) {
            res.status(err.status).send(JSON.stringify({ message: err.message, status: err.status }));
        } else if (err instanceof QueryFailedError) {
            res.status(400).send(JSON.stringify({
                status: 400,
                message: (err as QueryFailedError).message
            }));
        } else {
            logger.error(err.stack);
            next(err);
        }
    });

    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(500).send(JSON.stringify({ message: 'Internal server error', status: 500 }));
    });

    app.listen(3000, () => {
        logger.info('App listening on port 3000!');
    });
});
