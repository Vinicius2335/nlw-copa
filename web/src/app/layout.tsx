import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Nlw Copa',
  description: 'FrontEnd Nlw Copa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-lt-installed='true'>
      <body className={`${roboto.className} bg-nlwGray-900 bg-app bg-no-repeat bg-cover`}>{children}</body>
    </html>
  )
}
