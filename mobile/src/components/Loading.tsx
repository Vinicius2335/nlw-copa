import { Center, Spinner, StyledProvider } from "@gluestack-ui/themed"
import { config } from "../styles/gluestack-ui.config"

export default function Loading() {
  return (
    <Center flex={1} bg="$gray900">
      <Spinner color="$yellow500" />
    </Center>
  )
}
