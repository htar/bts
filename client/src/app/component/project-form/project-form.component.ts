import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/shared/interfaces';
import { ProjectService } from 'src/app/services/project.service';
import { MaterialService } from 'src/app/services/material.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./project-form.component.styl'],
})
export class ProjectFormComponent implements OnInit {
	form: FormGroup;
	@Input() project: Project;
	@Output() hideProjectForm = new EventEmitter();
	constructor(
		private projectService: ProjectService,
		private materialService: MaterialService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			name: [this.project.name || '', [Validators.required, Validators.minLength(6)]],
		});
	}
	updateProject(project) {
		const option = Object.assign(project, this.form.value);
		this.projectService.update(option).subscribe(
			item => {
				this.hideProjectForm.emit();
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
