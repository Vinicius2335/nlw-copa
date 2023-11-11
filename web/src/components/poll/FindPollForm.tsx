"use client"

import { api } from "@/libs/axios"
import { FormEvent, useRef } from "react"

export function FindPollForm() {
  const pollCodeInputRef = useRef<HTMLInputElement>(null)

  async function findPollByCode(event: FormEvent) {
    event.preventDefault()

    const pollCode = pollCodeInputRef.current?.value

    try {
      const response = await api.post("/polls/join", {
        code: pollCode
      })

      const { code } = response.data
      alert(`Você entrou no bolão com sucesso!`)

      if (pollCodeInputRef.current?.value != null) {
        pollCodeInputRef.current.value = ""
      }
    } catch (err) {
      console.error(err)
      alert("Falha ao procurar bolão, tente novamente!")
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
        BUSCAR BOLÃO
      </button>
    </form>
  )
}
