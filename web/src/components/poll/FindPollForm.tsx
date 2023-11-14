"use client"

import { api } from "@/libs/axios"
import { FormEvent, useRef, useState } from "react"
import { useToast } from "../ui/use-toast"
import { useRouter } from "next/navigation"
import { ExceptionResponse } from "@/model/responses"
import { AxiosError } from "axios"
import { Loading } from "../generic/Loading"

export function FindPollForm() {
  const pollCodeInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  async function findPollByCode(event: FormEvent) {
    event.preventDefault()

    const pollCode = pollCodeInputRef.current!.value

    if (!pollCode.trim()) {
      toast({
        variant: "destructive",
        title: "❌ Encontrar Bolão",
        description: "Informe o código.",
        duration: 2000
      })
      return
    }

    try {
      setIsLoading(true)

      await api.post("/polls/join", {
        code: pollCode
      })

      toast({
        variant: "success",
        title: "✔ Entrando no Bolão",
        description: "Você entrou no bolão com sucesso.",
        duration: 2000
      })

      if (pollCodeInputRef.current?.value != null) {
        pollCodeInputRef.current.value = ""
      }

      router.push("/polls")
    } catch (ex) {
      const error = ex as AxiosError<ExceptionResponse>
      console.log(error.response?.data)
      setIsLoading(false)

      if (error.response?.data.title === "Poll not found...") {
        toast({
          variant: "destructive",
          title: "❌ Encontrar Bolão",
          description: "Não foi possivel encontrar o bolão.",
          duration: 2000
        })
      }

      if (error.response?.data.title === "You already joined this poll") {
        toast({
          variant: "destructive",
          title: "❌ Entrar no Bolão",
          description: "Você já está nesse bolão.",
          duration: 2000
        })
      }
    }
  }

  return (
    <form onSubmit={findPollByCode} className="mt-10 flex flex-col gap-4 w-[500px]">
      <input
        className="custom-input"
        type="text"
        required
        placeholder="Qual o código do bolão?"
        ref={pollCodeInputRef}
      />
      <button className="custom-button" type="submit">
        {isLoading ? <Loading /> : <>BUSCAR BOLÃO</>}
      </button>
    </form>
  )
}
