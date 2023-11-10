import { PollForm } from "@/components/PollForm"
import { Header } from "@/components/generic/Header"

export default function NewPoll() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14">
        <Header title="Crie seu próprio bolão da copa e compartilhe entre amigos!"/>

        <PollForm />

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras
          pessoas 🚀.
        </p>
      </main>
    </div>
  )
}
