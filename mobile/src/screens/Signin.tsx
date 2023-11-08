import { Center, Text } from "@gluestack-ui/themed"
import { SoccerBall } from "phosphor-react-native"
import Logo from "../assets/logo.svg"
import { Button } from "../components/generic/Button"
import { useNavigation } from "@react-navigation/native"

export function Signin() {
  const { navigate } = useNavigation()

  return (
    <Center flex={1} bgColor="$gray900" p={'$7'}>
      <Logo width={212} height={40} style={{marginBottom: 48}} />

      <Button title="Logar" icon={SoccerBall} onPress={() => {navigate('login')}} />

      <Text color="$white" textAlign="center" mt={'$4'}>
        Crie seu próprio bolão da copa e compartilhe entre amigos!
      </Text>
    </Center>
  )
}
