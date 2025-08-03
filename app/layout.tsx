import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Revolutionize your marketing strategy with our comprehensive AI suite. Generate compelling content, optimize campaigns, and boost conversions with cutting-edge artificial intelligence.",
  keywords: "AI marketing, content generation, campaign optimization, marketing automation, artificial intelligence",
  authors: [{ name: "ADmyBRAND AI Team" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your marketing strategy with our comprehensive AI suite.",
    url: "https://admybrand.ai",
    siteName: "ADmyBRAND AI",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI Suite Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your marketing strategy with our comprehensive AI suite.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
