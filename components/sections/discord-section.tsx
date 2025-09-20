"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Users, Hash, Volume2, ExternalLink, Crown, Shield, Zap } from "lucide-react"

export function DiscordSection() {
  const serverStats = {
    members: 12847,
    online: 3421,
    channels: 25,
    roles: 12,
  }

  const channels = [
    {
      name: "general",
      type: "text",
      description: "General discussion and community chat",
      members: 8234,
      icon: Hash,
    },
    {
      name: "script-showcase",
      type: "text",
      description: "Share your latest scripts and get feedback",
      members: 5432,
      icon: Hash,
    },
    {
      name: "help-support",
      type: "text",
      description: "Get help with scripts and troubleshooting",
      members: 6789,
      icon: Hash,
    },
    {
      name: "announcements",
      type: "text",
      description: "Official updates and important news",
      members: 12847,
      icon: Hash,
    },
    {
      name: "Voice Lounge",
      type: "voice",
      description: "Casual voice chat and collaboration",
      members: 234,
      icon: Volume2,
    },
    {
      name: "Dev Sessions",
      type: "voice",
      description: "Live coding and development sessions",
      members: 156,
      icon: Volume2,
    },
  ]

  const staff = [
    {
      name: "EclipseAdmin",
      role: "Server Owner",
      avatar: "/admin-interface.png",
      status: "online",
      badge: Crown,
      badgeColor: "text-yellow-400",
    },
    {
      name: "ScriptMaster",
      role: "Lead Developer",
      avatar: "/developer-working.png",
      status: "online",
      badge: Shield,
      badgeColor: "text-blue-400",
    },
    {
      name: "CommunityMod",
      role: "Moderator",
      avatar: "/online-forum-moderator.png",
      status: "away",
      badge: Shield,
      badgeColor: "text-green-400",
    },
    {
      name: "TechSupport",
      role: "Support Specialist",
      avatar: "/people-supporting-each-other.png",
      status: "online",
      badge: Zap,
      badgeColor: "text-purple-400",
    },
  ]

  const recentActivity = [
    {
      user: "DevCoder123",
      action: "shared a new automation script",
      channel: "script-showcase",
      time: "2 minutes ago",
      avatar: "/abstract-geometric-shapes.png",
    },
    {
      user: "AutomationPro",
      action: "asked for help with API integration",
      channel: "help-support",
      time: "15 minutes ago",
      avatar: "/abstract-geometric-shapes.png",
    },
    {
      user: "ScriptNinja",
      action: "joined the server",
      channel: "general",
      time: "1 hour ago",
      avatar: "/diverse-group-collaborating.png",
    },
    {
      user: "CodeWizard",
      action: "started a voice session",
      channel: "Dev Sessions",
      time: "2 hours ago",
      avatar: "/abstract-geometric-shapes.png",
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discord Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our thriving Discord community to connect with fellow developers, get support, and stay updated.
          </p>
        </div>

        {/* Server Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{serverStats.members.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3"></div>
              <div className="text-2xl font-bold">{serverStats.online.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Online Now</div>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Hash className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{serverStats.channels}</div>
              <div className="text-sm text-muted-foreground">Channels</div>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{serverStats.roles}</div>
              <div className="text-sm text-muted-foreground">Roles</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Channels */}
          <div className="lg:col-span-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="w-5 h-5" />
                  Server Channels
                </CardTitle>
                <CardDescription>Explore our organized channels for different topics and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {channels.map((channel, index) => {
                    const Icon = channel.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg glass-hover cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`w-5 h-5 ${channel.type === "voice" ? "text-green-400" : "text-muted-foreground"}`}
                          />
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors">{channel.name}</div>
                            <div className="text-sm text-muted-foreground">{channel.description}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {channel.members.toLocaleString()}
                          </Badge>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass mt-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>See what's happening in the community right now</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{activity.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm">
                          <span className="font-medium text-primary">{activity.user}</span> {activity.action} in{" "}
                          <span className="font-medium">#{activity.channel}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Server */}
            <Card className="glass glow">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Join Our Discord</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with the Eclipse Hub community and get instant support
                </p>
                <Button className="w-full glow-hover bg-[#5865F2] hover:bg-[#4752C4] text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Discord Server
                </Button>
              </CardContent>
            </Card>

            {/* Staff Team */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Staff Team</CardTitle>
                <CardDescription>Meet our dedicated team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staff.map((member, index) => {
                    const BadgeIcon = member.badge
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                              member.status === "online"
                                ? "bg-green-400"
                                : member.status === "away"
                                  ? "bg-yellow-400"
                                  : "bg-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{member.name}</span>
                            <BadgeIcon className={`w-4 h-4 ${member.badgeColor}`} />
                          </div>
                          <div className="text-xs text-muted-foreground">{member.role}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Server Rules */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Server Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">1.</span>
                    <span>Be respectful to all community members</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">2.</span>
                    <span>No spam or self-promotion without permission</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">3.</span>
                    <span>Keep discussions relevant to channels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">4.</span>
                    <span>No malicious scripts or harmful content</span>
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
