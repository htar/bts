import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.styl'],
})
export class NavigationComponent implements OnInit {
	routs: any = [
		{link: 'login',
		icon: 'input',
		name: 'Log in' },
		{link: 'register',
		icon: 'fingerprint',
		name: 'Sign Up' },
	];
	constructor() {}

	ngOnInit() {}
}
