import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.styl'],
})
export class LoginPageComponent implements OnInit {
	constructor() {}
	email = new FormControl('', [Validators.required, Validators.email]);

	getErrorMessage() {
		return this.email.hasError('required') ? 'You must enter a value' :
			this.email.hasError('email') ? 'Not a valid email' :
				'';
	}
	ngOnInit() {}
}
