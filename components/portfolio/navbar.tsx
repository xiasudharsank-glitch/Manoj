"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#top" className="font-semibold text-lg text-foreground transition-all duration-200 hover:text-primary hover:scale-105">
          Manoj Kumar S<span className="sr-only">Homepage</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-2 md:flex">
          <a
            href="#about"
            className="rounded px-3 py-2 text-sm text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105"
          >
            About
          </a>
          <a
            href="#projects"
            className="rounded px-3 py-2 text-sm text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="rounded px-3 py-2 text-sm text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#languages"
            className="rounded px-3 py-2 text-sm text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105"
          >
            Languages
          </a>
          <a
            href="#contact"
            className="rounded px-3 py-2 text-sm text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="transition-transform duration-200 hover:scale-105">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
