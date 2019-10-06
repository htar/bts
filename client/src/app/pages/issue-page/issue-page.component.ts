import { Component, OnInit, OnDestroy } from '@angular/core';
import { Issue, User, Status } from 'src/app/shared/interfaces';
import { IssueService } from 'src/app/services/issue.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/shared/interfaces';
import { MaterialService } from 'src/app/services/material.service';
import { RoutesService } from 'src/app/services/routes.service';
import { Subscription, of } from 'rxjs';
import {
	filter,
	debounceTime,
	distinctUntilChanged,
	switchMap,
} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import statuses from 'src/app/shared/data/statuses';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-issue-page',
	templateUrl: './issue-page.component.html',
	styleUrls: ['./issue-page.component.styl'],
})
export class IssuePageComponent implements OnInit, OnDestroy {
	aSub: Subscription;
	bSub: Subscription;
	previousUrl: string;
	id: string;
	issue: Issue;
	user: User;
	users: User[];
	comments: Comment[];
	statuses: Status[] = statuses;
	selected: string;
	constructor(
		private issueService: IssueService,
		private route: ActivatedRoute,
		private routesService: RoutesService,
		private userService: UserService,
		private materialService: MaterialService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.previousUrl = this.routesService.getPreviousUrl();
		if (id) {
			this.aSub = this.issueService.getById(id).subscribe(data => {
				this.issue = data.issue;
				this.comments = data.comment;
				this.user = data.user;
				this.selected = this.issue.status;
			});
		}
	}
	updateStatus(status) {
		this.updateIssueStatus(status);
	}
	search(value) {
		this.bSub = of(value.target.value)
			.pipe(
				filter(searchTerm => searchTerm.length),
				debounceTime(500),
				distinctUntilChanged(),
				switchMap(searchKey => this.userService.search({ search: searchKey }))
			)
			.subscribe(
				res => {
					this.users = res;
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
	}
	removeComment(comment) {
		for (let i = 0; i < this.comments.length; i++) {
			if (this.comments[i]._id === comment._id) {
				this.comments.splice(i, 1);
			}
		}
	}
	assignUser(item) {
		const arr: string[] = this.issue.assignUser;
		if (arr.includes(item._id)) {
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === item._id) {
					arr.splice(i, 1);
				}
			}
		} else {
			arr.push(item._id);
		}
		of('ok')
			.pipe(
				debounceTime(500),
				switchMap(() => this.issueService.update(this.issue))
			)
			.subscribe(
				res => {
					this.materialService.openSnackBar('Assigned list update', 'ok');
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
	}
	isSelected(user) {
		return this.issue.assignUser.includes(user._id);
	}
	createComment(comment) {
		this.comments = this.comments.concat(comment);
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
		if (this.bSub) {
			this.bSub.unsubscribe();
		}
	}
	get commentsLength() {
		return this.comments.length;
	}
	closeIssue() {
		this.updateIssueStatus('closed');
	}
	updateIssueStatus(status = 'open') {
		const issue = Object.assign(this.issue, { status });
		this.issueService.update(issue).subscribe(
			item => {
				this.materialService.openSnackBar(
					`Issue ${item.title} ${status} updated`,
					'ok'
				);
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
}
