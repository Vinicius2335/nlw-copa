import { HStack, Text, Pressable } from "@gluestack-ui/themed"
import { Share } from "react-native"

interface Props {
  code: string
}

export function EmptyMyPollList({ code }: Props) {
  async function handleCodeShare() {
    await Share.share({
      message: code
    })
  }

  return (
    <HStack flexWrap="wrap" justifyContent="center" p={"$4"}>
      <Text color="$gray200" fontSize="$sm">
        Neste bolão só você está participando, que tal
      </Text>

      <Pressable onPress={handleCodeShare}>
        <Text textDecorationLine="underline" color="$yellow500">
          compartilhar o código
        </Text>
      </Pressable>

      <Text color="$gray200" fontSize="$sm" mx={"$1"}>
        do bolão com alguém?
      </Text>

      <Text color="$gray200" mr={"$1"}>
        Use o código
      </Text>

      <Text
        color="$gray200"
        fontWeight="$bold"
        fontSize="$sm"
        textAlign="center"
        fontFamily="$heading"
      >
        {code}
      </Text>
    </HStack>
  )
}
