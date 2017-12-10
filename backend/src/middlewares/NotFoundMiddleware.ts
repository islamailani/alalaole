
import * as express from 'express';

import container from '../inversify.config';

export default async function notFound(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(404).send({ message: 'Route/Method not found', status: 404 });
}
