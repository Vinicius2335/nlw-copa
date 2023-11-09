import { Button, HStack, Icon, Text, VStack } from "@gluestack-ui/themed"
import { Check, X } from "phosphor-react-native"
import { getName } from "country-list"
import dayjs from "dayjs"
import ptBR from "dayjs/locale/pt-br"

import { ResponseGetAllGames } from "../@types/entities"
import { Team } from "./Team"
import { GameBody } from "./GameBody"

interface Props {
  data: ResponseGetAllGames
  onGuessConfirm: () => void
  setFirstTeamPoints: (value: string) => void
  setSecondTeamPoints: (value: string) => void
}

export function Game({ data, setFirstTeamPoints, setSecondTeamPoints, onGuessConfirm }: Props) {
  const when = dayjs(data.game.date).locale(ptBR).format("DD [de] MMMM [de] YYYY [às] HH:00[h]")

  return (
    <VStack
      w="$full"
      bgColor="$gray800"
      rounded="$sm"
      alignItems="center"
      borderBottomWidth={"$2"}
      borderBottomColor="$yellow500"
      mb={"$3"}
      p={"$4"}
    >
      {/* Se o game tiver um palpite preenche o placar com o score escolhido */}
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

      {/* Se o usuário já realizou o palpite não mostra o botão de confirmar */}
      {!data.guess && (
        <Button size="xs" w="$full" bgColor="$green500" mt={"$4"} onPress={onGuessConfirm}>
          <HStack alignItems="center">
            <Text color="$white" fontSize="$xs" fontFamily="$heading" mr={"$3"}>
              CONFIRMAR PALPITE
            </Text>

            <Icon as={Check} color="$white" size="md" />
          </HStack>
        </Button>
      )}
    </VStack>
  )
}

/*
 <Text color="$gray200" fontFamily="$heading" fontSize="$sm">
        {getName(data.game.firstTeamCountryCode)} vs. {getName(data.game.secondTeamCountryCode)}
      </Text>

      <Text color="$gray200" fontSize="$xs">
        {when}
      </Text>

      <HStack mt={'$4'} w="$full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.game.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
        />

        <Icon as={X} color='$gray300' size='md'/>

        <Team
          code={data.game.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
        />
      </HStack>
*/
