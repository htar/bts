import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Links } from '../../shared/interfaces';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.styl'],
})
@Injectable()
export class NavigationComponent implements OnInit {
	@Input() links: Links[];

	constructor() { }

	ngOnInit() { }
}
