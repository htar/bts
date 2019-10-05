import { Project } from './../../shared/interfaces/index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MaterialService } from 'src/app/services/material.service';

@Component({
	selector: 'app-projects-page',
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.styl'],
})
export class ProjectsPageComponent implements OnInit, OnDestroy {
	form: FormGroup;
	showProjectForm = false;
	aSub: Subscription;
	projects: Project[];
	constructor(
		private projectService: ProjectService,
		private materialService: MaterialService,
		private formBuilder: FormBuilder
	) {}
	ngOnInit() {
		this.aSub = this.projectService.getAllProjects().subscribe(projects => {
			this.projects = projects;
		});
		this.form = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(6)]],
		});
	}
	ngOnDestroy() {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
	removeProject(e) {
		for (let i = 0; i < this.projects.length; i++) {
			if (this.projects[i]._id === e._id) {
				this.projects.splice(i, 1);
			}
		}
	}
	addNewProject() {
		this.projectService.create(this.form.value).subscribe(
			project => {
				this.projects = [project].concat(this.projects);
				this.form.reset();
				this.toggleShowForm();
				this.materialService.openSnackBar(
					`Project ${project.name} was created`,
					'ok'
				);
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
	toggleShowForm() {
		this.showProjectForm = !this.showProjectForm;
		if (this.showProjectForm === false) {
			this.form.reset();
		}
	}
}
