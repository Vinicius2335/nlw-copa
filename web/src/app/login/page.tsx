"use client"

import Image from "next/image"
import logoImg from "../../assets/logo.svg"
import { FormEvent, useRef, useState } from "react"
import { Rocket } from "lucide-react"
import { Loading } from "@/components/generic/Loading"
import { api } from "@/libs/axios"
import { useRouter } from "next/navigation"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const route = useRouter()

  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault()

    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value

    try {
      setIsLoading(true)
      await api.post("/auth/login", { email, password })
      route.push("/new-poll")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14">
        <Image src={logoImg} alt="Nlw Logo" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Login</h1>

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
            {isLoading ? (
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
