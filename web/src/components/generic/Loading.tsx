import { RefreshCw } from "lucide-react";

interface LoadingProps {
  classname?: string
  tamanho?: string
}

export function Loading({ classname='', tamanho='w-4 h-2' }:LoadingProps) {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
        <RefreshCw className={`${tamanho} animate-spin ${classname}`}/>
    </div>
  )
}