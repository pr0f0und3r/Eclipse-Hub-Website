"use client"

import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Home, Code, MessageCircle, HelpCircle } from "lucide-react"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: "home", label: "Home", icon: Home },
    { id: "scripts", label: "Scripts", icon: Code },
    { id: "discord", label: "Discord", icon: MessageCircle },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ]

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Eclipse Hub
            </span>
          </div>

          <div className="flex items-center space-x-1">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onSectionChange(section.id)}
                  className={`glass-hover ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {section.label}
                </Button>
              )
            })}

            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
