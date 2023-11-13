import { Navbar } from "@/components/layout/Navbar"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center" id="app-container">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-14 w-[500px]">{children}</div>
    </div>
  )
}
