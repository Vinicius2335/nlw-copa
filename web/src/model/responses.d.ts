import { Game } from "./models"

export interface UserProps {
  name: string
  avatarUrl: string
}

export interface LoginResponse {
  token: string
  user: UserProps
}

export interface ExceptionResponse {
  timestamp: string
  title: string
  status: number
}

export interface GetAllGamesResponse {
  game: Game
  guess: null | Guess
}
