import { Project } from './../../shared/interfaces/index';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Observable, Subscription } from 'rxjs';
import { scan, map } from 'rxjs/operators';

@Component({
	selector: 'app-projects-page',
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.styl'],
})
export class ProjectsPageComponent implements OnInit, OnDestroy, AfterViewInit {
	oSub: Subscription;
	projects: Project[] = [];
	loading = false;
	constructor(private projectService: ProjectService) {}
	ngOnInit() {
		this.loading = true;
		this.oSub = this.projectService.getAllProjects().subscribe(projects => {
			this.projects = projects;
			console.log(projects)
			this.loading = false;
		});
	}
	ngOnDestroy() {
		this.oSub.unsubscribe();
	}
	ngAfterViewInit() {
	}
}
