import { Header } from "@/components/generic/Header";
import { ButtonToFindPoll } from "@/components/poll/ButtonToFindPoll";
import { EmptyPollList } from "@/components/poll/EmptyPollList";
import { PollCard, PollCardProps } from "@/components/poll/PollCard";

interface PollBodyProps{
  polls:  PollCardProps[]
}

export function PollBody({ polls }:PollBodyProps){
  return(
    <>
    <Header title="Meus Bolões" />

    <ButtonToFindPoll />

    <div className="pt-10 mb-10 border-t border-gray-600 flex flex-col justify-between items-center text-gray-100 w-full">
        {
          polls.length != 0 ? (
            polls.map((poll, index) => (
              <PollCard data={poll} key={index} />
            ))
          ) : (
            <EmptyPollList />
          )
        }
    </div>
</>
  )
}