import type { Metadata } from 'next'
import Script from 'next/script'
import { Karla, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const logirent = localFont({
  src: '../assets/fonts/Logirent-Regular.otf',
  display: 'swap',
  variable: '--font-logirent',
})

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${karla.variable} ${inter.variable} ${logirent.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
