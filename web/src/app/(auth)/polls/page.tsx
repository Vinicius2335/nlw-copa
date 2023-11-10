import { Header } from "@/components/generic/Header"
import { Search } from "lucide-react"

export default function Polls() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col justify-center items-center mt-14 w-[500px]">
        <Header title="Meus Bolões" />

        <button className="custom-button flex items-center justify-center mb-4 mt-10">
          <Search className="mr-4" />
          Buscar bolão por código
        </button>

        <div className="pt-10 mb-10 border-t border-gray-600 flex flex-col justify-between items-center text-gray-100 w-full">
            <p>Lista de Bolões</p>
            <p>Lista de Bolões</p>
        </div>
      </main>
    </div>
  )
}
