export interface Poll {
	id: string;
	title: string;
	code: string;
	ownerName: string;
}

export interface User {
	name: string;
	email: string;
	avatarUrl: string;
}

export interface Participant {
	user: User;
}