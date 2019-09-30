import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {  Status } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-issue-form',
	templateUrl: './issue-form.component.html',
	styleUrls: ['./issue-form.component.styl'],
})
export class IssueFormComponent implements OnInit {
	form: FormGroup;
	description: string;
	title: string;
	statuses: Status[] = [
		{ value: 'open', viewValue: 'Open' },
		{ value: 'todo', viewValue: 'To do' },
		{ value: 'progress', viewValue: 'In progress' },
		{ value: 'closed', viewValue: 'Closed' },
	];
	status: Status = this.statuses[0];

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<IssueFormComponent>,
		@Inject(MAT_DIALOG_DATA) data
	) {
		this.description = data.description;
		this.title = data.title;
		this.status = data.status;
	}
	ngOnInit() {
		this.form = this.fb.group({
			description: [
				this.description || '',
				[Validators.required, Validators.minLength(6)],
			],
			title: [this.title || '', [Validators.required, Validators.minLength(6)]],
			status: [this.status || this.statuses[0], [Validators.required]],
		});
	}
	save() {
		this.dialogRef.close(this.form.value);
	}

	close() {
		this.dialogRef.close();
	}
}
