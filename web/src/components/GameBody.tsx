import { GetAllGamesResponse } from "@/model/responses"
import { getName } from "country-list"
import { X } from "lucide-react"
import { Team } from "./Team"

interface GameBodyProps {
  when: string
  data: GetAllGamesResponse
  firstTeamPoints?: string
  setFirstTeamPoints?: (value: string) => void
  secondTeamPoints?: string
  setSecondTeamPoints?: (value: string) => void
}

export function GameBody({
  when,
  data,
  firstTeamPoints,
  setFirstTeamPoints,
  secondTeamPoints,
  setSecondTeamPoints
}: GameBodyProps) {
  return (
    <>
      <p className="text-nlwGray-200 font-bold text-sm">
        {getName(data.game.firstTeamCountryCode)} vs. {getName(data.game.secondTeamCountryCode)}
      </p>

      <p className="text-nlwGray-200 text-xs">{when}</p>

      <div className="flex items-center justify-between mt-4 w-full ">
        <Team
          code={data.game.firstTeamCountryCode}
          position="right"
          onChange={setFirstTeamPoints}
          value={firstTeamPoints}
        />

        <X className="text-nlwGray-300" />

        <Team
          code={data.game.secondTeamCountryCode}
          position="left"
          onChange={setSecondTeamPoints}
          value={secondTeamPoints}
        />
      </div>
    </>
  )
}
