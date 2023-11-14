// @ts-nocheck

import { ChangeEvent } from "react"
import ReactCountryFlag from "react-country-flag"

interface TeamProps {
  code: string
  position: "left" | "right"
  value?: string
  onChange?: (value: string) => void
}

export function Team({ code, position, value, onChange }: TeamProps) {
  const disabled = Number(value) > 0 ? true : false

  return (
    <div className="flex items-center">
      {position === "left" && (
        <ReactCountryFlag
          countryCode={code}
          svg
          style={{ marginRight: "12px", width: "25px", height: "25px" }}
        />
      )}

      <input
        type="number"
        className="bg-nlwGray-900 w-10 h-9 border border-nlwGray-600 text-white text-xs font-bold placeholder:text-nlwGray-300 rounded pl-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nlwGray-900 focus:ring-nlwYellow-500 disabled:text-nlwGray-300"
        disabled={disabled}
        placeholder="0"
        value={value}
        onChange={(e: ChangeEvent<{ value: string }>) => onChange(e.currentTarget.value)}
        maxLength={1}
      />

      {position === "right" && (
        <ReactCountryFlag
          countryCode={code}
          svg
          style={{ marginLeft: "12px", width: "25px", height: "25px" }}
        />
      )}
    </div>
  )
}
