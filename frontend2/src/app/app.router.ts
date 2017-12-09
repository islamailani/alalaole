import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/authentication/login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './shared/authentication/registration/registration.component';
import { MyIssuesComponent } from './main/my-issues/my-issues.component';
import { CreateIssueComponent } from './main/create-issue/create-issue.component';
import { IssuesComponent } from './main/issues/issues.component';


const routes: Routes = [
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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
