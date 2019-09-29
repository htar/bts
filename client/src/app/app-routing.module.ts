
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
	{
		path: '', component: AuthLayoutComponent, children: [
			{ path: '', redirectTo: '/login', pathMatch: 'full' },
			{ path: 'login', component: LoginPageComponent },
			{ path: 'logout', component: LoginPageComponent },
			{ path: 'registration', component: RegisterPageComponent }
		]
	},
	{
		path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
			{ path: 'projects', component: ProjectsPageComponent },
			{ path: 'project/:id', component: ProjectPageComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
