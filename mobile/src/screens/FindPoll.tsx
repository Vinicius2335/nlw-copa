import { Heading, VStack, styled } from "@gluestack-ui/themed"
import { Button } from "../components/generic/Button"
import { Input } from "../components/generic/Input"
import { Header } from "../components/layout/Header"

const CustomInput = styled(Input, {})

export function FindPoll() {
  return (
    <VStack flex={1} bgColor="$gray900">
      <Header onShare={() => {}} title="Buscar por código" />

      <VStack mt="$8" mx="$5" alignItems="center">
        <Heading fontFamily="$heading" color="$white" fontSize={"$xl"} mb={"$8"} textAlign="center">
          Encontre um bolão através de {`\n`}
          seu código unico
        </Heading>

        <CustomInput mt={"$2"} mb={"$4"} placeholder="Qual código do bolão?" />

        <Button title="Buscar bolão" />
      </VStack>
    </VStack>
  )
}
