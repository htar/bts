import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/shared/interfaces';
import { CommentService } from 'src/app/services/comment.service';
import { MaterialService } from 'src/app/services/material.service';

@Component({
	selector: 'app-comment-card',
	templateUrl: './comment-card.component.html',
	styleUrls: ['./comment-card.component.styl'],
})
export class CommentCardComponent implements OnInit {
	showCommentForm = false;
	@Output() removeCommentEmit = new EventEmitter<Comment>();
	@Input() comment: Comment;
	constructor(
		private commentService: CommentService,
		private materialService: MaterialService
	) {}

	ngOnInit() {}
	removeComment(comment) {
		const decision = window.confirm(`Are you realy want remove Comment`);
		if (decision) {
			this.commentService.delete(comment).subscribe(
				item => {
					this.removeCommentEmit.emit(comment)
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
}
