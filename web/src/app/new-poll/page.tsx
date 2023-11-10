import { PollForm } from "@/components/PollForm";

export default function NewPoll() {
  return (
    <div className="items-center justify-center">
      <main>
        <h1>Header</h1>

        <PollForm />

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras
          pessoas 🚀.
        </p>
      </main>
    </div>
  )
}
