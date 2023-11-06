import { ReactNode, createContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session" 
import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// BUG - ULTIMA TENTATIVA DE LOGAR COM O GOOGLE https://www.youtube.com/watch?v=vojHmGUGUGc

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string,
  avatarUrl: string
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean,
  signIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

// Armazena o conteúdo do nosso contexto
export const AuthContext = createContext({} as AuthContextDataProps);

// Permite que possamos compartilhar esse contexto com toda a nossa aplicaçao
export function AuthContextProvicer({ children }: AuthProviderProps) {
  const [isUserLoading, setIsUserLoading] = useState(false)
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '99951594318-lhegiska59le22igg2pqnlstkib7k5bq.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri(),
    scopes: ['profile', 'email']
  })

  console.log(AuthSession.makeRedirectUri())

  async function signIn(){
    try {
      setIsUserLoading(true)
      await promptAsync();

    } catch(error){
      console.error(error);
      throw error;

    } finally {
      setIsUserLoading(false)
    }
  }


  // TODO - PROX AULA 
  async function signWithGoogle(accessToken: string){
    console.log('token de authenticação ==> ', accessToken)
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken){
      signWithGoogle(response.authentication.accessToken)
    }
  }, [response])


  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

// depois criamos um hook para ficar mais facil compartilhar o contexto
