import { Header } from "@/components/generic/Header"
import { FindPollForm } from "@/components/poll/FindPollForm"

export default function FindPoll() {
  return (
    <>
      <Header title="Encontre um bolão através de seu código único" />

      <FindPollForm />
    </>
  )
}
