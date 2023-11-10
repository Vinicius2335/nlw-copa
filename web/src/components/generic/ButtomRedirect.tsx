"use client"

import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  redirectTo: string
}

export function ButtonRedirect({ title, redirectTo, ...props }: ButtonProps) {
  const router = useRouter()

  function handleOnClick() {
    router.push(`${redirectTo}`)
  }

  return (
    <button className="custom-button" onClick={handleOnClick} {...props}>
      {title}
    </button>
  )
}
