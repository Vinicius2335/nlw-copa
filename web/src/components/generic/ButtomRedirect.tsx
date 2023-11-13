"use client"

import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"
import { Button } from "../ui/button"

type buttonType =  "nlw" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  redirectTo: string
  variant?: buttonType
}

export function ButtonRedirect({ title, variant="nlw", redirectTo, ...props }: ButtonProps) {
  const router = useRouter()

  function handleOnClick() {
    router.push(`${redirectTo}`)
  }

  return (
    <Button variant={variant} onClick={handleOnClick} {...props}>
      {title}
    </Button>
  )
}
