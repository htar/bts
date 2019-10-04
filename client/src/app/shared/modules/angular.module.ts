import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	exports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
})
export class AngularModule {}
