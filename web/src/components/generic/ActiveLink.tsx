"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

export const ActiveLink = ({ children, ...rest }: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest
  const pathName = usePathname()

  const isActive = pathName === href

  return (
    <Link {...rest} className={isActive ? "text-nlwYellow-500" : ""}>
      {children}
    </Link>
  )
}
