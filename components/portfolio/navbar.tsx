"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#top" className="font-semibold text-lg text-foreground">
          Manoj Kumar S<span className="sr-only">Homepage</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-2 md:flex">
          <a
            href="#about"
            className="rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition"
          >
            Skills
          </a>
          <a
            href="#languages"
            className="rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition"
          >
            Languages
          </a>
          <a
            href="#contact"
            className="rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
