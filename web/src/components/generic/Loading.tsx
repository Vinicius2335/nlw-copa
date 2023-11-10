import { RefreshCw } from "lucide-react";

export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
        <RefreshCw className="w-4 h-4 animate-spin"/>
    </div>
  )
}