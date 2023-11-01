import { Heading, VStack, styled, Text } from "@gluestack-ui/themed"
import { Header } from "../components/layout/Header"
import Logo from "../assets/logo.svg"
import { Input } from "../components/generic/Input"
import { Button } from "../components/generic/Button"

const MyInput = styled(Input, {})

export function NewPool() {
  return (
    <VStack flex={1} bgColor="$gray900">
      <Header onShare={() => {}} title="Criar novo bolão" />

      <VStack mt="$8" mx="$5" alignItems="center">
        <Logo />

        <Heading
          fontFamily="$heading"
          color="$white"
          fontSize={"$xl"}
          my={"$8"}
          textAlign="center"
        >
          Crie seu próprio bolão da copa {`\n`}
          e compartilhe entre amigos!
        </Heading>

        <MyInput mt={"$2"} mb={"$4"} placeholder="Qual nome do seu bolão?" />

        <Button title="Criar meu bolão" />

        <Text color="$gray200" fontSize={'$sm'} textAlign="center" px='$10' mt={'$4'}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras
          pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}
