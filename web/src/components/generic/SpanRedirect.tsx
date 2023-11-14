"use client"

import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"
import { Button } from "../ui/button"

interface SpanProps {
  text: string
  redirectTo: string
}

export function SpanRedirect({ text, redirectTo }: SpanProps) {
  const router = useRouter()

  function handleOnClick() {
    router.push(`${redirectTo}`)
  }

  return (
    <span
      className="text-nlwYellow-500 cursor-pointer hover:underline hover:underline-offset-4"
      onClick={handleOnClick}
    >
      {text}
    </span>
  )
}
