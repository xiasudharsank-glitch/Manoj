import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="about-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          About Me
        </h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="text-pretty leading-relaxed text-foreground/90">
            <p>
              Motivated MBA graduate specializing in Finance and Business Analytics, seeking opportunities to apply
              analytical, financial, and technical expertise to real-world business problems. Skilled in transforming
              data into actionable insights using Power BI, Tableau, SQL, Python, and Advanced Excel. Dedicated to
              contributing to organizational growth through data-driven decisions and analytical precision.
            </p>

            <div className="mt-6 space-y-2 text-sm text-foreground/80">
              <div>
                <strong>Education</strong>
              </div>
              <ul className="list-disc pl-5">
                <li>MBA (Finance & Business Analytics) — Sindhi Institute of Management, Bengaluru (2022–2025)</li>
                <li>B.Com — Govt First Grade College, Yelahanka (2019–2022)</li>
              </ul>
            </div>

            <div className="mt-6">
              <Button asChild variant="outline" className="transition-all duration-200 hover:scale-105 hover:border-primary">
                <a href="Manoj_resume.pdf" aria-label="Download Resume (PDF)">
                  📄 Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="grid content-start gap-4 rounded-lg border bg-secondary p-4 transition-all duration-300 hover:shadow-lg hover:border-primary hover:scale-[1.02]">
            <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">
              <span aria-hidden>📍</span>
              <span className="text-foreground/90">Vijayapura, Bengaluru Rural – 562135</span>
            </div>
            <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">
              <span aria-hidden>📞</span>
              <a className="text-primary underline-offset-4 hover:underline" href="tel:+917259052573">
                7259052573
              </a>
            </div>
            <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">
              <span aria-hidden>✉️</span>
              <a className="text-primary underline-offset-4 hover:underline" href="mailto:manumk25273@gmail.com">
                manumk25273@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
