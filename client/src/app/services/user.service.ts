import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}
	search(search: any): Observable<User[]> {
		const option = { limit: 50, skip: 0 };
		Object.assign(search, option);
		return this.http.post<User[]>('/api/user/search', search);
	}
}
