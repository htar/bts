import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Issue, User } from 'src/app/shared/interfaces';
import { IssueService } from 'src/app/services/issue.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/shared/interfaces';
import { MaterialService } from 'src/app/services/material.service';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
	selector: 'app-issue-page',
	templateUrl: './issue-page.component.html',
	styleUrls: ['./issue-page.component.styl'],
})
export class IssuePageComponent implements OnInit, OnDestroy {
	aSub: Subscription;
	id: string;
	previousUrl: string;
	issue: Issue;
	user: User;
	comments: Comment[];
	constructor(
		private issueService: IssueService,
		private route: ActivatedRoute,
		private routesService: RoutesService,
		private materialService: MaterialService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.previousUrl = this.routesService.getPreviousUrl();
		if (id) {
			this.aSub = this.issueService.getById(id).subscribe(data => {
				console.log(data);
				this.issue = data.issue;
				this.comments = data.comment;
				this.user = data.user;
			});
		}
	}
	removeComment(comment) {
		for (let i = 0; i < this.comments.length; i++) {
			if (this.comments[i]._id === comment._id) {
				this.comments.splice(i, 1);
			}
		}
	}
	createComment(comment) {
		this.comments = [comment].concat(this.comments);
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	get commentsLength() {
		return this.comments.length;
	}
	closeIssue() {
		const issue = Object.assign(this.issue, { status: 'close' });
		this.issueService.update(issue).subscribe(
			item => {
				this.materialService.openSnackBar(
					`Issue ${item.title} was closed`,
					'ok'
				);
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
}
