import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialService } from 'src/app/services/material.service';
import { CommentService } from 'src/app/services/comment.service';
import { Issue } from 'src/app/shared/interfaces';
import { Comment } from 'src/app/shared/interfaces';
import { IssueService } from 'src/app/services/issue.service';

@Component({
	selector: 'app-comment-form',
	templateUrl: './comment-form.component.html',
	styleUrls: ['./comment-form.component.styl'],
})
export class CommentFormComponent implements OnInit {
	form: FormGroup;
	comment: Comment;
	@Input() issue: Issue;
	@Output() createCommentEmit = new EventEmitter<Comment>();
	constructor(
		private formBuilder: FormBuilder,
		private materialService: MaterialService,
		private issueService: IssueService,
		private commentService: CommentService
	) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			message: ['', [Validators.required]],
		});
	}
	addNewCommit() {
		const option = {
			message: this.form.value.message,
			issueId: this.issue._id,
			projectId: this.issue.projectId,
		};
		this.commentService.create(option).subscribe(
			comment => {
				this.createCommentEmit.emit(comment);
				this.form.reset();
				this.form.value.message = '';
				this.materialService.openSnackBar(`Comment was created`, 'ok');
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
	get isCloseIssue() {
		return this.form.value.message === '';
	}
	closeIssueAndCommit() {
		this.addNewCommit();
		this.closeIssue();
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
