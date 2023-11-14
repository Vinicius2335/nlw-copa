"use client"

import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

interface Props {
  code: string
}

export function EmptyMyPollParticipantList({ code }: Props) {
  const { toast } = useToast()

  async function handleOnShare(code: string) {
    await navigator.clipboard.writeText(code)

    toast({
      description: "Código copiado para a área de transferência!",
      duration: 2000
    })
  }

  return (
    <p className="mt-4 text-nlwGray-200 text-center text-sm">
      Neste bolão só você está participando, que tal{" "}
      <span
        className="text-nlwYellow-500 cursor-pointer hover:underline hover:underline-offset-4"
        onClick={() => handleOnShare(code)}
      >
        compartilhar o código
      </span>{" "}
      do bolão com alguém?
      <span className="ml-2 font-bold text-nlwGray-200 text-sm">{code}</span>
    </p>
  )
}

