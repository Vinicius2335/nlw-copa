import { getName } from "country-list"
import ReactCountryFlag from "react-country-flag"

export default function Flags() {
  const isoCode = "us"

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mt-14 w-[500px]">
        <h1 className="text-white text-3xl mb-4">Flags</h1>
        <h2 className="text-white text-2xl mb-4">Pais: {getName(isoCode)}</h2>
        <ReactCountryFlag countryCode={isoCode} svg />
      </div>
    </div>
  )
}
