"use client"

import { api } from "@/libs/axios"
import { FormEvent, useRef } from "react"

export function PollForm() {
  const pollTitleInputRef = useRef<HTMLInputElement>(null)

  async function createPoll(event: FormEvent) {
    event.preventDefault()

    const pollTitle = pollTitleInputRef.current?.value

    try {
      const response = await api.post("/polls", {
        title: pollTitle
      })

      const { code } = response.data
      await navigator.clipboard.writeText(code)
      alert(`Bolão criado com sucesso, o código foi copiado para a área de transferência!`)

      if (pollTitleInputRef.current?.value != null){
        pollTitleInputRef.current.value = ""
      }


    } catch (err) {
      console.error(err)
      alert("Falha ao criar o bolão, tente novamente!")
    }
  }

  return (
    <form onSubmit={createPoll} className="mt-10 flex gap-2">
      <input
        className="flex-1 px-6 py-4 rounded bg-nlwGray-800 border border-nlwGray-600 text-sm text-nlwGray-100"
        type="text"
        required
        placeholder="Qual nome do seu bolão?"
        ref={pollTitleInputRef}
      />
      <button
        className="bg-nlwYellow-500 hover:bg-nlwYellow-700 px-6 py-4 rounded text-nlwGray-900 font-bold font-sm uppercase"
        type="submit"
      >
        Criar meu bolão
      </button>
    </form>
  )
}