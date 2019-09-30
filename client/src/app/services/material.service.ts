import {
	MatSnackBar,
	MatSnackBarConfig,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MaterialService {
	horizontalPosition: MatSnackBarHorizontalPosition = 'right';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';

	constructor(private snackBar: MatSnackBar) {}
	openSnackBar(message: string, action: string) {
		const config = new MatSnackBarConfig();
		config.verticalPosition = this.verticalPosition;
		config.horizontalPosition = this.horizontalPosition;
		config.duration = 5000;
		this.snackBar.open(message, action, config);
	}
}
