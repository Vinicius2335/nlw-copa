import { Center, StyledProvider, Text } from "@gluestack-ui/themed"
import { config } from "../styles/gluestack-ui.config"

export default function Signin() {
  return (
    <Center flex={1} bgColor="$gray900">
      <Text color="$white" fontSize={24}>
        Signing!
      </Text>
    </Center>
  )
}
