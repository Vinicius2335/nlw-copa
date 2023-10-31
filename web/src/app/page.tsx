import { PoolForm } from "@/components/PoolForm"
import { api } from "@/libs/axios"
import Image from "next/image"
import appPreviewImg from "../assets/app-nlw-copa-preview.png"
import iconCheckImg from "../assets/icon-check.svg"
import logoImg from "../assets/logo.svg"
import usersAvatarExampleImg from "../assets/users-avatar-example.png"

export default async function Home() {
  const poolCountResponse = await api.get("/pools/count")
  const poolCount = poolCountResponse.data.count

  const userCountResponse = await api.get("/users/count")
  const userCount = userCountResponse.data.count

  const guessCountResponse = await api.get("/guesses/count")
  const guessCount = guessCountResponse.data.count

  return (
    <div className="max-w-6xl h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="Nlw Logo" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="Avatares de usuários" />

          <strong className="text-nlwGray-100 text-xl">
            <span className="text-ignite-500">+{userCount}</span> pessoas já estão usando.
          </strong>
        </div>

        <PoolForm />

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras
          pessoas 🚀.
        </p>

        <div className="mt-10 pt-10 mb-10 border-t border-gray-600 flex justify-between items-center text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="Icone de Check" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="Icone de Check" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
        quality={100}
      />
    </div>
  )
}
