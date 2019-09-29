import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-auth-layout',
	templateUrl: './auth-layout.component.html',
	styleUrls: ['./auth-layout.component.styl'],
})
export class AuthLayoutComponent implements OnInit {
	authLinks: Links[] = [
		{
			link: 'login',
			icon: 'public',
			name: 'Log in'
		},
		{
			link: 'registration',
			icon: 'fingerprint',
			name: 'Sign Up'
		},
	];
	constructor() { }

	ngOnInit() { }
}
