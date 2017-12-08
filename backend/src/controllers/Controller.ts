import * as express from 'express';

export interface Controller {
    register(app: express.Application): void;
