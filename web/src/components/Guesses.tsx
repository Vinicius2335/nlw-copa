"use client"

import { GetAllGamesResponse } from "@/model/responses"
import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"
import { Loading } from "./generic/Loading"
import { Game } from "./Game"
import { gamesData } from "@/utils/Test"

interface GuessesProps {
  pollId: string
  code: string
}

export function Guesses({ pollId, code }: GuessesProps) {
  const [isLoading, setIsLoading] = useState(false) // TODO - INICIAR COM TRUE
  const [games, setGames] = useState<GetAllGamesResponse[]>(gamesData)
  const [firstTeamPoints, setFirstTeamPoints] = useState("")
  const [secondTeamPoints, setSecondTeamPoints] = useState("")
  const toast = useToast()

  async function handleGetAllGames() {
    // TODO
  }

  async function handleGuessConfirm(pollId: string) {
    // TODO
  }

  useEffect(() => {
    handleGetAllGames()
  }, [])

  if (isLoading) {
    return <Loading tamanho="w-20 h-20" classname="text-nlwYellow-500" />
  }

  return (
    <>
      {games.map((game, idx) => (
        <Game
          key={idx}
          data={game}
          onGuessConfirm={() => handleGuessConfirm(pollId)}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
        />
      ))}
    </>
  )
}
