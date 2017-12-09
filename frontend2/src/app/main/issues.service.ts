import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateIssue } from '../shared/models/Issues';

@Injectable()
export class IssuesService {

    constructor(
        private http: HttpClient,
        private router: Router) { }

    uploadPhoto(formData: FormData) {
        return this.http.post(`/issues/photo/upload`, formData);
    }

    createIssue(issue: CreateIssue) {
        return this.http.post(`/issues`, issue);
    }

}
