import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project, Issue, Category } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-project-page',
	templateUrl: './project-page.component.html',
	styleUrls: ['./project-page.component.styl'],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
	id: string;
	project: Project;
	issues: Issue[] = [];
	categories: Category[] = [];
	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService
	) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.projectService.getById(id).subscribe(data => {
				this.project = data.project;
				this.issues = data.issues;
				this.categories = data.categories;
			});
		}
	}
	ngOnDestroy() {
	}
}
