import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed"
//import { config } from "@gluestack-ui/config" - default config
import { config } from "./src/styles/gluestack-ui.config"

// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold
// } from "@expo-google-fonts/roboto"
// import Loading from "./src/components/generic/Loading"
import { AuthContextProvicer } from "./src/contexts/AuthContext"
import { Routes } from "./src/routes"

export default function App() {
  //  let [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <AuthContextProvicer>
        <StatusBar barStyle="light-content" backgroundColor={"$transparent"} translucent />
        <Routes />
        {/* <Signin /> */}
        {/* <NewPoll /> */}
        {/* <FindPoll /> */}
        {/* <Polls /> */}
        {/* <Login /> */}
      </AuthContextProvicer>
    </GluestackUIProvider>
  )
}
