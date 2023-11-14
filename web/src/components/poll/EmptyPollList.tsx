import { SpanRedirect } from "../generic/SpanRedirect"

export function EmptyPollList() {
  return (
    <p className="text-nlwGray-200 text-center text-sm">
      Você ainda não está participando de nenhum bolão, que tal{" "}
      <SpanRedirect text="buscar um por código" redirectTo="/find-poll" /> ou{" "}
      <SpanRedirect text="criar um novo" redirectTo="/new-poll" /> ?
    </p>
  )
}
