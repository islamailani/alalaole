import * as bcrypt from 'bcrypt-nodejs';
import { inject, injectable } from 'inversify';
import * as uuid from 'uuid';

import TYPES from '../types';
import { HttpError } from '../utils/HttpError';

import { Issue } from '../models/Issue';

export interface IssueService {
    createIssue(issue: Issue): Promise<Issue>;
}


