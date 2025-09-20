"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HomeSection } from "@/components/sections/home-section"
import { ScriptsSection } from "@/components/sections/scripts-section"
import { DiscordSection } from "@/components/sections/discord-section"
import { FaqSection } from "@/components/sections/faq-section"

export default function EclipseHub() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "scripts":
        return <ScriptsSection />
      case "discord":
        return <DiscordSection />
      case "faq":
        return <FaqSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-16">{renderSection()}</main>
    </div>
  )
}
