import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
	{ path: '', component: SiteLayoutComponent, children: [
			{ path: 'login', component: LoginPageComponent },
			{ path: 'register', component: RegisterPageComponent }
	] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
