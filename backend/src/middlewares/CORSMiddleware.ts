
import * as express from 'express';

import container from '../inversify.config';

export default async function CORS(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    /* tslint:disable */ 
    res.setHeader('Access-Control-Allow-Headers',
        `Access-Control-Allow-Headers, Origin,Accept, x-api-token, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`);

    next();
}
