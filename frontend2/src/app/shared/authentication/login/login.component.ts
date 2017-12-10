import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public credentials: any = {
    email: '',
    password: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.bindForm();
  }

  public bindForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.credentials.email, Validators.compose([Validators.email, Validators.required])],
      password: [this.credentials.password, Validators.required]
    });
  }

  // login method on login form submited
  public login(): void {
    this.authService.login(this.loginForm.value)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('AuthToken', res.token);
        this.router.navigate(['issues']);
      },
      err => {
        console.log(err);
        this.handleResponse(`Error! ${err.statusText}`);
      }
      );
  }

  notify(status: any, text: any) {
    this.snackbar.open(status, text, {
      duration: 3000
    });
  }

  public handleResponse(text) {
    this.notify(text, ' ');
  }



}
