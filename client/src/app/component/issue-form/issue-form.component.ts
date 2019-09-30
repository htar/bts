import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

interface Status {
	value: string;
}
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
		{ value: 'open' },
		{ value: 'todo' },
		{ value: 'progress' },
		{ value: 'closed' },
	];
	selected: string = this.statuses[0].value;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<IssueFormComponent>,
		@Inject(MAT_DIALOG_DATA) data
	) {
		this.description = data.description;
		this.title = data.title;
		this.selected = data.status;
	}
	ngOnInit() {
		this.form = this.fb.group({
			description: [
				this.description || '',
				[Validators.required, Validators.minLength(6)],
			],
			title: [this.title || '', [Validators.required, Validators.minLength(6)]],
			status: [this.selected, [Validators.required]],
		});
	}
	save() {
		this.dialogRef.close(this.form.value);
	}

	close() {
		this.dialogRef.close();
	}
}
