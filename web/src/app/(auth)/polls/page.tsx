"use client"

import { Loading } from "@/components/generic/Loading"
import { PollCardProps } from "@/components/poll/PollCard"
import { useToast } from "@/components/ui/use-toast"
import { api } from "@/libs/axios"
import { useEffect, useState } from 'react'
import { PollBody } from "./components/PollBody"

export default function Polls() {
  const [isLoading, setIsLoading] = useState(true)
  const [polls, setPolls] = useState<PollCardProps[]>([])
  const { toast } = useToast()

  async function getPolls(){
    try {
      setIsLoading(true)

      const response = await api.get<PollCardProps[]>("/polls").then(resp => resp.data)
      
      setPolls(response)

    } catch(error){
      console.error(error)

      toast({
        variant: 'destructive',
        title: "❌ Encontrar Bolões",
        description: "Não foi possivel carregar os bolões.",
        duration: 2000
      })

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPolls()
  }, [])

  return (
    <>
      {
        isLoading ? (
          <Loading classname="text-nlwYellow-500" tamanho="w-20 h-20" />
        ) : (
         <PollBody polls={polls}/>
        )
      }
    </>
  )
}
