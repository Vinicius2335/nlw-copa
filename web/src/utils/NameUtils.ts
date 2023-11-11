export function abbreviateName(name: string) {
  const split = name.split(" ")

  const abreviacoes = split.map(s => s.charAt(0))

  let resultadoFinal = ""

  abreviacoes.forEach((value, index) => {
    if (index < 2) {
      resultadoFinal += value
    }
  })

  return resultadoFinal
}
