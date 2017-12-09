import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/User';


@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router) { }

    login({ email, password }) {
        return this.http.post(`/auth/login`, {
            email, password
        });
    }

    signOut() {
        return this.http.post(`/auth/logout`, {  });
    }

    register(registerUser: RegisterUser) {
        return this.http.post(`/auth/register`, registerUser);
    }

    getToken() {
        return localStorage.getItem('AuthToken');
    }
}
