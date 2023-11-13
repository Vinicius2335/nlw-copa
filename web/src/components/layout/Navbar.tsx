import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Image from "next/image"
import LogoImg from "@/assets/logo.svg"
import { ActiveLink } from "../generic/ActiveLink"

const menus = [
  { title: "Novo Bolão", path: "/new-poll" },
  { title: "Meus Bolões", path: "/polls" },
]

export function Navbar() {
  return (
    <nav className="bg-nlwGray-800 w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image alt="logo" src={LogoImg} width={112} height={112}/>
          </Link>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-nlwGray-300 hover:text-nlwYellow-500">
                <ActiveLink href={item.path}>{item.title}</ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
