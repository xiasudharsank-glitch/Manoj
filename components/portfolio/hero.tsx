"use client"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b"
      aria-labelledby="hero-title"
      style={{
        backgroundImage: `linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)`,
        backgroundSize: "24px 24px, 24px 24px",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
        <div className="order-2 md:order-1">
          <h1 id="hero-title" className="text-pretty text-3xl font-bold leading-tight text-foreground md:text-5xl">
            MBA | Finance & Business Analytics | Aspiring Data & Business Analyst
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground/80 md:text-lg">
            Transforming complex data into strategic business insights.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects" aria-label="View my projects">
                View My Projects
              </a>
            </Button>
            <Button asChild variant="secondary" className="border border-border">
              <a href="#contact" aria-label="Contact me">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-primary md:h-64 md:w-64">
            {/* Using a standard img to avoid Next image config issues in Next.js */}
            <img
              src="/images/Manoj professional picture.jpg"
              alt="Profile photo of Manoj Kumar S"
              className="h-full w-full object-cover"
              cross-origin="anonymous"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
