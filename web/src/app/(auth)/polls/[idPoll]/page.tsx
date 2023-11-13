"use client"

import { Header } from "@/components/generic/Header"
import { Loading } from "@/components/generic/Loading"
import { Option } from "@/components/generic/Option"
import { EmptyMyPollParticipantList } from "@/components/poll/EmptyMyPollParticipantList"
import { PollCardProps } from "@/components/poll/PollCard"
import { api } from "@/libs/axios"
import { useEffect, useState } from "react"

type OptionsType = "Seus Palpites" | "Ranking do Grupo"

interface PollDetailsProps {
  params: {
    idPoll: string
  }
}

export default function PollDetails({ params }: PollDetailsProps) {
  const [pollDetails, setPollDetails] = useState({} as PollCardProps)
  const [isLoading, setIsLoading] = useState(true)
  const [optionSelected, setOptionSelected] = useState<OptionsType>("Seus Palpites")

  async function handlePollDetails() {
    try {
      setIsLoading(true)
      const response = await api
        .get<PollCardProps>(`/polls/${params.idPoll}`)
        .then(resp => resp.data)

      setPollDetails(response)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handlePollDetails()
  }, [params.idPoll])

  return (
    <>
      {isLoading ? (
        <Loading tamanho="h-28 w-28" classname="text-nlwYellow-500" />
      ) : (
        <>
          <Header title={pollDetails.poll.title} />
          <EmptyMyPollParticipantList code={pollDetails.poll.code} />

          <div className="mt-4 mb-5 p-1 bg-nlwGray-800 w-full rounded-sm flex items-center justify-around">
            <Option
              title="Seus Palpites"
              isSelected={optionSelected === "Seus Palpites"}
              onClick={() => setOptionSelected("Seus Palpites")}
            />
            <Option
              title="Ranking do Grupo"
              isSelected={optionSelected === "Ranking do Grupo"}
              onClick={() => setOptionSelected("Ranking do Grupo")}
            />
          </div>
        </>
      )}
    </>
  )
}
