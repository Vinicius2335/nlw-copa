export default async function Home() {
  const response = await fetch(`http://localhost:8080/api/pools/count`)
  const data = await response.text()

  return (
    <>
      <h1>Olá Mundo</h1>
      <h2>{data}</h2>
    </>
  )
}
