
interface HeaderProps {
  title: string
}

export function Header({ title }:HeaderProps){
  return (
    <>
      <h1 className="text-white font-bold text-2xl text-center leading-tight">{title}</h1>
    </>
  )
}