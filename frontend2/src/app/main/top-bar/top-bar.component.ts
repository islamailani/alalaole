import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../shared/authentication/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public signOut() {
    this.authService.signOut().subscribe(res => {
    });
    this.router.navigate(['']);
  }


}
