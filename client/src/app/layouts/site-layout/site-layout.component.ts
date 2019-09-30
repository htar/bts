import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-site-layout',
	templateUrl: './site-layout.component.html',
	styleUrls: ['./site-layout.component.styl'],
})
export class SiteLayoutComponent implements OnInit {
	siteLinks: Links[] = [
		{
			link: 'projects',
			icon: 'home',
			name: 'Home Page',
		},
		{
			link: 'projects',
			icon: 'storefront',
			name: 'Project',
		},
		{
			link: 'logout',
			icon: 'input',
			name: 'Log Out',
		},
	];
	constructor() {}

	ngOnInit() {}
}
