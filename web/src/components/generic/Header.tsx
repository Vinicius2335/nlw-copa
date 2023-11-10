import Image from "next/image"
import logoImg from "../../assets/logo.svg"

interface HeaderProps {
  title: string
}

export function Header({ title }:HeaderProps){
  return (
    <>
      <Image src={logoImg} alt="Nlw Logo" />

      <h1 className="text-white mt-8 font-bold text-2xl text-center leading-tight">{title}</h1>
    </>
  )
}