// @ts-nocheck

import { PollCardProps } from '../components/poll/PollCard';
import { GetAllGamesResponse } from '../model/responses';

export const data: PollCardProps[] =
[
	{
		"poll": {
			"id": "85cb7820-1ee2-4859-bffe-32f9a62a880e",
			"title": "Bolão do Rodrigão",
			"code": "BOL456",
			"ownerName": "John Doe"
		},
		"countParticipants": 2,
		"participants": [
			{
				"user": {
					"avatarUrl": "https://github.com/spring-projects.png"
				}
			},
			{
				"user": {
					"avatarUrl": "https://github.com/Vinicius2335.png"
				}
			}
		]
	},
	{
		"poll": {
			"id": "9a7cfacb-4a46-42ec-9ebf-ef3222c209a3",
			"title": "Bolão do Diegão",
			"code": "BOL123",
			"ownerName": "John Doe"
		},
		"countParticipants": 1,
		"participants": [
			{
				"user": {
					"avatarUrl": "https://github.com/spring-projects.png"
				}
			}
		]
	}
]

export const gamesData: GetAllGamesResponse[] = 
[
	{
		"game": {
			"id": "03e6c4a7-c142-44a1-8cb1-da00681cf101",
			"firstTeamCountryCode": "DE",
			"secondTeamCountryCode": "BR",
			"date": "2023-12-04T13:33:25-03:00"
		},
		"guess": null
	},
	{
		"game": {
			"id": "f5edcfdf-e221-4b25-ba92-c15bbaa17df3",
			"firstTeamCountryCode": "BR",
			"secondTeamCountryCode": "AR",
			"date": "2023-12-04T13:33:25-03:00"
		},
		"guess": null
	}
]