import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { AddnewsComponent } from './pages/addnews/addnews.component';
import { SendvalidationComponent } from './pages/sendvalidation/sendvalidation.component';
import { ValidateComponent } from './pages/validate/validate.component';

const routes: Routes = [
	{path: '', component: HomeComponent,},
	{path: 'login', component: LoginComponent,},
	{path: 'register', component: RegisterComponent,},
	{path: 'profil/id', component: ProfilComponent,},
	{path: 'service', component: ServiceComponent,},
	{path: 'addnews', component: AddnewsComponent,},
	{path: 'sendvalidation', component: SendvalidationComponent,},
	{path: 'validate', component: ValidateComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
