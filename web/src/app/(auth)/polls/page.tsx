import { Header } from "@/components/generic/Header"
import { ButtonToFindPoll } from "@/components/poll/ButtonToFindPoll"
import { EmptyPollList } from "@/components/poll/EmptyPollList"
import { PollCard, PollCardProps } from "@/components/poll/PollCard"
import { data } from "@/utils/Test"

export default function Polls() {
  // TEST - remover data dps
  const polls: PollCardProps[] = data

  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14 w-[500px]">
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
      </main>
    </div>
  )
}
