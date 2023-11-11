"use client"

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function ButtonToFindPoll() {
  const router = useRouter()

  function handleOnFindPoll(){
    router.push("/find-poll")
  }

  return (
    <button className="custom-button flex items-center justify-center mb-4 mt-10" onClick={handleOnFindPoll}>
      <Search className="mr-4" />
      Buscar bolão por código
    </button>
  )
}
