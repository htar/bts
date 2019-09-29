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

import { NgModule } from '@angular/core';

@NgModule({
	imports: [
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
	exports: [
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
})
export class MaterialModule {}
