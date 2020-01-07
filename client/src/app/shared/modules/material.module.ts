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
	MatMenuModule,
	MatAutocompleteModule,
} from '@angular/material';

import {DragDropModule} from '@angular/cdk/drag-drop';

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
		MatMenuModule,
		MatAutocompleteModule,
		DragDropModule
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
		MatMenuModule,
		MatAutocompleteModule,
		DragDropModule
	],
})
export class MaterialModule {}
