"use client"

import { Participant, Poll } from "@/model/models"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupList,
  AvatarImage,
  AvatarOverflowIndicator
} from "../ui/avatar"
import { Card } from "../ui/card"

export interface PollCardProps {
  poll: Poll
  countParticipants: number
  participants: Participant[]
}

interface Props {
  data: PollCardProps
}

export function PollCard({ data }: Props) {
  function handleOnClick() {
    alert("Card Tocado")
  }

  return (
    <Card
      className="cursor-pointer w-full bg-nlwGray-800 border-b-4 border-b-nlwYellow-500 flex items-center justify-between p-4 mb-3 hover:bg-nlwGray-900"
      onClick={handleOnClick}
    >
      <div>
        <h1 className="text-white text-base font-bold">{data.poll.title}</h1>
        <p className="text-nlwGray-200 text-xs">Criado por {data.poll.ownerName}</p>
      </div>

      <AvatarGroup limit={4}>
        <AvatarGroupList>
          {data.participants.map((participant, i) => (
            <Avatar key={i}>
              <AvatarImage
                src={`${participant.user.avatarUrl}`}
                alt="Foto de perfil do usuário"
              />
              <AvatarFallback>NW</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroupList>
        <AvatarOverflowIndicator />
      </AvatarGroup>
    </Card>
  )
}
