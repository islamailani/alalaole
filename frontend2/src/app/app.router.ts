import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/authentication/login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './shared/authentication/registration/registration.component';


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
        path: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
