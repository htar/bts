import { MaterialService } from './../../services/material.service';
import { IssueService } from './../../services/issue.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project, Issue, Category } from 'src/app/shared/interfaces';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IssueFormComponent } from 'src/app/component/issue-form/issue-form.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: ['./project-page.component.styl'],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
	aSub: Subscription;
	id: string;
	project: Project;
	issues: Issue[] = [];
	categories: Category[] = [];
	constructor(
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private issueService: IssueService,
		private projectService: ProjectService,
		private materialService: MaterialService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.aSub = this.projectService.getById(id).subscribe(data => {
				this.project = data.project;
				this.issues = data.issues;
				// this.categories = data.categories;
			});
		}
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	addNewIssue() {
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;

		dialogConfig.data = {
			title: '',
			description: '',
			status: 'open',
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
				projectId: this.project._id,
			};
			this.issueService.create(option).subscribe(
				issue => {
					this.issues = [issue].concat(this.issues);
					this.materialService.openSnackBar(
						`Issue ${issue.title} was created`,
						'ok'
					);
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
		});
	}
	removeIssue(e) {
		for (let i = 0; i < this.issues.length; i++) {
			if (this.issues[i]._id === e._id) {
				this.issues.splice(i, 1);
			}
		}
	}
}
