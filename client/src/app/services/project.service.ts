import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../shared/interfaces';
@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	constructor(private http: HttpClient) { }
	getAllProjects(): Observable<Project[]> {
		return this.http.get<Project[]>('/api/project')
		.pipe(
			map(data => Object.keys(data).map(k => data[k]))
		);
	}
	getById(id: string): Observable<Project> {
		return this.http.get<Project>(`/api/project/${id}`);
	}

	delete(id: string): Observable<Project> {
		return this.http.delete<Project>(`/api/project/${id}`);
	}
}
