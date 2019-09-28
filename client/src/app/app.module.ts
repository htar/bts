import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatNativeDateModule,
	MatDatepickerModule,
	MatIconModule,
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatRadioModule,
	MatSnackBarModule,
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		AuthLayoutComponent,
		RegisterPageComponent,
		NavigationComponent,
		OverviewPageComponent,
		SiteLayoutComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,

		MatToolbarModule,
		MatIconModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSnackBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
