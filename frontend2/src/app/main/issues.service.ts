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

    getIssuesWithParam(location?) {
        return this.http.get(`/issues?latitude=${location.latitude}&longitude=${location.longitude}`);
    }

    getMyIssues() {
        return this.http.get(`/myissues`);
    }

    getIssueById(id: number) {
        return this.http.get(`/issues/${id}`);
    }

    markSolved(id: number) {
        return this.http.post(`/issues/${id}/solve`, {});
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

    postComment(issue: Issue, comment: string) {
        return this.http.post(`/issues/${issue.id}/comments`, { text: comment });
    }
}
