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
  visitor = false;
  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (localStorage.length !== 0) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    } else {
      this.visitor = true;
    }
    // console.log(this.currentUser);
  }

  public signOut() {
    this.authService.signOut().subscribe(res => {
      localStorage.clear();
      this.router.navigate(['']);
    });
  }


}
