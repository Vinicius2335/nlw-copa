import { useToken } from "@gluestack-style/react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { PlusCircle, SoccerBall } from "phosphor-react-native"
import { Platform } from "react-native"
import { FindPoll } from "../screens/FindPoll"
import { Login } from "../screens/Login"
import { NewPoll } from "../screens/NewPoll"
import { Polls } from "../screens/Polls"
import { Signin } from "../screens/Signin"
import { Details } from "../screens/Details"

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const yellow500 = useToken("colors", "yellow500")
  const gray300 = useToken("colors", "gray300")
  const gray800 = useToken("colors", "gray800")
  const size6 = useToken("space", "6")

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: yellow500,
        tabBarInactiveTintColor: gray300,
        tabBarStyle: {
          position: "absolute",
          height: 77,
          borderTopWidth: 0,
          backgroundColor: gray800
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "android" ? -10 : 0
        }
      }}
    >
      <Screen
        name="new"
        component={NewPoll}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size6} />, // muda a cor do icone junto com o texto
          tabBarLabel: "Novo Bolão"
        }}
      />

      <Screen
        name="polls"
        component={Polls}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={size6} />,
          tabBarLabel: "Meus Bolões"
        }}
      />

      <Screen
        name="find"
        component={FindPoll}
        options={{ tabBarButton: () => null }} // hack para a rota não aparecer na tabBar
      />

      <Screen
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}

/*
screenOptions -> define properiedades para todas as rotas

headerShown -> cabeçalho padrao do navigate
tabBarActiveTintColor -> cor para a rota que está ativa
tabBarInactiveTintColor -> cor para as rotas inativas
tabBarStyle -> estilização da barra de navegação
tabBarItemStyle -> espaçamento entre os icones da barra
tabBarLabelPosition: 'beside-icon' -> nome da rota fica no lado do icone

options -> define opçoes especificas para a rota
tabBarIcon -> icone da rota na barra de navegaçao
tabBarLabel -> podemos definir a legenda com o nome da rota
*/
