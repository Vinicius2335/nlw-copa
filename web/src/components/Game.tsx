"use client"

import { GetAllGamesResponse } from "@/model/responses"
import dayjs from "dayjs"
import ptBR from "dayjs/locale/pt-br"
import { GameBody } from "./GameBody"
import { Button } from "./ui/button"
import { Check } from "lucide-react"

interface GameProps {
  data: GetAllGamesResponse
  onGuessConfirm: () => void
  setFirstTeamPoints: (value: string) => void
  setSecondTeamPoints: (value: string) => void
}

export function Game({ data, onGuessConfirm, setFirstTeamPoints, setSecondTeamPoints }: GameProps) {
  const when = dayjs(data.game.date).locale(ptBR).format("DD [de] MMMM [de] YYYY [às] HH:00[h]")

  return (
    <div className="flex flex-col items-center w-full bg-nlwGray-800 rounded-sm border-b-2 border-b-nlwYellow-500 mb-3 p-4">
      {!data.guess ? (
        <GameBody
          data={data}
          when={when}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
        />
      ) : (
        <GameBody
          data={data}
          firstTeamPoints={String(data.guess.firstTeamPoints)}
          secondTeamPoints={String(data.guess.secondTeamPoints)}
          when={when}
        />
      )}

      {!data.guess && (
        <Button
          variant={'success'}
          className="flex items-center w-full mt-4 "
          size={"sm"}
          onClick={onGuessConfirm}
        >
          <span className="text-white text-xs font-bold mr-3">CONFIRMAR PALPITE</span>

          <Check className="text-white" size={16} />
        </Button>
      )}
    </div>
  )
}
