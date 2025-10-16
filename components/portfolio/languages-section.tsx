import { Badge } from "@/components/ui/badge"

export function LanguagesSection() {
  return (
    <section id="languages" aria-labelledby="languages-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="languages-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          Languages
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Badge className="rounded-full">English</Badge>
          <Badge className="rounded-full">Kannada</Badge>
          <Badge className="rounded-full">Telugu</Badge>
          <Badge className="rounded-full">Hindi</Badge>
        </div>
      </div>
    </section>
  )
}
