import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../shared/interfaces';
@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	constructor(private http: HttpClient) {}
	getAllProjects(): Observable<Project[]> {
		return this.http
			.get<Project[]>('/api/project')
			.pipe(map(data => Object.keys(data).map(k => data[k])));
	}
	getById(id: string): Observable<any> {
		return this.http.get<any>(`/api/project/${id}`);
	}

	create(project: Project): Observable<Project> {
		return this.http.post<Project>('/api/project', project);
	}
	update(project: Project): Observable<Project> {
		return this.http.patch<Project>(`/api/project/${project._id}`, project);
	}
	delete(project: Project): Observable<any> {
		return this.http.delete<Project>(`/api/project/${project._id}`);
	}
}
