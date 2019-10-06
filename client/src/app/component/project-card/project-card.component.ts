import { MaterialService } from 'src/app/services/material.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/shared/interfaces';
import { ProjectService } from 'src/app/services/project.service';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.styl'],
})
export class ProjectCardComponent implements OnInit {
	showProjectForm = false;
	@Output() removeProjectEmit = new EventEmitter<Project>();
	@Input() project: Project;
	constructor(
		private projectService: ProjectService,
		private materialService: MaterialService
	) {}
	toggleShowProjectForm() {
		this.showProjectForm = !this.showProjectForm;
	}

	ngOnInit() {}
	removeProject(project) {
		const decision = window.confirm(
			`Are you realy want remove project ${project.name}`
		);
		if (decision) {
			this.projectService.delete(project).subscribe(
				data => {
					this.removeProjectEmit.emit(project);
					this.materialService.openSnackBar(data.message, 'ok');
				},
				error => {
					this.materialService.openSnackBar(error.error.message, 'ok');
				}
			);
		}
	}
}
