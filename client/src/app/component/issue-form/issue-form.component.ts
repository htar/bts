import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Status } from 'src/app/shared/interfaces';

import statuses from 'src/app/shared/data/statuses';
@Component({
	selector: 'app-issue-form',
	templateUrl: './issue-form.component.html',
	styleUrls: ['./issue-form.component.styl'],
})
export class IssueFormComponent implements OnInit {
	form: FormGroup;
	description: string;
	title: string;
	statuses: Status[] = statuses;
	selected: string = this.statuses[0].value;

	constructor(
		private formBuilder: FormBuilder,
		private dialogRef: MatDialogRef<IssueFormComponent>,
		@Inject(MAT_DIALOG_DATA) data
	) {
		this.description = data.description;
		this.title = data.title;
		this.selected = data.status;
	}
	ngOnInit() {
		this.form = this.formBuilder.group({
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
