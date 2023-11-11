import { Header } from "@/components/generic/Header";
import { FindPollForm } from "@/components/poll/FindPollForm"

export default function FindPoll(){
  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14">
        <Header title="Encontre um bolão através de seu código único" />

        <FindPollForm />
      </main>
    </div>
  )
}