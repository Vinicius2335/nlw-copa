import { useToken } from "@gluestack-style/react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Platform } from "react-native"
import { Login } from "../screens/Login"
import { Signin } from "../screens/Signin"

const { Navigator, Screen } = createBottomTabNavigator()

export function AuthRoutes() {
  const yellow500 = useToken("colors", "yellow500")
  const gray300 = useToken("colors", "gray300")
  const gray900 = useToken("colors", "gray900")

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          backgroundColor: gray900
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "android" ? -10 : 0
        }
      }}
    >
      
      <Screen name="home" component={Signin} options={{ tabBarButton: () => null }} />
      <Screen name="login" component={Login} options={{ tabBarButton: () => null }} />

    </Navigator>
  )
}
