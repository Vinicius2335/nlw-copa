// É aqui que usaremos o app.routes.tsx
// para compartilhar as rotas com a aplicação

import { Box } from "@gluestack-ui/themed"
import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../hooks/useAuthContext"
import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
  const { user } = useAuth()

  return (
    <Box flex={1} bgColor="$gray900">
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
}
