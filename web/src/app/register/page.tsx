"use client"

import { Loading } from "@/components/generic/Loading"
import { Rocket } from "lucide-react"
import Image from "next/image"
import { FormEvent, useRef, useState } from "react"
import logoImg from "@/assets/logo.svg"
import { Header } from "@/components/generic/Header"
import { useToast } from "@/components/ui/use-toast"
import { api } from "@/libs/axios"
import { useRouter } from "next/navigation"

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const avatarInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()
  const router = useRouter()

  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    const email = emailInputRef.current?.value
    const name = nameInputRef.current?.value
    const password = passwordInputRef.current?.value
    const confirmPassword = confirmPasswordInputRef.current?.value
    const avatarUrl = avatarInputRef.current?.value

    try {
      if (password !== confirmPassword) {
        toast({
          variant: "destructive",
          title: "❌ Registrar",
          description: "Campos de Senha e Confirmar Senha não são iguais.",
          duration: 2000
        })
        return
      }

      await api.post("/auth/register", { name, email, password, avatarUrl })

      toast({
        variant: "success",
        title: "✔ Registrar",
        description: "Registro realizado com sucesso.",
        duration: 2000
      })

      router.replace("/login")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14">
        <Image className="mb-4" src={logoImg} alt="Nlw Logo" />
        <Header title="Registrar-se" />

        <form onSubmit={handleOnSubmit} className="mt-10 flex flex-col w-[500px] gap-4">
          <input
            className="custom-input"
            type="text"
            required
            placeholder="Nome"
            ref={nameInputRef}
          />

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

          <input
            className="custom-input"
            type="password"
            required
            placeholder="Confirmar Senha"
            ref={confirmPasswordInputRef}
          />

          <input
            className="custom-input"
            type="url"
            placeholder="Avatar URL"
            ref={avatarInputRef}
          />

          <button className="custom-button flex items-center justify-center" type="submit">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Rocket className="mr-4" />
                Registrar
              </>
            )}
          </button>
        </form>
      </main>
    </div>
  )
}
