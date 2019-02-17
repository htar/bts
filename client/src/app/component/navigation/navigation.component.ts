import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.styl'],
})
export class NavigationComponent implements OnInit {
	routs: [] = [
		{link: 'login',
		icon: 'fingerprint',
		name: 'Log in' },
		{link: 'register',
		icon: 'input',
		name: 'Sign Up' },
	];
	constructor() {}

	ngOnInit() {}
}
