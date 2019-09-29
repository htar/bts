import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { MaterialModule } from './shared/modules/material.module';
import { LoaderComponent } from './component/loader/loader.component';

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
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,

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
