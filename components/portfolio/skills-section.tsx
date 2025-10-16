export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="skills-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          Technical & Soft Skills
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-medium text-foreground">Technical Skills</h3>
            <ul className="grid list-disc gap-2 pl-5 text-foreground/90">
              <li>Power BI</li>
              <li>Tableau</li>
              <li>SQL</li>
              <li>Python</li>
              <li>Advanced Excel</li>
              <li>MS Word & PowerPoint</li>
              <li>Data Visualization & Dashboard Creation</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-foreground">Soft Skills</h3>
            <ul className="grid list-disc gap-2 pl-5 text-foreground/90">
              <li>Communication & Leadership</li>
              <li>Analytical Thinking & Problem Solving</li>
              <li>Team Collaboration & Decision-Making</li>
              <li>Time Management & Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
