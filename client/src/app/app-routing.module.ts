
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import {OverviewPageComponent} from './pages/overview-page/overview-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/app/login', pathMatch: 'full' },
	{ path: 'app', component: AuthLayoutComponent, children: [
			{ path: 'login', component: LoginPageComponent },
			{ path: 'register', component: RegisterPageComponent }
	] },
	{ path: 'api', component: SiteLayoutComponent, children: [
		{path: 'overview', component: OverviewPageComponent}
	] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
