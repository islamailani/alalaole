import * as express from 'express';

export interface RegisterableController {
    register(app: express.Application): void;
}
