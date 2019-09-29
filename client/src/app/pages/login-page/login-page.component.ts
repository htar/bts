import { AuthService } from './../../services/auth.service';
import { MaterialService } from '../../services/material.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.styl'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
	form: FormGroup;
	aSub: Subscription;

	constructor(
		private auth: AuthService,
		private router: Router,
		private route: ActivatedRoute,
		private materialService: MaterialService
	) {}

	ngOnInit() {
		if (this.router.url.includes('logout')) {
			this.auth.logout();
		}
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
		this.route.queryParams.subscribe((params: Params) => {
			if (params['registered']) {
				this.materialService.openSnackBar('So You can login', 'ok');
			} else if (params['accessDenied']) {
				this.materialService.openSnackBar('Please register new account', 'ok');
			} else if (params['sessionFailed']) {
				this.materialService.openSnackBar('Please Login again', 'ok');
			}
		});
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	onSubmit() {
		this.form.disable();
		this.aSub = this.auth.login(this.form.value).subscribe(
			() => {
				this.router.navigate(['/projects']);
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
				this.form.enable();
				this.form.reset();
			}
		);
	}
}
