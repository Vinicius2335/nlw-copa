import { CreatePollForm } from "@/components/poll/CreatePollForm"
import { Header } from "@/components/generic/Header"

export default function NewPoll() {
  return (
    <>
      <Header title="Crie seu próprio bolão da copa e compartilhe entre amigos!" />

      <CreatePollForm />

      <p className="mt-4 text-sm text-center text-gray-300 leading-relaxed">
        Após criar seu bolão, você receberá um código único que poderá usar para convidar outras
        pessoas 🚀.
      </p>
    </>
  )
}
