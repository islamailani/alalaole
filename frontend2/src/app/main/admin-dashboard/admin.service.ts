import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AdminService {

    constructor(
        private http: HttpClient,
        private router: Router) { }

    getPendingUsers() {
        return this.http.get(`/users/pending`);
    }
    approveUser(id) {
        return this.http.post(`/users/${id}/approve`, {});
    }
    disapproveUser(id) {
        return this.http.post(`/users/${id}/disapprove`, {});
    }
}
