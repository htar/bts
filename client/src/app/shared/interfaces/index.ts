export interface User {
	email: string;
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

export interface Category {
	_id?: string;
	name: string;
	createdAt?: Date;
	project: string;
}
