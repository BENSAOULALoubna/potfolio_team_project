import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ENSIA AI Engineering Team",
  description: "A passionate team of AI engineering students from ENSIA building intelligent systems",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-[#0a0a0a] text-white`}>
        <ScrollProgress />
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
