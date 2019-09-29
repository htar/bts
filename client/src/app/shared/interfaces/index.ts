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
	user?: string;
	__v?: number;
	list?: any;
	imageSrc?: string;
}
