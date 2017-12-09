import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { LoginComponent } from './shared/authentication/login/login.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './main/top-bar/top-bar.component';
import { RegistrationComponent } from './shared/authentication/registration/registration.component';

import { AgmCoreModule } from '@agm/core';
import { MyIssuesComponent } from './main/my-issues/my-issues.component';
import { CreateIssueComponent } from './main/create-issue/create-issue.component';
import { AuthService } from './shared/authentication/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/authentication/http-interceptors/base-url.interceptor';
import { AuthorizationInterceptor } from './shared/authentication/http-interceptors/authorization.interceptor';
import { IssuesComponent } from './main/issues/issues.component';
import { IssuesService } from './main/issues.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IssuesViewComponent } from './main/issue-view/issue-view.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './main/home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TopBarComponent,
    RegistrationComponent,
    MyIssuesComponent,
    CreateIssueComponent,
    IssuesComponent,
    IssuesViewComponent,
    HomeComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo7q0OQ_G2atP-FrlEHVEIEuYk2V-PxuM',
      libraries: ['geometry', 'places']
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatMenuModule,
    RouterModule
  ],
  providers: [
    AuthService,
    IssuesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
