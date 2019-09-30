import { NavigationComponent } from './../navigation/navigation.component';
import { MaterialService } from 'src/app/services/material.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/shared/interfaces';
import { ProjectService } from 'src/app/services/project.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.styl'],
})
export class ProjectCardComponent implements OnInit {
	form: FormGroup;
	showProjectForm = false;
	@Output() removeProjectEmit = new EventEmitter<Project>();
	@Input() project: Project;
	constructor(
		private projectService: ProjectService,
		private materialService: MaterialService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			name: [this.project.name, [Validators.required, Validators.minLength(6)]],
		});
	}
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
	updateProject(project) {
		console.log('object', project, this.form.value);
		const option = Object.assign(project, this.form.value);
		this.projectService.update(option).subscribe(
			(item) => {
				this.showProjectForm = !this.showProjectForm;
				this.materialService.openSnackBar(
					`Project ${item.name} was updated`,
					'ok'
				);
			},
			error => {
				this.materialService.openSnackBar(error.error.message, 'ok');
			}
		);
	}
}
