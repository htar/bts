import { MaterialService } from './../../services/material.service';
import { IssueService } from './../../services/issue.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project, Issue, Pipeline } from 'src/app/shared/interfaces';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { IssueFormComponent } from 'src/app/component/issue-form/issue-form.component';
import { Subscription } from 'rxjs';
import groupBy from 'lodash/groupBy';

import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: ['./project-page.component.styl'],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
	aSub: Subscription;
	id: string;
	project: Project;
	issues: Issue[];
	pipelines: Pipeline[] = [];
	columns: object = {};
	issueGroups: object = {};
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
				this.pipelines = data.pipelines;
				this.issues = data.issues;
				this.issueGroups = groupBy(this.issues, 'pipeline');
				this.columns = Object.keys(this.issueGroups);
			});
		}
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	addNewIssue(pipeline) {
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
				pipeline: (pipeline && pipeline._id) || this.pipelines[0]._id,
				projectId: this.project._id,
			};
			this.issueService.create(option).subscribe(
				issue => {
					console.log(issue);
					this.issues = [issue].concat(this.issues);
					console.log(this.issues);
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
	drop(event: CdkDragDrop<string[]>, column: string) {
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
		// @ts-ignore
		const id: string = event.container.data[event.currentIndex]._id;
		const item = this.issues.find(issue => issue._id === id);
		item.pipeline = column;
		this.issueService.update(item).subscribe(
			issue => {},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
	findPipeline(pipeline) {
		const ourPipeline =  this.pipelines.find(item => item._id === pipeline);
		return ourPipeline.name;

	}
}
