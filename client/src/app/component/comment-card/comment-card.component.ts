import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/shared/interfaces';
import { CommentService } from 'src/app/services/comment.service';
import { MaterialService } from 'src/app/services/material.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-comment-card',
	templateUrl: './comment-card.component.html',
	styleUrls: ['./comment-card.component.styl'],
})
export class CommentCardComponent implements OnInit {
	updateForm: FormGroup;
	showCommentForm = false;
	@Input() comment: Comment;
	@Output() removeCommentEmit = new EventEmitter<Comment>();
	constructor(
		private formBuilder: FormBuilder,
		private commentService: CommentService,
		private materialService: MaterialService
	) {}

	ngOnInit() {
		this.updateForm = this.formBuilder.group({
			message: [this.comment.message || '', [Validators.required]],
		});
	}
	removeComment(comment) {
		const decision = window.confirm(`Are you realy want remove Comment`);
		if (decision) {
			this.commentService.delete(comment).subscribe(
				item => {
					this.removeCommentEmit.emit(comment);
					this.materialService.openSnackBar(`Comment was removed`, 'ok');
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
		}
	}
	toggleCommentForm() {
		this.showCommentForm = !this.showCommentForm;
	}
	updateCommit() {
		const option = {
			message: this.updateForm.value.message,
		};
		Object.assign(this.comment, option);
		this.commentService.update(this.comment).subscribe(
			comment => {
				this.toggleCommentForm();
				this.updateForm.reset();
				this.materialService.openSnackBar(`Comment was Updated`, 'ok');
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
}
