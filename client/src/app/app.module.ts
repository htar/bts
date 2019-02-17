import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatListModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		SiteLayoutComponent,
		RegisterPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
