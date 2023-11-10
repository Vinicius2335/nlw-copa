"use client"

import { Header } from "@/components/generic/Header"
import { Loading } from "@/components/generic/Loading"
import { api } from "@/libs/axios"
import { LoginResponseProps } from "@/model/responses"
import { Rocket } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"

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
      const response = await api.post<LoginResponseProps>("/auth/login", { email, password })
      .then(resp => resp.data)

      api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`

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
