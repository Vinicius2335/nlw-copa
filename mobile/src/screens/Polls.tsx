// @ts-nocheck
import { FlatList, Toast, VStack, useToast } from "@gluestack-ui/themed"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { MagnifyingGlass } from "phosphor-react-native"
import { useCallback, useState } from "react"
import { EmptyPollList } from "../components/EmptyPollList"
import { PollCard, PollCardProps } from "../components/PollCard"
import { Button } from "../components/generic/Button"
import { Loading } from "../components/generic/Loading"
import { ToastBody } from "../components/generic/ToastBody"
import { Header } from "../components/layout/Header"
import { api } from "../services/api"

export function Polls() {
  const { navigate } = useNavigation()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [polls, setPolls] = useState<PollCardProps[]>([])

  async function findAllPolls() {
    try {
      setIsLoading(true)
      const response = await api.get<PollCardProps[]>("/polls").then(resp => resp.data)
      
      setPolls(response)
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
                title="Encontrar Bolões!"
                description="Não foi possivel carregar os bolões."
              />
            </Toast>
          )
        }
      })
    } finally {
      setIsLoading(false)
    }
  }

  // useFoucsEffect executa a função sempre que a interface receber o foco,
  // ou seja, quando o usuário entrar na interface
  // useCallBack garante que essa função não seja executada multiplas vezes
  useFocusEffect(
    useCallback(() => {
      findAllPolls()
    }, [])
  )

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
        <Button
          title="Buscar bolão por código"
          icon={MagnifyingGlass}
          onPress={() => navigate("find")}
        />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          mt={"$4"}
          px={"$5"}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10
          }}
          ListEmptyComponent={() => <EmptyPollList />}
          data={polls}
          keyExtractor={(item: PollCardProps) => item.poll.id}
          renderItem={({ item }: {item: PollCardProps}) => (
            <PollCard
              data={item as PollCardProps}
              onPress={() => navigate("details", { id: item.poll.id })}
            />
          )}
        />
      )}
    </VStack>
  )
}
