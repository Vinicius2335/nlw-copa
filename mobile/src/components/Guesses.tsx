// @ts-nocheck

import { useEffect, useState } from "react"
import { FlatList, Toast, useToast } from "@gluestack-ui/themed"

import { EmptyMyPollList } from "./EmptyMyPollList"
import { Loading } from "./generic/Loading"
import { Game } from "./Game"
import { ToastBody } from "./generic/ToastBody"
import { api } from "../services/api"
import { ResponseGetAllGames } from "../@types/entities"

interface Props {
  pollId: string
  code: string
}

export function Guesses({ pollId, code }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<ResponseGetAllGames[]>([])
  const [firstTeamPoints, setFirstTeamPoints] = useState("")
  const [secondTeamPoints, setSecondTeamPoints] = useState("")

  const toast = useToast()

  async function fetchGames() {
    try {
      setIsLoading(true)

      const response = await api
        .get<ResponseGetAllGames[]>(`/polls/${pollId}/games`)
        .then(resp => resp.data)
      setGames(response)
    } catch (error) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast
              mt={"$10"}
              nativeID={"toast-" + id}
              action="error"
              bgColor="$red500"
              variant="solid"
            >
              <ToastBody title="Erro!" description="Não foi possível listar os jogos" />
            </Toast>
          )
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGuessConfirm(gameId: string) {
    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        return toast.show({
          placement: "top",
          render: ({ id }) => {
            return (
              <Toast
                mt={"$10"}
                nativeID={"toast-" + id}
                action="attention"
                variant="solid"
                bgColor="$red500"
              >
                <ToastBody title="Erro!" description="Informe o placar para palpitar" />
              </Toast>
            )
          }
        })
      }

      await api.post(`/polls/${pollId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints)
      })

      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast
              mt={"$10"}
              nativeID={"toast-" + id}
              action="success"
              variant="solid"
              bgColor="$green500"
            >
              <ToastBody title="Sucesso!" description="Palpite realizado com sucesso!" />
            </Toast>
          )
        }
      })

      fetchGames()
    } catch (error) {
      console.log(error)

      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast
              mt={"$10"}
              nativeID={"toast-" + id}
              bgColor="$red500"
              action="error"
              variant="solid"
            >
              <ToastBody title="Erro!" description="Não foi possível enviar o palpite" />
            </Toast>
          )
        }
      })
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <FlatList
      data={games}
      keyExtractor={(item: ResponseGetAllGames) => item.game.id}
      renderItem={({ item }: { item: ResponseGetAllGames }) => (
        <Game
          data={item as ResponseGetAllGames}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handleGuessConfirm(item.game.id)}
        />
      )}
      contentContainerStyle={{ paddingBottom: 10 }}
      ListEmptyComponent={() => <EmptyMyPollList code={code} />}
    />
  )
}
