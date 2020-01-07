import { Issue } from 'src/app/shared/interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
	selector: 'app-issue-card',
	templateUrl: './issue-card.component.html',
	styleUrls: ['./issue-card.component.styl'],
})
export class IssueCardComponent implements OnInit {
	@Output() removeIssueEmit = new EventEmitter<Issue>();
	@Input() issue: Issue;
	constructor(
		private dialog: MatDialog,
		private issueService: IssueService,
		private materialService: MaterialService
	) {}
	updateIssue(issue) {
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;

		dialogConfig.data = {
			title: issue.title,
			description: issue.description,
			status: issue.status,
		};

		const dialogRef = this.dialog.open(IssueFormComponent, dialogConfig);

		dialogRef.afterClosed().subscribe(data => {
			if (!data) {
				return;
			}
			const option = {
				status: data.status,
				description: data.description,
				title: data.title,
				pipeline: data.pipeline,
				projectId: issue.project,
				_id: issue._id,
			};
			this.issueService.update(option).subscribe(
				item => {
					Object.assign(this.issue, item);
					this.materialService.openSnackBar(
						`Issue ${item.title} was updated`,
						'ok'
					);
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
		});
	}
	removeIssue(issue) {
		const decision = window.confirm(
			`Are you realy want remove Issue ${issue.title}`
		);
		if (decision) {
			this.issueService.delete(issue).subscribe(
				data => {
					this.removeIssueEmit.emit(issue);
					this.materialService.openSnackBar(data.message, 'ok');
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
		}
	}
	ngOnInit() {}
}
