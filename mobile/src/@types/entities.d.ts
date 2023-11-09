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

export interface ExceptionResponse {
	timestamp: string
  title: string
  status: number
}

export interface Game {
	id: string;
	firstTeamCountryCode: string;
	secondTeamCountryCode: string;
	date: string;
}

export interface Guess {
	firstTeamPoints: number;
	secondTeamPoints: number;
}

export interface ResponseGetAllGames {
	game: Game;
	guess: null | Guess;
}