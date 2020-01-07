export interface User {
	username: string;
	email: string;
	_id?: string;
	password: string;
}
export interface Links {
	link: string;
	icon?: string;
	name: string;
}

export interface Project {
	_id: string;
	name: string;
	createdAt?: Date;
	user: string;
	list?: any;
	imageSrc?: string;
}

export interface Issue {
	_id?: string;
	title: string;
	description: string;
	projectId: string;
	pipeline: string;
	status: string;
	assignUser?: Array<string>;
	subscribeUser?: Array<string>;
	createdAt?: Date;
	user?: any;
}
export interface Comment {
	_id?: string;
	message: string;
	commentedBy?: any;
	createdAt?: Date;
	issueId: string;
	projectId: string;
	comments?: Array<string>;
}

export interface Pipeline {
	_id?: string;
	name: string;
	createdAt?: Date;
	projectId: string;
}

export interface Status {
	value: string;
}
