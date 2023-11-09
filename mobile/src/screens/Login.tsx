import { Center, styled } from "@gluestack-ui/themed"
import { Lock, SoccerBall, User } from "phosphor-react-native"
import React, { useState } from "react"
import Logo from "../assets/logo.svg"
import { Button } from "../components/generic/Button"
import { InputForm } from "../components/generic/InputForm"
import { useAuth } from "../hooks/useAuthContext"

const CustomInput = styled(InputForm, {})

export function Login() {
  const { signIn, isUserLoading } = useAuth()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleTeste() {
    signIn(email, senha)
  }

  return (
    <Center flex={1} bgColor="$gray900" p={"$7"}>
      <Logo width={212} height={40} style={{ marginBottom: 48 }} />

      <CustomInput
        mt={"$2"}
        mb={"$4"}
        placeholder="Email"
        icon={User}
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput
        mt={"$2"}
        mb={"$6"}
        placeholder="Senha"
        icon={Lock}
        value={senha}
        onChangeText={setSenha}
        type="PASSWORD"
      />

      <Button title="Entrar" icon={SoccerBall} onPress={handleTeste} isLoading={isUserLoading} />
    </Center>
  )
}
