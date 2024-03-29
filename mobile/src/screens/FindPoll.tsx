import { Heading, Toast, VStack, styled, useToast } from "@gluestack-ui/themed"
import { Button } from "../components/generic/Button"
import { Input } from "../components/generic/Input"
import { Header } from "../components/layout/Header"
import { useState } from "react"
import { api } from "../services/api"
import { ToastBody } from "../components/generic/ToastBody"
import { useNavigation } from "@react-navigation/native"
import { AxiosError } from "axios"
import { ExceptionResponse } from "../@types/entities"

const CustomInput = styled(Input, {})

export function FindPoll() {
  const [code, setCode] = useState("")
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const { navigate } = useNavigation()

  async function handleJoinPoll() {
    try {
      setIsLoading(true)

      if (!code.trim()) {
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
                  title="Encontrar Bolão!"
                  description="Informe o código."
                />
              </Toast>
            )
          }
        })
      }

     await api.post("/polls/join", { code })
     
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
            <ToastBody
              title="Encontrar Bolão!"
              description="Você entrou no bolão com sucesso."
            />
          </Toast>
        )
      }
    })

     navigate('polls')

    } catch (ex) {
      const error = ex as AxiosError<ExceptionResponse>;
      console.log(error.response.data)
      setIsLoading(false)

      if (error.response.data.title === 'Poll not found...'){
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
                  title="Encontrar Bolão!"
                  description="Não foi possivel encontrar o bolão."
                />
              </Toast>
            )
          }
        })
      }

      if (error.response.data.title === 'You already joined this poll'){
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
                  title="Entrar no Bolão!"
                  description="Você já está nesse bolão"
                />
              </Toast>
            )
          }
        })
      }
      
    }
  }

  return (
    <VStack flex={1} bgColor="$gray900">
      <Header onShare={() => {}} title="Buscar por código" showBackButton />

      <VStack mt="$8" mx="$5" alignItems="center">
        <Heading fontFamily="$heading" color="$white" fontSize={"$xl"} mb={"$8"} textAlign="center">
          Encontre um bolão através de {`\n`}
          seu código único
        </Heading>

        <CustomInput
          mt={"$2"}
          mb={"$4"}
          placeholder="Qual código do bolão?"
          value={code}
          onChangeText={setCode}
          isCapitalize={true}
        />

        <Button title="Buscar bolão" isLoading={isLoading} onPress={handleJoinPoll} />
      </VStack>
    </VStack>
  )
}
