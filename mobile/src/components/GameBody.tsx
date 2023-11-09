import { Text, HStack, Icon } from "@gluestack-ui/themed"
import { Team } from "./Team"
import { X } from "phosphor-react-native"
import { getName } from "country-list"
import { ResponseGetAllGames } from "../@types/entities"

interface GameBodyProps {
  when: string
  data: ResponseGetAllGames
  firstTeamPoints?: string
  setFirstTeamPoints?: (value: string) => void
  secondTeamPoints?: string
  setSecondTeamPoints?: (value: string) => void
}

export function GameBody({ when, firstTeamPoints, secondTeamPoints, data, setFirstTeamPoints, setSecondTeamPoints }: GameBodyProps) {
  return (
    <>
      <Text color="$gray200" fontFamily="$heading" fontSize="$sm">
        {getName(data.game.firstTeamCountryCode)} vs. {getName(data.game.secondTeamCountryCode)}
      </Text>

      <Text color="$gray200" fontSize="$xs">
        {when}
      </Text>

      <HStack mt={"$4"} w="$full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.game.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
          value={firstTeamPoints}
        />

        <Icon as={X} color="$gray300" size="md" />

        <Team
          code={data.game.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
          value={secondTeamPoints}
        />
      </HStack>
    </>
  )
}
