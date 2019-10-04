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
	MatDialogModule,
	MatListModule,
	MatRadioModule,
	MatSnackBarModule,
	MatSelectModule,
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
		MatDialogModule,
		MatCheckboxModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatSelectModule,
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
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatSelectModule,
	],
})
export class MaterialModule {}
