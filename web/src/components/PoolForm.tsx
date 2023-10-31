"use client"

import { api } from "@/libs/axios"
import { FormEvent, useRef } from "react"

export function PoolForm() {
  const poolTitleInputRef = useRef<HTMLInputElement>(null)

  async function createPool(event: FormEvent) {
    event.preventDefault()

    const poolTitle = poolTitleInputRef.current?.value

    try {
      const response = await api.post("/pools", {
        title: poolTitle
      })

      const { code } = response.data
      await navigator.clipboard.writeText(code)
      alert(`Bolão criado com sucesso, o código foi copiado para a área de transferência!`)

      if (poolTitleInputRef.current?.value != null){
        poolTitleInputRef.current.value = ""
      }


    } catch (err) {
      console.error(err)
      alert("Falha ao criar o bolão, tente novamente!")
    }
  }

  return (
    <form onSubmit={createPool} className="mt-10 flex gap-2">
      <input
        className="flex-1 px-6 py-4 rounded bg-nlwGray-800 border border-nlwGray-600 text-sm text-nlwGray-100"
        type="text"
        required
        placeholder="Qual nome do seu bolão?"
        ref={poolTitleInputRef}
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
