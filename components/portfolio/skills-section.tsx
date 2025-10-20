export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="skills-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          Technical & Soft Skills
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary hover:scale-[1.02]">
            <h3 className="mb-3 text-lg font-medium text-foreground">Technical Skills</h3>
            <ul className="grid list-disc gap-2 pl-5 text-foreground/90">
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Power BI</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Tableau</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">SQL</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Python</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Advanced Excel</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">MS Word & PowerPoint</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Data Visualization & Dashboard Creation</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary hover:scale-[1.02]">
            <h3 className="mb-3 text-lg font-medium text-foreground">Soft Skills</h3>
            <ul className="grid list-disc gap-2 pl-5 text-foreground/90">
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Communication & Leadership</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Analytical Thinking & Problem Solving</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Team Collaboration & Decision-Making</li>
              <li className="transition-all duration-200 hover:text-primary hover:translate-x-1">Time Management & Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
