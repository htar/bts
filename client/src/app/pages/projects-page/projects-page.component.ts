import { Project } from './../../shared/interfaces/index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-projects-page',
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.styl'],
})
export class ProjectsPageComponent implements OnInit, OnDestroy {
	oSub: Subscription;
	projects: Project[] = [];
	constructor(private projectService: ProjectService) {}
	ngOnInit() {
		this.oSub = this.projectService.getAllProjects().subscribe(projects => {
			this.projects = projects;
		});
	}
	ngOnDestroy() {
		this.oSub.unsubscribe();
	}
}
