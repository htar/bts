
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { MaterialModule } from './shared/modules/material.module';
import { LoaderComponent } from './component/loader/loader.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AngularModule } from './shared/modules/angular.module';
import { IssueFormComponent } from './component/issue-form/issue-form.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		AuthLayoutComponent,
		RegisterPageComponent,
		NavigationComponent,
		SiteLayoutComponent,
		ProjectsPageComponent,
		LoaderComponent,
		ProjectPageComponent,
		IssueFormComponent,
	],
	imports: [
		AppRoutingModule,
		AngularModule,
		MaterialModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		multi: true,
		useClass: TokenInterceptor
	}],
	bootstrap: [AppComponent],
})
export class AppModule { }
