"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Copy, Check, Star, Download, Eye, Filter, Code2, Gamepad2, Wrench, Zap } from "lucide-react"

export function ScriptsSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedScript, setCopiedScript] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Scripts", icon: Code2, count: 247 },
    { id: "automation", label: "Automation", icon: Zap, count: 89 },
    { id: "gaming", label: "Gaming", icon: Gamepad2, count: 156 },
    { id: "utilities", label: "Utilities", icon: Wrench, count: 78 },
  ]

  const scripts = [
    {
      id: "1",
      title: "Advanced Auto-Clicker Pro",
      description:
        "Sophisticated clicking automation with customizable patterns, delays, and hotkeys. Perfect for repetitive tasks.",
      category: "automation",
      rating: 4.8,
      downloads: 15420,
      views: 45230,
      code: `// Advanced Auto-Clicker Pro v2.1
const autoClicker = {
  interval: 100,
  isRunning: false,
  
  start() {
    this.isRunning = true;
    this.clickLoop();
  },
  
  stop() {
    this.isRunning = false;
  },
  
  clickLoop() {
    if (!this.isRunning) return;
    
    // Simulate mouse click
    document.elementFromPoint(x, y)?.click();
    
    setTimeout(() => this.clickLoop(), this.interval);
  }
};

// Usage: autoClicker.start();`,
      tags: ["automation", "productivity", "mouse"],
      difficulty: "Intermediate",
      lastUpdated: "2 days ago",
    },
    {
      id: "2",
      title: "Resource Monitor Dashboard",
      description: "Real-time system monitoring with customizable alerts and performance tracking capabilities.",
      category: "utilities",
      rating: 4.9,
      downloads: 8930,
      views: 23450,
      code: `// Resource Monitor Dashboard v1.5
class ResourceMonitor {
  constructor() {
    this.metrics = {};
    this.alerts = [];
  }
  
  async getSystemInfo() {
    return {
      cpu: await this.getCPUUsage(),
      memory: await this.getMemoryUsage(),
      disk: await this.getDiskUsage()
    };
  }
  
  startMonitoring(interval = 5000) {
    setInterval(async () => {
      const metrics = await this.getSystemInfo();
      this.updateDashboard(metrics);
    }, interval);
  }
}

const monitor = new ResourceMonitor();
monitor.startMonitoring();`,
      tags: ["monitoring", "system", "dashboard"],
      difficulty: "Advanced",
      lastUpdated: "1 week ago",
    },
    {
      id: "3",
      title: "Smart Form Filler",
      description: "Intelligent form automation that learns from your input patterns and fills forms accurately.",
      category: "automation",
      rating: 4.7,
      downloads: 12340,
      views: 34560,
      code: `// Smart Form Filler v3.0
const formFiller = {
  profiles: {},
  
  createProfile(name, data) {
    this.profiles[name] = data;
  },
  
  fillForm(profileName) {
    const profile = this.profiles[profileName];
    if (!profile) return;
    
    Object.keys(profile).forEach(field => {
      const element = document.querySelector(\`[name="\${field}"]\`);
      if (element) element.value = profile[field];
    });
  },
  
  autoDetectFields() {
    // AI-powered field detection logic
    return this.detectCommonFields();
  }
};

// Usage: formFiller.fillForm('personal');`,
      tags: ["forms", "automation", "ai"],
      difficulty: "Beginner",
      lastUpdated: "5 days ago",
    },
  ]

  const copyToClipboard = async (code: string, scriptId: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedScript(scriptId)
      setTimeout(() => setCopiedScript(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const filteredScripts = scripts.filter(
    (script) =>
      script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Script Repository</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover, copy, and deploy powerful scripts crafted by our community of developers.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search scripts, tags, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass"
              />
            </div>
            <Button variant="outline" className="glass glass-hover bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="glass w-full justify-start overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredScripts.map((script) => (
                  <Card key={script.id} className="glass glass-hover group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                            {script.title}
                          </CardTitle>
                          <CardDescription className="text-sm">{script.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {script.difficulty}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {script.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {script.downloads.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {script.views.toLocaleString()}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        {/* Code Preview */}
                        <div className="relative">
                          <pre className="bg-muted/50 p-4 rounded-lg text-xs overflow-x-auto border">
                            <code className="text-muted-foreground font-mono">
                              {script.code.split("\n").slice(0, 8).join("\n")}
                              {script.code.split("\n").length > 8 && "\n..."}
                            </code>
                          </pre>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => copyToClipboard(script.code, script.id)}
                            className="absolute top-2 right-2 glass-hover"
                          >
                            {copiedScript === script.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {script.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-xs text-muted-foreground">Updated {script.lastUpdated}</span>
                          <Button size="sm" className="glow-hover">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
