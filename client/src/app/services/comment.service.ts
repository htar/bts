import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../shared/interfaces';

@Injectable({
	providedIn: 'root',
})
export class CommentService {
	constructor(private http: HttpClient) {}

	create(comment: Comment): Observable<Comment> {
		return this.http.post<Comment>('/api/comment', comment);
	}
	update(comment: Comment): Observable<Comment> {
		return this.http.patch<Comment>(`/api/comment/${comment._id}`, comment);
	}
	delete(comment: Comment): Observable<Comment> {
		return this.http.delete<Comment>(`/api/comment/${comment._id}`);
	}
}
