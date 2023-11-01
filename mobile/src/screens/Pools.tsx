import { VStack, Icon, useToken } from "@gluestack-ui/themed"
import { Button } from "../components/generic/Button"
import { Header } from "../components/layout/Header"
import { MagnifyingGlass } from "phosphor-react-native"

export function Pools() {
  const blackThemeColor = useToken("colors", "black")
  const mdThemeSize = useToken("size", "md")

  return (
    <VStack flex={1} bgColor="$gray800">
      <VStack
        mt={"$6"}
        mx={"$5"}
        borderBottomWidth={"$1"}
        borderBottomColor="$gray600"
        pb={"$4"}
        mb={"$4"}
      >
        <Header onShare={() => {}} title="Meus Bolões" />
        <Button
          title="Buscar bolão por código"
          icon={MagnifyingGlass}
        />

        {/* TODO - Lista de bolões depende do backend */}
      </VStack>
    </VStack>
  )
}
