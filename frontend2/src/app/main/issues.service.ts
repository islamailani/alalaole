import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateIssue, Issue } from '../shared/models/Issues';

@Injectable()
export class IssuesService {

    constructor(
        private http: HttpClient,
        private router: Router) { }

    getIssues() {
        return this.http.get(`/issues`);
    }

    uploadPhoto(formData: FormData) {
        return this.http.post(`/issues/photo/upload`, formData);
    }

    createIssue(issue: CreateIssue) {
        return this.http.post(`/issues`, issue);
    }

    upVoteIssue(issue: Issue) {
        return this.http.post(`/issues/${issue.id}/upvote`, {});
    }

    downVoteIssue(issue: Issue) {
        return this.http.post(`/issues/${issue.id}/downvote`, {});
    }

}
