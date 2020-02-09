import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pipeline } from '../shared/interfaces';

@Injectable({
	providedIn: 'root',
})
export class PipelineService {
	constructor(private http: HttpClient) {}

	create(pipeline: Pipeline): Observable<Pipeline> {
		return this.http.post<Pipeline>('/api/pipeline', pipeline);
	}
}
