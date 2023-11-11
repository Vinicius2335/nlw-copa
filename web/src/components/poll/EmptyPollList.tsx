import { Button } from "../ui/button"

export function EmptyPollList() {
  return (
    <p className="text-white text-center text-sm">
      Você ainda não está participando de nenhum bolão, que tal{" "}
      <Button variant={"link"} className="text-nlwYellow-500">
        buscar um por código
      </Button>{" "}
      ou{" "}
      <Button variant={"link"} className="text-nlwYellow-500">
        criar um novo
      </Button>{" "}
      ?
    </p>
  )
}
