"use client"

import { useState } from "react"
import {
  Users,
  Search,
  Plus,
  Mail,
  Phone,
  Bell,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  MessageSquare,
  FileText,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Sidebar } from "@/components/sidebar"

export default function ClientServices() {
  const [selectedClientType, setSelectedClientType] = useState("all")
  const [selectedManager, setSelectedManager] = useState("all")
  const [viewMode, setViewMode] = useState("overview")

  const clientMetrics = {
    totalClients: 847,
    activeMandates: 623,
    newThisMonth: 12,
    retentionRate: "96.8%",
    totalAUM: "$12.8B",
    avgClientSize: "$15.1M",
  }

  const clients = [
    {
      id: "1",
      name: "Sovereign Wealth Fund of Norway",
      type: "Sovereign Wealth",
      aum: "$1.9B",
      relationship: "Primary",
      performance: "+22.3%",
      riskProfile: "Conservative",
      lastContact: "2 days ago",
      status: "Active",
      manager: "Sarah Chen",
      onboardingDate: "Jan 2022",
      satisfactionScore: 9.2,
      nextReview: "Dec 20, 2024",
      keyContacts: [
        { name: "Maria Kowalski", role: "Director", email: "m.kowalski@nbim.no" },
        { name: "Erik Hansen", role: "Portfolio Manager", email: "e.hansen@nbim.no" },
      ],
    },
    {
      id: "2",
      name: "CalPERS Pension Fund",
      type: "Pension Fund",
      aum: "$2.8B",
      relationship: "Primary",
      performance: "+18.5%",
      riskProfile: "Moderate",
      lastContact: "1 week ago",
      status: "Active",
      manager: "Michael Rodriguez",
      onboardingDate: "Mar 2021",
      satisfactionScore: 8.9,
      nextReview: "Dec 18, 2024",
      keyContacts: [
        { name: "John Davidson", role: "CIO", email: "j.davidson@calpers.ca.gov" },
        { name: "Lisa Park", role: "Senior Analyst", email: "l.park@calpers.ca.gov" },
      ],
    },
    {
      id: "3",
      name: "Allianz Insurance Group",
      type: "Insurance",
      aum: "$1.2B",
      relationship: "Secondary",
      performance: "+12.7%",
      riskProfile: "Conservative",
      lastContact: "3 days ago",
      status: "Active",
      manager: "Emma Thompson",
      onboardingDate: "Sep 2022",
      satisfactionScore: 8.7,
      nextReview: "Jan 15, 2025",
      keyContacts: [
        { name: "Hans Mueller", role: "Investment Director", email: "h.mueller@allianz.com" },
        { name: "Sophie Weber", role: "Risk Manager", email: "s.weber@allianz.com" },
      ],
    },
    {
      id: "4",
      name: "Harvard University Endowment",
      type: "Endowment",
      aum: "$950M",
      relationship: "Primary",
      performance: "+15.2%",
      riskProfile: "Moderate",
      lastContact: "5 days ago",
      status: "Active",
      manager: "David Kim",
      onboardingDate: "Jun 2023",
      satisfactionScore: 9.1,
      nextReview: "Dec 22, 2024",
      keyContacts: [
        { name: "Robert Brown", role: "Treasurer", email: "r.brown@harvard.edu" },
        { name: "Jennifer Lee", role: "Investment Officer", email: "j.lee@harvard.edu" },
      ],
    },
    {
      id: "5",
      name: "Goldman Sachs Asset Management",
      type: "Asset Manager",
      aum: "$750M",
      relationship: "Secondary",
      performance: "+20.1%",
      riskProfile: "Aggressive",
      lastContact: "1 day ago",
      status: "Prospect",
      manager: "Lisa Wang",
      onboardingDate: "Pending",
      satisfactionScore: null,
      nextReview: "Dec 22, 2024",
      keyContacts: [
        { name: "James Wilson", role: "Managing Director", email: "j.wilson@gs.com" },
        { name: "Rachel Green", role: "VP Investments", email: "r.green@gs.com" },
      ],
    },
  ]

  const recentActivities = [
    {
      id: "1",
      client: "CalPERS Pension Fund",
      activity: "Portfolio rebalancing completed",
      amount: "$45M",
      time: "2 hours ago",
      type: "transaction",
      status: "Completed",
      manager: "Michael Rodriguez",
    },
    {
      id: "2",
      client: "Sovereign Wealth Fund",
      activity: "Quarterly review meeting scheduled",
      amount: "",
      time: "4 hours ago",
      type: "meeting",
      status: "Scheduled",
      manager: "Sarah Chen",
    },
    {
      id: "3",
      client: "Harvard Endowment",
      activity: "Risk assessment report delivered",
      amount: "",
      time: "1 day ago",
      type: "report",
      status: "Delivered",
      manager: "David Kim",
    },
    {
      id: "4",
      client: "Allianz Insurance",
      activity: "New mandate signed",
      amount: "$200M",
      time: "2 days ago",
      type: "contract",
      status: "Executed",
      manager: "Emma Thompson",
    },
  ]

  const upcomingMeetings = [
    {
      id: "1",
      client: "CalPERS Pension Fund",
      meeting: "Quarterly Business Review",
      date: "Dec 18, 2024",
      time: "2:00 PM EST",
      type: "In-person",
      location: "New York Office",
      attendees: 6,
      agenda: "Q4 Performance Review, 2025 Strategy",
    },
    {
      id: "2",
      client: "Sovereign Wealth Fund",
      meeting: "Strategy Discussion",
      date: "Dec 20, 2024",
      time: "10:00 AM EST",
      type: "Virtual",
      location: "Zoom",
      attendees: 4,
      agenda: "ESG Integration, Risk Framework",
    },
    {
      id: "3",
      client: "Goldman Sachs AM",
      meeting: "Due Diligence Call",
      date: "Dec 22, 2024",
      time: "3:00 PM EST",
      type: "Virtual",
      location: "Teams",
      attendees: 8,
      agenda: "Onboarding Process, Compliance Review",
    },
  ]

  const clientSatisfaction = [
    { category: "Service Quality", score: 9.1, trend: "+0.2" },
    { category: "Performance", score: 8.8, trend: "+0.5" },
    { category: "Communication", score: 9.3, trend: "+0.1" },
    { category: "Reporting", score: 8.9, trend: "+0.3" },
    { category: "Innovation", score: 8.6, trend: "+0.4" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Client Services</h1>
                <p className="text-slate-600">Institutional client relationship management and services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input placeholder="Search clients..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Plus className="w-4 h-4 mr-2" />
                New Client
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Client Metrics Overview */}
          <div className="grid md:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Total Clients</div>
                <div className="text-2xl font-bold text-slate-900">{clientMetrics.totalClients}</div>
                <Badge variant="default" className="text-xs mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.2%
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Active Mandates</div>
                <div className="text-2xl font-bold text-slate-900">{clientMetrics.activeMandates}</div>
                <Badge variant="default" className="text-xs mt-1">
                  Active
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">New This Month</div>
                <div className="text-2xl font-bold text-emerald-600">{clientMetrics.newThisMonth}</div>
                <Badge variant="default" className="text-xs mt-1">
                  +20%
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Retention Rate</div>
                <div className="text-2xl font-bold text-emerald-600">{clientMetrics.retentionRate}</div>
                <Badge variant="default" className="text-xs mt-1">
                  Excellent
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Total AUM</div>
                <div className="text-2xl font-bold text-slate-900">{clientMetrics.totalAUM}</div>
                <Badge variant="default" className="text-xs mt-1">
                  +8.2%
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Avg Client Size</div>
                <div className="text-2xl font-bold text-slate-900">{clientMetrics.avgClientSize}</div>
                <Badge variant="default" className="text-xs mt-1">
                  +3.1%
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Client Overview</TabsTrigger>
              <TabsTrigger value="relationships">Relationships</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="meetings">Meetings</TabsTrigger>
              <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Client List */}
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Institutional Clients</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Select value={selectedClientType} onValueChange={setSelectedClientType}>
                            <SelectTrigger className="w-40">
                              <SelectValue placeholder="Filter by type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Types</SelectItem>
                              <SelectItem value="pension">Pension Funds</SelectItem>
                              <SelectItem value="sovereign">Sovereign Wealth</SelectItem>
                              <SelectItem value="insurance">Insurance</SelectItem>
                              <SelectItem value="endowment">Endowments</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select value={selectedManager} onValueChange={setSelectedManager}>
                            <SelectTrigger className="w-40">
                              <SelectValue placeholder="Filter by manager" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Managers</SelectItem>
                              <SelectItem value="sarah">Sarah Chen</SelectItem>
                              <SelectItem value="michael">Michael Rodriguez</SelectItem>
                              <SelectItem value="emma">Emma Thompson</SelectItem>
                              <SelectItem value="david">David Kim</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="outline" size="sm">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {clients.map((client) => (
                          <div key={client.id} className="p-6 border rounded-lg hover:bg-slate-50 cursor-pointer">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-4">
                                <Avatar className="w-12 h-12">
                                  <AvatarFallback>
                                    {client.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")
                                      .slice(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-semibold text-lg">{client.name}</h3>
                                  <div className="flex items-center space-x-3 text-sm text-slate-600">
                                    <Badge variant="outline" className="text-xs">
                                      {client.type}
                                    </Badge>
                                    <span>•</span>
                                    <span>{client.manager}</span>
                                    <span>•</span>
                                    <span>Since {client.onboardingDate}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold">{client.aum}</div>
                                <div className="flex items-center space-x-2">
                                  <Badge
                                    variant={client.status === "Active" ? "default" : "secondary"}
                                    className="text-xs"
                                  >
                                    {client.status}
                                  </Badge>
                                  {client.satisfactionScore && (
                                    <span className="text-sm text-emerald-600 font-medium">
                                      ★ {client.satisfactionScore}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-5 gap-4 text-sm mb-4">
                              <div>
                                <div className="text-slate-500">Performance</div>
                                <div className="font-medium text-emerald-600">{client.performance}</div>
                              </div>
                              <div>
                                <div className="text-slate-500">Risk Profile</div>
                                <div className="font-medium">{client.riskProfile}</div>
                              </div>
                              <div>
                                <div className="text-slate-500">Relationship</div>
                                <div className="font-medium">{client.relationship}</div>
                              </div>
                              <div>
                                <div className="text-slate-500">Last Contact</div>
                                <div className="font-medium">{client.lastContact}</div>
                              </div>
                              <div>
                                <div className="text-slate-500">Next Review</div>
                                <div className="font-medium">{client.nextReview}</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Mail className="w-4 h-4 mr-1" />
                                  Email
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Phone className="w-4 h-4 mr-1" />
                                  Call
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  Schedule
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="w-4 h-4 mr-1" />
                                  Message
                                </Button>
                              </div>
                              <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions & Stats */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Client
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Meeting
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Report
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Newsletter
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Client Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Pension Funds</span>
                          <span className="font-medium">35%</span>
                        </div>
                        <Progress value={35} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Sovereign Wealth</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Insurance</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <Progress value={20} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Endowments</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Others</span>
                          <span className="font-medium">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="relationships">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Contacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {clients.slice(0, 3).map((client) => (
                        <div key={client.id} className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">{client.name}</h4>
                          <div className="space-y-3">
                            {client.keyContacts.map((contact, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="text-xs">
                                    {contact.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{contact.name}</div>
                                  <div className="text-xs text-slate-600">{contact.role}</div>
                                  <div className="text-xs text-slate-500">{contact.email}</div>
                                </div>
                                <div className="flex space-x-1">
                                  <Button variant="outline" size="sm">
                                    <Mail className="w-3 h-3" />
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Phone className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Relationship Mapping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                      <div className="text-center text-slate-500">
                        <Users className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                        <p className="font-medium">Client Relationship Network</p>
                        <p className="text-sm">Interactive relationship mapping and hierarchy visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="text-xs">
                              {activity.type}
                            </Badge>
                            <Badge
                              variant={activity.status === "Completed" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {activity.status}
                            </Badge>
                          </div>
                          <span className="text-xs text-slate-500">{activity.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{activity.client}</div>
                            <div className="text-sm text-slate-600">{activity.activity}</div>
                            <div className="text-xs text-slate-500">Manager: {activity.manager}</div>
                          </div>
                          {activity.amount && (
                            <div className="text-right">
                              <div className="font-semibold text-emerald-600">{activity.amount}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="meetings">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Meetings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMeetings.map((meeting) => (
                      <div key={meeting.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{meeting.client}</h4>
                            <div className="text-sm text-slate-600">{meeting.meeting}</div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {meeting.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <div className="text-slate-500">Date & Time</div>
                            <div className="font-medium">{meeting.date}</div>
                            <div className="text-xs text-slate-600">{meeting.time}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Location</div>
                            <div className="font-medium">{meeting.location}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Attendees</div>
                            <div className="font-medium">{meeting.attendees} people</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Agenda</div>
                            <div className="font-medium text-xs">{meeting.agenda}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-1" />
                            Agenda
                          </Button>
                          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                            Join Meeting
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="satisfaction">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Satisfaction Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {clientSatisfaction.map((item, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{item.category}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold">{item.score}</span>
                              <span
                                className={`text-sm ${item.trend.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}
                              >
                                {item.trend}
                              </span>
                            </div>
                          </div>
                          <Progress value={item.score * 10} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Satisfaction Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                      <div className="text-center text-slate-500">
                        <TrendingUp className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                        <p className="font-medium">Satisfaction Trend Chart</p>
                        <p className="text-sm">Historical satisfaction scores and trends</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
