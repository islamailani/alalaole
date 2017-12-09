
import * as express from 'express';

import container from '../inversify.config';

export default async function jsonResponse(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    next();
}
