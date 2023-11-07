import { VStack } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"
import { MagnifyingGlass } from "phosphor-react-native"
import { Button } from "../components/generic/Button"
import { Header } from "../components/layout/Header"

export function Polls() {
  const { navigate } = useNavigation()

  return (
    <VStack flex={1} bgColor="$gray900">
      <Header onShare={() => {}} title="Meus Bolões" />

      <VStack
        mt={"$6"}
        mx={"$5"}
        borderBottomWidth={"$1"}
        borderBottomColor="$gray600"
        pb={"$4"}
        mb={"$4"}
      >
        <Button title="Buscar bolão por código" icon={MagnifyingGlass} onPress={() => navigate('find')}/>

        {/* TODO - Lista de bolões depende do backend */}
      </VStack>
    </VStack>
  )
}
