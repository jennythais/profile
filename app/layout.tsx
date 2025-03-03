import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"
import { NavLink } from "@/components/nav-link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thai Ngoc | People Business Partner",
  description:
    "Personal portfolio website showcasing my information, skills, and experience",
  generator: 'thaingoc'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Link href="/" className="font-bold text-xl mr-6 text-[#694a08]">
              TKN
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/experience">Experience</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Thai Ngoc. All rights reserved.
              </p>
              <nav className="flex items-center space-x-4 mt-4 sm:mt-0">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}


