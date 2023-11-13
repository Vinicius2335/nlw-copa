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
      duration: 3000,
    })
  }

  return (
    <p className="mt-4 text-nlwGray-200 text-center text-sm">
      Neste bolão só você está participando, que tal
      <Button className="text-nlwYellow-500" variant={"link"} onClick={() => handleOnShare(code)}>
        compartilhar o código
      </Button>
      do bolão com alguém?
      <span className="ml-2 font-bold text-nlwGray-200 text-sm">{code}</span>
    </p>
  )
}
