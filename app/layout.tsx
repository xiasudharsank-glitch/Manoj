import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Manoj Kumar S | Finance & Business Analytics Portfolio",
  description:
    "Portfolio website of Manoj Kumar S, MBA in Finance & Business Analytics, specializing in data analysis, visualization, and business insights.",
  generator: "v0.app",
  openGraph: {
    title: "Manoj Kumar S | Finance & Business Analytics Portfolio",
    description:
      "Portfolio website of Manoj Kumar S, MBA in Finance & Business Analytics, specializing in data analysis, visualization, and business insights.",
    images: ["/images/manoj-profile.jpg"],
    type: "website",
  },
  metadataBase: new URL("https://example.com"), // replace with your final domain when publishing
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
