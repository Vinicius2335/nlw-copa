import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed"
//import { config } from "@gluestack-ui/config" - default config
import { config } from "./src/styles/gluestack-ui.config"

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from "@expo-google-fonts/roboto"
import Loading from "./src/components/Loading"
import Signin from "./src/screens/Signin"

export default function App() {
  const [hasLoadedFonts] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle="light-content" backgroundColor={"transparent"} translucent /> // BUG
      {/* {hasLoadedFonts ? <Loading /> : <Signin />} */}
      <Signin />
    </GluestackUIProvider>
  )
}
