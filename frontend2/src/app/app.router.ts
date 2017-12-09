import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/authentication/login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './shared/authentication/registration/registration.component';
import { MyIssuesComponent } from './main/my-issues/my-issues.component';
import { CreateIssueComponent } from './main/create-issue/create-issue.component';
import { IssuesComponent } from './main/issues/issues.component';
import { IssuesViewComponent } from './main/issue-view/issue-view.component';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: RegistrationComponent,
        path: 'register'
    },
    {
        component: MainComponent,
        path: 'home',
        children: [
            {
                component: MyIssuesComponent,
                path: 'my-issues'
            },
            {
                component: CreateIssueComponent,
                path: 'create-issue'
            },
            {
                component: IssuesComponent,
                path: 'issues'
            },
            {
                component: IssuesViewComponent,
                path: 'issues/:id'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
