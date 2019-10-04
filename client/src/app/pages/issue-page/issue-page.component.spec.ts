import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePageComponent } from './issue-page.component';

describe('IssuePageComponent', () => {
	let component: IssuePageComponent;
	let fixture: ComponentFixture<IssuePageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IssuePageComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IssuePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
