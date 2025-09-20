"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, Shield, Code, Zap, HelpCircle, ExternalLink, MessageCircle } from "lucide-react"

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "general", label: "General", icon: HelpCircle, count: 8 },
    { id: "scripts", label: "Scripts", icon: Code, count: 12 },
    { id: "security", label: "Security", icon: Shield, count: 6 },
    { id: "technical", label: "Technical", icon: Zap, count: 9 },
  ]

  const faqs = {
    general: [
      {
        question: "What is Eclipse Hub?",
        answer:
          "Eclipse Hub is an advanced, all-in-one scripting platform designed for developers, gamers, and enthusiasts. We provide high-quality scripts, automation tools, and a thriving community ecosystem with a focus on security, usability, and modern design.",
        tags: ["platform", "overview"],
      },
      {
        question: "How do I get started with Eclipse Hub?",
        answer:
          "Getting started is easy! Simply browse our script repository, join our Discord community for support, and start exploring the tools that match your needs. All scripts come with detailed documentation and installation instructions.",
        tags: ["getting-started", "beginner"],
      },
      {
        question: "Is Eclipse Hub free to use?",
        answer:
          "Yes, Eclipse Hub offers a comprehensive free tier with access to most scripts and community features. We also offer premium subscriptions with additional benefits like priority support, exclusive scripts, and advanced features.",
        tags: ["pricing", "free"],
      },
      {
        question: "Can I contribute my own scripts?",
        answer:
          "We encourage community contributions. You can submit your scripts through our Discord server or contact our moderation team. All submissions go through a review process to ensure quality and security standards.",
        tags: ["contribution", "community"],
      },
    ],
    scripts: [
      {
        question: "How do I install and run scripts?",
        answer:
          "Each script comes with detailed installation instructions. Generally, you'll copy the script code, paste it into your preferred environment (browser console, automation tool, etc.), and follow the specific setup steps provided in the documentation.",
        tags: ["installation", "usage"],
      },
      {
        question: "Are the scripts safe to use?",
        answer:
          "Yes, all scripts in our repository are thoroughly reviewed and tested by our security team. We maintain strict quality standards and regularly update scripts to ensure they remain safe and functional.",
        tags: ["safety", "security"],
      },
      {
        question: "Can I modify the scripts for my needs?",
        answer:
          "Most scripts are provided with open licenses that allow modification. Check the specific license information for each script. We encourage customization and welcome improved versions back to the community.",
        tags: ["modification", "customization"],
      },
      {
        question: "What if a script doesn't work?",
        answer:
          "If you encounter issues, first check the script's documentation and requirements. If problems persist, reach out on our Discord support channels or report the issue. Our community and support team are always ready to help.",
        tags: ["troubleshooting", "support"],
      },
    ],
    security: [
      {
        question: "How do you ensure script security?",
        answer:
          "We employ multiple security measures including code review by experienced developers, automated security scanning, sandboxed testing environments, and community reporting systems. Every script is verified before publication.",
        tags: ["security", "verification"],
      },
      {
        question: "What should I do if I find a security issue?",
        answer:
          "Please report security concerns immediately through our Discord server or contact our security team directly. We take all security reports seriously and respond quickly to address any issues.",
        tags: ["reporting", "security"],
      },
      {
        question: "Do scripts access my personal data?",
        answer:
          "Scripts are designed to be transparent about data access. Each script clearly documents what data it accesses and why. We prohibit scripts that collect personal information without explicit user consent and clear justification.",
        tags: ["privacy", "data"],
      },
    ],
    technical: [
      {
        question: "What platforms are supported?",
        answer:
          "Our scripts support a wide range of platforms including Windows, macOS, Linux, and various browsers. Each script specifies its compatibility requirements and supported environments.",
        tags: ["compatibility", "platforms"],
      },
      {
        question: "Do I need programming knowledge?",
        answer:
          "Not necessarily! Many scripts are designed for easy use with simple copy-paste installation. However, basic understanding of the target platform (browser, automation tool, etc.) is helpful for troubleshooting.",
        tags: ["requirements", "beginner"],
      },
      {
        question: "How often are scripts updated?",
        answer:
          "Scripts are updated regularly based on user feedback, platform changes, and security requirements. Popular scripts typically receive updates monthly, while others are updated as needed.",
        tags: ["updates", "maintenance"],
      },
    ],
  }

  const guides = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      icon: BookOpen,
      topics: ["Account Setup", "First Script", "Community Guidelines"],
      readTime: "10 min",
    },
    {
      title: "Script Development Best Practices",
      description: "Learn how to create high-quality scripts",
      icon: Code,
      topics: ["Code Standards", "Documentation", "Testing"],
      readTime: "25 min",
    },
    {
      title: "Security Guidelines",
      description: "Understanding safety and security measures",
      icon: Shield,
      topics: ["Safe Usage", "Risk Assessment", "Reporting Issues"],
      readTime: "15 min",
    },
    {
      title: "Advanced Automation Techniques",
      description: "Master complex scripting scenarios",
      icon: Zap,
      topics: ["Complex Workflows", "Integration", "Optimization"],
      readTime: "35 min",
    },
  ]

  const filterFaqs = (categoryFaqs: any[]) => {
    if (!searchQuery) return categoryFaqs
    return categoryFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help & Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions, explore guides, and learn how to make the most of Eclipse Hub.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQs and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="glass w-full justify-start overflow-x-auto mb-8">
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

              {Object.entries(faqs).map(([categoryId, categoryFaqs]) => {
                const currentCategory = categories.find((cat) => cat.id === categoryId)
                const CategoryIcon = currentCategory?.icon

                return (
                  <TabsContent key={categoryId} value={categoryId}>
                    <Card className="glass">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {CategoryIcon && <CategoryIcon className="w-5 h-5" />}
                          {currentCategory?.label} Questions
                        </CardTitle>
                        <CardDescription>
                          Frequently asked questions about {currentCategory?.label.toLowerCase()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {filterFaqs(categoryFaqs).map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="text-left hover:text-primary">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-3">
                                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {faq.tags.map((tag: string) => (
                                      <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Help */}
            <Card className="glass glow">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Need More Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find what you're looking for? Our community is here to help!
                </p>
                <Button className="w-full glow-hover">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask on Discord
                </Button>
              </CardContent>
            </Card>

            {/* Guides */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Popular Guides</CardTitle>
                <CardDescription>In-depth tutorials and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guides.map((guide, index) => {
                    const Icon = guide.icon
                    return (
                      <div
                        key={index}
                        className="p-3 rounded-lg glass-hover cursor-pointer group border border-border/50"
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-primary mt-1" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                              {guide.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-2">{guide.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {guide.topics.slice(0, 2).map((topic) => (
                                  <Badge key={topic} variant="outline" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                                {guide.topics.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{guide.topics.length - 2}
                                  </Badge>
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Still Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span>Join our Discord community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>Browse documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Report security issues</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
