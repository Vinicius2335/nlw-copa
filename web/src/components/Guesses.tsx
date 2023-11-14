"use client"

import { api } from "@/libs/axios"
import { ExceptionResponse, GetAllGamesResponse } from "@/model/responses"
import { useEffect, useState } from "react"
import { Game } from "./Game"
import { Loading } from "./generic/Loading"
import { useToast } from "./ui/use-toast"
import { AxiosError } from "axios"

interface GuessesProps {
  pollId: string
  code: string
}

export function Guesses({ pollId, code }: GuessesProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<GetAllGamesResponse[]>([])
  const [firstTeamPoints, setFirstTeamPoints] = useState("")
  const [secondTeamPoints, setSecondTeamPoints] = useState("")
  const { toast } = useToast()

  async function getAllGames() {
    try {
      setIsLoading(true)

      const response = await api
        .get<GetAllGamesResponse[]>(`/polls/${pollId}/games`)
        .then(resp => resp.data)
      setGames(response)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "❌ Erro",
        description: "Não foi possível listar os jogos.",
        duration: 2000
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGuessConfirm(gameId: string) {
    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        toast({
          variant: "destructive",
          title: "❌ Erro",
          description: "Informe o placar para palpitar.",
          duration: 2000
        })
        return
      }

      await api.post(`/polls/${pollId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints)
      })

      toast({
        variant: "success",
        title: "✔ Sucesso",
        description: "Palpite realizado com sucesso.",
        duration: 2000
      })

      getAllGames()
    } catch (ex) {
      const error = ex as AxiosError<ExceptionResponse>
      console.log(error.response?.data)

      if (error.response?.data.title === "You cannot send guesses after the game date...") {
        toast({
          variant: "destructive",
          title: "❌ Enviar Palpite",
          description: "Você não pode enviar palpites após a data do jogo....",
          duration: 2000
        })
      } else {
        toast({
          variant: "destructive",
          title: "❌ Enviar Palpite",
          description: "Não foi possível enviar o palpite.",
          duration: 2000
        })
      }
    }
  }

  useEffect(() => {
    getAllGames()
  }, [])

  if (isLoading) {
    return <Loading tamanho="w-20 h-20" classname="text-nlwYellow-500" />
  }

  return (
    <>
      {games.map((item, idx) => (
        <Game
          key={idx}
          data={item}
          onGuessConfirm={() => handleGuessConfirm(item.game.id)}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
        />
      ))}
    </>
  )
}
