"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Shield, Users, Code2, Sparkles, Download } from "lucide-react"

export function HomeSection() {
  const features = [
    {
      icon: Code2,
      title: "Premium Scripts",
      description: "Access high-quality, verified scripts with detailed documentation and regular updates.",
      stats: "500+ Scripts",
    },
    {
      icon: Shield,
      title: "Secure Environment",
      description: "All scripts are tested and verified in a controlled environment for maximum safety.",
      stats: "100% Verified",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join thousands of developers and enthusiasts sharing knowledge and collaborating.",
      stats: "10K+ Members",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with instant script deployment and real-time updates.",
      stats: "< 1s Load Time",
    },
  ]

  const recentUpdates = [
    {
      title: "Advanced Automation Suite v2.1",
      description: "Enhanced workflow automation with new triggers and actions",
      type: "Update",
      date: "2 hours ago",
    },
    {
      title: "Security Patch Release",
      description: "Important security improvements and bug fixes",
      type: "Security",
      date: "1 day ago",
    },
    {
      title: "New Developer Tools",
      description: "Debugging utilities and performance monitoring tools",
      type: "Feature",
      date: "3 days ago",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">Welcome to the Future of Scripting</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Eclipse Hub
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            The ultimate platform for developers, gamers, and enthusiasts seeking powerful scripting tools, automation
            solutions, and a thriving community ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="glass-hover glow-hover bg-primary text-primary-foreground">
              <Download className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover bg-transparent">
              Explore Scripts
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Eclipse Hub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of functionality, security, and community-driven innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="glass glass-hover glow-hover group">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {feature.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about the newest features, improvements, and community highlights.
            </p>
          </div>

          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="glass glass-hover">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{update.title}</h3>
                        <Badge variant={update.type === "Security" ? "destructive" : "secondary"} className="text-xs">
                          {update.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{update.description}</p>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="glass-hover">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass glow p-8">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of developers and enthusiasts who trust Eclipse Hub for their scripting needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground glow-hover">
                  Browse Scripts
                </Button>
                <Button size="lg" variant="outline" className="glass glass-hover bg-transparent">
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
