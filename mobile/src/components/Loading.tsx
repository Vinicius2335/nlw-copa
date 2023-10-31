import { Center, Spinner } from "@gluestack-ui/themed"

export default function Loading() {
  return (
    <Center flex={1} bg="$gray900">
      <Spinner color="$yellow500" />
    </Center>
  )
}
