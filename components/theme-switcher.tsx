"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/hooks/use-theme"
import { Palette, Moon, Sun, Zap, Waves } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { id: "dark", label: "Dark", icon: Moon, color: "bg-slate-900" },
    { id: "light", label: "Light", icon: Sun, color: "bg-slate-100" },
    { id: "purple", label: "Purple", icon: Zap, color: "bg-purple-600" },
    { id: "blue", label: "Blue", icon: Waves, color: "bg-blue-600" },
  ]

  const currentTheme = themes.find((t) => t.id === theme)
  const CurrentIcon = currentTheme?.icon || Palette

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="glass-hover text-muted-foreground hover:text-foreground">
          <CurrentIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.id}
              onClick={() => setTheme(themeOption.id as any)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${themeOption.color}`} />
                <Icon className="w-4 h-4" />
              </div>
              <span>{themeOption.label}</span>
              {theme === themeOption.id && <div className="w-2 h-2 bg-primary rounded-full ml-auto" />}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
