import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/shared/interfaces/interfaces';

@Component({
	selector: 'app-auth-layout',
	templateUrl: './auth-layout.component.html',
	styleUrls: ['./auth-layout.component.styl'],
})
export class AuthLayoutComponent implements OnInit {
	authLinks: Links[] = [
		{
			link: 'login',
			icon: 'input',
			name: 'Log in'
		},
		{
			link: 'register',
			icon: 'fingerprint',
			name: 'Sign Up'
		},
	];
	constructor() { }

	ngOnInit() { }
}
