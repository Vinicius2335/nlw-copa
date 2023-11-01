import { Center, Text } from "@gluestack-ui/themed"
import Logo from "../assets/logo.svg"
import { Button } from "../components/generic/Button"
import { GoogleLogo } from "phosphor-react-native"
import { useAuth } from "../hooks/useAuthContext"

export default function Signin() {
  const { signIn, user } = useAuth();

  return (
    <Center flex={1} bgColor="$gray900" p={'$7'}>
      <Logo width={212} height={40} style={{marginBottom: 48}} />

      <Button title="entrar com google" icon={GoogleLogo} onPress={signIn} />

      <Text color="$white" textAlign="center" mt={'$4'}>
        Não utilizamos nenhuma informação além {`\n`}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}
