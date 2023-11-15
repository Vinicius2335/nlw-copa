"use client"

import { useToast } from "@/components/ui/use-toast";
import { api } from "@/libs/axios";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState } from "react";

interface LoginResponseProps {
	token: string;
	user: UserProps;
}

export interface UserProps {
  name: string,
  avatarUrl: string
}

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean,
  accessToken: string
  signIn: (email: string, password: string) => Promise<void>
}


// Armazena o conteúdo do nosso contexto
export const AuthContext = createContext({} as AuthContextDataProps);

// Permite que possamos compartilhar esse contexto com toda a nossa aplicaçao
export function AuthContextProvicer({ children }: AuthProviderProps) {
  const [isUserLoading, setIsUserLoading] = useState(false)
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [token, setToken] = useState('')
  const route = useRouter()
  const { toast } =  useToast()

  async function signIn(email: string, password: string){
    try {
      setIsUserLoading(true)
      const response = await api.post<LoginResponseProps>("/auth/login", {
        email,
        password
      }).then(resp => resp.data)

      // adicionando em todas as requisiçoes um cabeçalho
      api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`

      setUser(response.user)
      setToken(response.token)

      route.push("/new-poll")

    } catch(error){
      console.error(error);
      toast({
        variant: 'destructive',
        title: "❌ Login",
        description: "Credenciais Incorretas.",
        duration: 2000
      })

    } finally {
      setIsUserLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
      accessToken: token
    }}>
      { children }
    </AuthContext.Provider>
  )
}

// depois criamos um hook para ficar mais facil compartilhar o contexto
