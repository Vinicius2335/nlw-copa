import { HStack, Toast, VStack, useToast } from "@gluestack-ui/themed"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { PollCardProps } from "../components/PollCard"
import { PollHeader } from "../components/PollHeader"
import { Loading } from "../components/generic/Loading"
import { Option } from "../components/generic/Option"
import { ToastBody } from "../components/generic/ToastBody"
import { Header } from "../components/layout/Header"
import { api } from "../services/api"
import { EmptyMyPollList } from "../components/EmptyMyPollList"

interface RouteParams {
  id: string
}

type OptionsType = "Seus Palpites" | "Ranking do Grupo"

export function Details() {
  const route = useRoute()
  const { id } = route.params as RouteParams
  const toast = useToast()
  const [optionSelected, setOptionSelected] = useState<OptionsType>("Seus Palpites")
  const [isLoading, setIsLoading] = useState(true)
  const [pollDetails, setPollDetails] = useState<PollCardProps>({} as PollCardProps)

  async function handlePollDetails() {
    try {
      setIsLoading(true)
      const response = await api.get<PollCardProps>(`/polls/${id}`).then(resp => resp.data)

      console.log(response)
      setPollDetails(response)
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
                title="Encontrar Bolão!"
                description="Não foi possivel carregar os detalhes do bolão."
              />
            </Toast>
          )
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handlePollDetails()
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  return (
    <VStack flex={1} bgColor="$gray900">
      <Header title={pollDetails.poll.title} onShare={() => {}} showBackButton showShareButton />

      {pollDetails.countParticipants > 1 ? (
        <VStack px={"$5"} flex={1} bgColor="$gray900">
          <PollHeader data={pollDetails} />

          <HStack bgColor="$gray800" p={"$1"} rounded={"$sm"} mb={"$5"}>
            <Option
              title="Seus Palpites"
              isSelected={optionSelected === "Seus Palpites"}
              onPress={() => setOptionSelected("Seus Palpites")}
            />
            <Option
              title="Ranking do Grupo"
              isSelected={optionSelected === "Ranking do Grupo"}
              onPress={() => setOptionSelected("Ranking do Grupo")}
            />
          </HStack>
        </VStack>
      ) : (
        <EmptyMyPollList code={pollDetails.poll.code} />
      )}
    </VStack>
  )
}
