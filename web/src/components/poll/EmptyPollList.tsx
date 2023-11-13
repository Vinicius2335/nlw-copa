import { ButtonRedirect } from "../generic/ButtomRedirect"
import { Button } from "../ui/button"

export function EmptyPollList() {
  return (
    <p className="text-nlwGray-200 text-center text-sm">
      Você ainda não está participando de nenhum bolão, que tal
      <ButtonRedirect
        title="buscar um por código"
        redirectTo="/find-poll"
        variant={"link"}
        className="text-nlwYellow-500"
      />
      ou
      <ButtonRedirect
        title="criar um novo"
        redirectTo="/new-poll"
        variant={"link"}
        className="text-nlwYellow-500"
      />
      ?
    </p>
  )
}
