import { Participants } from "../Participants"
import { PollCardProps } from "./PollCard"

interface PollHeaderProps {
  data: PollCardProps
}

export function PollHeader({ data }: PollHeaderProps) {
  return (
    <div className="w-full h-20 rounded-sm bg-transparent border-b border-b-nlwGray-600 flex justify-between items-center mb-3 p-4">
      <div>
        <h1 className="text-white text-xl font-bold">{data.poll.title}</h1>
        <p className="text-nlwGray-200 text-base">Código: <span className="font-bold">{data.poll.code}</span></p>
      </div>

      <Participants participants={data.participants} />
    </div>
  )
}
