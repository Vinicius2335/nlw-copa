"use client"

import { Navbar } from "@/components/layout/Navbar"
import { useAuth } from "@/hooks/useAuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Loading } from '@/components/generic/Loading';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { accessToken, user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const route = useRouter()

  useEffect(() => {
    setIsLoading(true)

    if (accessToken == null || accessToken === "") {
      route.push("/")
    } else {
      setIsLoading(false)
    }

  }, [accessToken])

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <Loading classname="text-nlwYellow-500" tamanho="w-96 h-96" />
        </div>
      ) : (
        <div className="relative flex flex-col items-center" id="app-container">
          <Navbar user={user}/>
          <div className="flex flex-col justify-center items-center mt-14 w-[500px]">
            {children}
          </div>
        </div>
      )}
    </>
  )
}
