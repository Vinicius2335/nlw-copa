import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

import { Participant, Poll } from "../@types/entities"
import { Participants } from "./Participants"

export interface PollCardProps {
  poll: Poll
  countParticipants: number
  participants: Participant[]
}

interface Props extends TouchableOpacityProps {
  data: PollCardProps
}

export function PollCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        w="$full"
        h={"$20"}
        bgColor="$gray800"
        borderBottomWidth={"$4"}
        borderBottomColor="$yellow500"
        justifyContent="space-between"
        alignItems="center"
        rounded="$sm"
        mb={"$3"}
        p={"$4"}
      >
        <VStack>
          <Heading color="$white" fontSize="$md" fontFamily="$heading">
            {data.poll.title}
          </Heading>

          <Text color="$gray200" fontSize="$xs">
            Criado por {data.poll.ownerName}
          </Text>
        </VStack>

        <Participants count={data.countParticipants} participants={data.participants} />
      </HStack>
    </TouchableOpacity>
  )
}
