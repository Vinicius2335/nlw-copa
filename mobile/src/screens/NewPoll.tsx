import { Heading, VStack, styled, Text, useToast, Toast } from "@gluestack-ui/themed"
import { Header } from "../components/layout/Header"
import Logo from "../assets/logo.svg"
import { Input } from "../components/generic/Input"
import { Button } from "../components/generic/Button"
import { useState } from "react"
import { ToastBody } from "../components/generic/ToastBody"
import { api } from "../services/api"

const MyInput = styled(Input, {})

export function NewPoll() {
  const [pollName, setPollName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  async function handlePollCreate() {
    // espaço é considerado um caracter, para o usuário não burlar a regra de não criar um bolão vazio, colocamos o trim ali para remover os espaços vazios
    if (!pollName.trim()) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast
              mt={"$10"}
              nativeID={"toast-" + id}
              action="error"
              variant="solid"
              bgColor="$red500"
            >
              <ToastBody title="Novo Bolão!" description="Informe um nome para o seu bolão." />
            </Toast>
          )
        }
      })
    }

    try {
      setIsLoading(true);
      await api.post('/polls', {title: pollName})

      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast
              mt={"$10"}
              nativeID={"toast-" + id}
              action="success"
              variant="solid"
              bgColor="$green500"
            >
              <ToastBody title="Novo Bolão!" description="Bolão criado com sucesso." />
            </Toast>
          )
        }
      })

      setPollName("")

    } catch (error) {
      console.error(error)

      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast
              mt={"$10"}
              nativeID={"toast-" + id}
              action="error"
              variant="solid"
              bgColor="$red500"
            >
              <ToastBody
                title="Novo Bolão!"
                description="Não foi possivel criar o bolão."
              />
            </Toast>
          )
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <VStack flex={1} bgColor="$gray900">
      <Header onShare={() => {}} title="Criar novo bolão" />

      <VStack mt="$8" mx="$5" alignItems="center">
        <Logo />

        <Heading fontFamily="$heading" color="$white" fontSize={"$xl"} my={"$8"} textAlign="center">
          Crie seu próprio bolão da copa {`\n`}e compartilhe entre amigos!
        </Heading>

        <MyInput
          mt={"$2"}
          mb={"$4"}
          placeholder="Qual nome do seu bolão?"
          value={pollName}
          onChangeText={setPollName}
        />

        <Button title="Criar meu bolão" onPress={handlePollCreate} />

        <Text color="$gray200" fontSize={"$sm"} textAlign="center" px="$10" mt={"$4"}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras
          pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}
