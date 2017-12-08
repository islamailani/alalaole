import * as bodyParser from 'body-parser';
import * as express from 'express';
import 'reflect-metadata';

import container from './inversify.config';
import TYPES from './types';
import { logger } from './utils/Logger';

import { RegisterableController } from './controllers/RegisterableController';
import { HttpError } from './utils/HttpError';

const app: express.Application = express();
app.use(bodyParser.json());

const controllers: RegisterableController[] = container.getAll<RegisterableController>(TYPES.Controller);
controllers.forEach((controller) => controller.register(app));

app.use((err: Error | HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof HttpError) {
        res.status(err.status).send(JSON.stringify({ message: err.message, status: err.status }));
    } else {
        logger.error(err.stack);
        next(err);
    }
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    logger.info('Example app listening on port 3000!');
});
