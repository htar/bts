import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.styl'],
})
export class LoginPageComponent implements OnInit {
	form: FormGroup;

	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.minLength(4),
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(6),
			]),
		});
	}
	onSubmit() {
		// const user = {
		// 	email: this.form.value.email,
		// 	password: this.form.value.password,
		// };
		this.form.disable()
		this.auth
		.login(this.form.value)
		.subscribe(
			() => {
				console.info('Login success')
			},
			errors => {
				console.warn('Login error')
				this.form.enable()
			}
			);
	}
}
