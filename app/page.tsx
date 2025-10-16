import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { LanguagesSection } from "@/components/portfolio/languages-section"
import { ObjectiveSection } from "@/components/portfolio/objective-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { SiteFooter } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <LanguagesSection />
      <ObjectiveSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
