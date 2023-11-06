import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed"
//import { config } from "@gluestack-ui/config" - default config
import { config } from "./src/styles/gluestack-ui.config"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
// import Loading from "./src/components/generic/Loading"
import Signin from "./src/screens/Signin"
import { AuthContextProvicer } from "./src/contexts/AuthContext"
import { NewPoll } from "./src/screens/NewPoll"
import { FindPoll } from "./src/screens/FindPoll"
import { Polls } from "./src/screens/Polls"

export default function App() {
  //  let [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <AuthContextProvicer>
        <StatusBar barStyle="light-content" backgroundColor={"$transparent"} translucent />
        {/* {fontsLoaded ? <Loading /> : <Signin />} */}
        {/* <Signin /> */}
        {/* <NewPoll /> */}
        {/* <FindPoll /> */}
        <Polls />
      </AuthContextProvicer>
    </GluestackUIProvider>
  )
}
