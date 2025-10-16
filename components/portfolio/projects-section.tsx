import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="projects-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          Key Academic Projects
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-pretty">GST Management Study (Major Project)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-foreground/80">
                Studied GST management, planning, and process at AARMS Value Chain Pvt. Ltd.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">MS Word</Badge>
                <Badge variant="secondary">Charts</Badge>
                <Badge variant="secondary">Internet Browsers</Badge>
              </div>
              <p className="text-sm text-foreground/70">
                Outcome: Gained practical knowledge of GST registration, invoicing, compliance, and reporting.
              </p>
            </CardContent>
          </Card>

          <Card className="transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-pretty">Customer Behavior Analysis (Mini Project)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-foreground/80">
                Conducted an analysis on how customers evaluate electricity products in online shopping, focusing on
                quality, trust, and delivery factors.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">MS Word</Badge>
                <Badge variant="secondary">Browsers</Badge>
              </div>
              <p className="text-sm text-foreground/70">
                Outcome: Understood consumer priorities like pricing, reviews, and delivery time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
