import { Participant } from "@/model/models"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupList,
  AvatarImage,
  AvatarOverflowIndicator
} from "./ui/avatar"

interface ParticipantsProps {
  participants: Participant[]
}

export function Participants({ participants }: ParticipantsProps) {
  return (
    <AvatarGroup limit={4}>
      <AvatarGroupList>
        {participants.map((participant, i) => (
          <Avatar key={i}>
            <AvatarImage src={`${participant.user.avatarUrl}`} alt="Foto de perfil do usuário" />
            <AvatarFallback>NW</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroupList>
      <AvatarOverflowIndicator />
    </AvatarGroup>
  )
}
