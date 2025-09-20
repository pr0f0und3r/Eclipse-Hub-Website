import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/hooks/use-theme"
import "./globals.css"

export const metadata: Metadata = {
  title: "Eclipse Hub - Advanced Scripting Platform",
  description:
    "The ultimate platform for developers, gamers, and enthusiasts seeking powerful scripting tools and community resources.",
  generator: "Eclipse Hub",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="eclipse-hub-theme">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
