import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../shared/authentication/auth.service';
import { LoginUser } from '../../shared/models/User';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  currentUser: LoginUser;
  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log(this.currentUser);
  }

  public signOut() {
    this.authService.signOut().subscribe(res => {
    });
    this.router.navigate(['']);
  }


}
