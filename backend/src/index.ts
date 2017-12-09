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
import authenticate from './middlewares/AuthenticationMiddleware';
import handleErrors from './middlewares/ErrorHandlingMiddleware';

createConnection(Config.ConnectionOptions).then(async (connection) => {

    const app: express.Application = express();
    app.use(bodyParser.json());

    app.use(authenticate);

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.setHeader('Content-Type', 'application/json');
        next();
    });

    const controllers: Controller[] = container.getAll<Controller>(TYPES.Controller);
    controllers.forEach((controller) => controller.register(app));

    app.use(handleErrors);

    app.listen(3000, () => {
        logger.info('App listening on port 3000!');
    });
});
