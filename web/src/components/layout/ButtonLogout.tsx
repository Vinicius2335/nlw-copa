"use client"

import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { api } from "@/libs/axios"
import { useRouter } from "next/navigation"

export function ButtonLogout(){
  const router = useRouter()

  async function handleOnLogout(){
    try {
      await api.post("/auth/logout");

      router.replace("/")
    } catch(error){
      console.error(error)
    }
  }

  return (
    <Button variant={"destructive"} className="flex items-center w-full" onClick={handleOnLogout}>
      <LogOut className="mr-2" size={16}/>
      Sair
    </Button>
  )
}