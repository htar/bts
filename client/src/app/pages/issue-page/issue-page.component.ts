import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Issue } from 'src/app/shared/interfaces';
import { IssueService } from 'src/app/services/issue.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/shared/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialService } from 'src/app/services/material.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
	selector: 'app-issue-page',
	templateUrl: './issue-page.component.html',
	styleUrls: ['./issue-page.component.styl'],
})
export class IssuePageComponent implements OnInit, OnDestroy {
	aSub: Subscription;
	id: string;
	issue: Issue;
	comments: Comment[];
	form: FormGroup;
	constructor(
		private issueService: IssueService,
		private commentService: CommentService,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private materialService: MaterialService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.aSub = this.issueService.getById(id).subscribe(data => {
				console.log(data);
				this.issue = data.issue;
				this.comments = data.comment;
			});
		}
		this.form = this.formBuilder.group({
			message: ['', [Validators.required, Validators.minLength(30)]],
		});
	}
	addNewCommit() {
		console.log(this.form);
		const option = {
			message: this.form.value.message,
			issueId: this.issue._id,
			projectId: this.issue.projectId,
		};
		this.commentService.create(option).subscribe(
			comment => {
				this.comments = [comment].concat(this.comments);
				this.form.reset();
				this.materialService.openSnackBar(`Comment was created`, 'ok');
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	get commentsLength() {
		return this.comments.length;
	}
	get isCloseIssue() {
		return this.form.value.message === '';
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
