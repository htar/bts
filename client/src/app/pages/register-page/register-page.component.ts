import { AuthService } from '../../services/auth.service';
import { MaterialService } from '../../services/material.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
	FormControl,
	FormGroup,
	Validators,
	FormBuilder,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.styl'],
})
export class RegisterPageComponent implements OnInit, OnDestroy {
	form: FormGroup;
	aSub: Subscription;

	constructor(
		private auth: AuthService,
		private router: Router,
		private formBuilder: FormBuilder,
		private materialService: MaterialService
	) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			username: ['', [Validators.required, Validators.minLength(4)]],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			address: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
			date: ['', Validators.required],
			gender: ['', Validators.required],
		});
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	onSubmit() {
		this.form.disable();
		this.aSub = this.auth.register(this.form.value).subscribe(
			(data) => {
				this.router.navigate(['/app/login', {
					queryParams: {
						register: true
					}
				}]);
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
				this.form.enable();
			}
		);
	}
}
