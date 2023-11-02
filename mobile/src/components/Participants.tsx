import { Avatar, AvatarImage, Center, HStack, Text } from "@gluestack-ui/themed"

export interface ParticipantProps {
  id: string
  user: {
    name: string
    avatarUrl: string
  }
}

interface Props {
  participants: ParticipantProps[]
  count: number
}

export function Participants({ participants, count }: Props) {
  return (
    <HStack>
      {participants &&
        participants.map(participant => (
          <Avatar
            key={participant.id}
            w={"$8"}
            h={"$8"}
            rounded="$full"
            borderWidth={"$2"}
            marginRight={"-$3"}
            borderColor="$gray800"
          >
            <AvatarImage source={{ uri: participant.user.avatarUrl }} />
            {participant.user?.name?.at(0).toUpperCase()}
          </Avatar>
        ))}

      <Center
        w={"$8"}
        h={"$8"}
        bgColor="$gray600"
        rounded="$full"
        borderWidth={"$1"}
        borderColor="$gray800"
      >
        <Text color="$gray200" fontSize="$xs" fontFamily="$body">
          {count ? `+${count}` : 0}
        </Text>
      </Center>
    </HStack>
  )
}
