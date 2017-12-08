import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/authentication/login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './shared/authentication/registration/registration.component';
import { MyIssuesComponent } from './main/issues/my-issues.component';


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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
