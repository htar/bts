import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../shared/interfaces';

@Injectable({
	providedIn: 'root',
})
export class IssueService {
	constructor(private http: HttpClient) {}
	getById(id: string): Observable<any> {
		return this.http.get<any>(`/api/issue/${id}`);
	}

	create(issue: Issue): Observable<Issue> {
		return this.http.post<Issue>('/api/issue', issue);
	}
	update(issue: Issue): Observable<Issue> {
		return this.http.patch<Issue>(`/api/issue/${issue._id}`, issue);
	}
	delete(issue: Issue): Observable<any> {
		return this.http.delete<Issue>(`/api/issue/${issue._id}`);
	}
}
