"use client"

import logoImg from "@/assets/logo.svg"
import { Header } from "@/components/generic/Header"
import { Loading } from "@/components/generic/Loading"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/hooks/useAuthContext"
import { Rocket } from "lucide-react"
import Image from "next/image"
import { FormEvent, useRef } from "react"

export default function Login() {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const { toast } =  useToast()
  const { signIn, isUserLoading } = useAuth()

  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault()

    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value

    if (!email?.trim() || !password?.trim()){
      toast({
        variant: 'destructive',
        title: "❌ Login",
        description: "Campos de Email/Senha são obrigatorios.",
        duration: 2000
      })
      return;
    }

    signIn(email, password)
  }

  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14">
        <Image className="mb-4" src={logoImg} alt="Nlw Logo" />
        <Header title="Login" />

        <form onSubmit={handleOnSubmit} className="mt-10 flex flex-col w-[500px] gap-4">
          <input
            className="custom-input"
            type="email"
            required
            placeholder="Email"
            ref={emailInputRef}
          />

          <input
            className="custom-input"
            type="password"
            required
            placeholder="Senha"
            ref={passwordInputRef}
          />

          <button className="custom-button flex items-center justify-center" type="submit">
            {isUserLoading ? (
              <Loading />
            ) : (
              <>
                <Rocket className="mr-4" />
                Logar
              </>
            )}
          </button>
        </form>
      </main>
    </div>
  )
}
