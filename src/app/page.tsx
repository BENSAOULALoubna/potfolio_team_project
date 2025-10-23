import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { TeamSection } from "@/components/sections/team-section"
import { StatisticsSection } from "@/components/sections/statistics-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ValuesSection } from "@/components/sections/values-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { CTASection } from "@/components/sections/cta-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <StatisticsSection />
      <ExpertiseSection />
      <TechStackSection />
      <ProcessSection />
      <ValuesSection />
      <AchievementsSection />
      {/* <StatsVisualizationSection /> */}
      <CTASection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}
