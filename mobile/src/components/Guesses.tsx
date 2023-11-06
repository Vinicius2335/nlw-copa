import { useEffect, useState } from "react"
import { FlatList, Toast, useToast } from "@gluestack-ui/themed"

// import { api } from '../services/api';

import { EmptyMyPollList } from "./EmptyMyPollList"
import Loading from "./generic/Loading"
import { Game, GameProps } from "./Game"
import { ToastBody } from "./generic/ToastBody"

interface Props {
  poolId: string
  code: string
}

export function Guesses({ poolId, code }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<GameProps[]>([])
  const [firstTeamPoints, setFirstTeamPoints] = useState("")
  const [secondTeamPoints, setSecondTeamPoints] = useState("")

  const toast = useToast()

  async function fetchGames() {
    try {
      setIsLoading(true)

      // const response = await api.get(`/pools/${poolId}/games`);
      // setGames(response.data.games);
    } catch (error) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="solid">
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
              <Toast nativeID={"toast-" + id} action="attention" variant="solid">
                <ToastBody title="Erro!" description="Informe o placar para palpitar" />
              </Toast>
            )
          }
        })
      }

      // await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
      //   firstTeamPoints: Number(firstTeamPoints),
      //   secondTeamPoints: Number(secondTeamPoints),
      // });

      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="success" variant="solid">
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
            <Toast nativeID={"toast-" + id} action="error" variant="solid">
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
      keyExtractor={(item: GameProps) => item.id}
      renderItem={({ item }: any) => (
        <Game
          data={item as GameProps}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handleGuessConfirm(item.id)}
        />
      )}
      contentContainerStyle={{ paddingBottom: 10 }}
      ListEmptyComponent={() => <EmptyMyPollList code={code} />}
    />
  )
}
