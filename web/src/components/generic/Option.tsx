import { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";

interface OptionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  isSelected?: boolean;
}

export function Option({ isSelected=false, title, ...rest }: OptionProps){
  const selected = isSelected ? "bg-nlwGray-600" : "bg-transparent"

  return (
    <Button className={`w-full h-7 text-nlwGray-200 font-bold text-sm rounded-sm ${selected} hover:bg-nlwYellow-500 hover:text-black`} {...rest}>
      { title }
    </Button>
  )
}