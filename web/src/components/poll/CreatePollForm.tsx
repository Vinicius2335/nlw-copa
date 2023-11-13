"use client"

import { api } from "@/libs/axios"
import { FormEvent, useRef, useState } from "react"
import { Loading } from "../generic/Loading"

export function CreatePollForm() {
  const pollTitleInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function createPoll(event: FormEvent) {
    event.preventDefault()

    const pollTitle = pollTitleInputRef.current?.value

    try {
      setIsLoading(true)
      const response = await api.post("/polls", {
        title: pollTitle
      })

      const { code } = response.data
      await navigator.clipboard.writeText(code)
      alert(`Bolão criado com sucesso, o código foi copiado para a área de transferência!`)

      if (pollTitleInputRef.current?.value != null) {
        pollTitleInputRef.current.value = ""
      }
    } catch (err) {
      console.error(err)
      alert("Falha ao criar o bolão, tente novamente!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={createPoll} className="mt-10 flex flex-col gap-4 w-[500px]">
      <input
        className="custom-input"
        type="text"
        required
        placeholder="Qual nome do seu bolão?"
        ref={pollTitleInputRef}
      />
      <button className="custom-button" type="submit">
        {
          isLoading ? (
            <Loading />
          ) : (
            <>Criar meu bolão</>
          )
        }
      </button>
    </form>
  )
}
