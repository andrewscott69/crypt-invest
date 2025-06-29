"use client"

import { useState } from "react"
import { Calendar, Search, Download, Star, BarChart3, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"

export default function ResearchAnalytics() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const researchReports = [
    {
      id: "1",
      title: "Q4 2024 Digital Asset Market Outlook",
      type: "Market Analysis",
      category: "market",
      date: "Dec 15, 2024",
      author: "Chief Investment Officer",
      rating: "Buy",
      confidence: "High",
      summary:
        "Comprehensive analysis of institutional adoption trends and regulatory developments shaping the digital asset landscape for 2025.",
      tags: ["Bitcoin", "Ethereum", "Regulation", "Institutional"],
      downloads: 2400,
      pages: 45,
      keyFindings: [
        "Institutional adoption accelerating with $12B+ inflows expected",
        "Regulatory clarity emerging in major markets",
        "ETF approvals driving mainstream acceptance",
      ],
    },
    {
      id: "2",
      title: "Ethereum 2.0 Staking Economics Deep Dive",
      type: "Technical Analysis",
      category: "technical",
      date: "Dec 12, 2024",
      author: "Blockchain Research Team",
      rating: "Strong Buy",
      confidence: "High",
      summary:
        "In-depth analysis of Ethereum staking yields, validator economics, and long-term sustainability metrics post-merge.",
      tags: ["Ethereum", "Staking", "DeFi", "Yield"],
      downloads: 1800,
      pages: 32,
      keyFindings: [
        "Staking yields stabilizing around 4-6% annually",
        "Validator economics remain attractive long-term",
        "Liquid staking derivatives gaining institutional traction",
      ],
    },
    {
      id: "3",
      title: "Central Bank Digital Currencies Impact Assessment",
      type: "Policy Research",
      category: "policy",
      date: "Dec 10, 2024",
      author: "Policy Research Division",
      rating: "Neutral",
      confidence: "Medium",
      summary:
        "Analysis of CBDC developments across major economies and implications for cryptocurrency markets and adoption.",
      tags: ["CBDC", "Policy", "Regulation", "Macro"],
      downloads: 1200,
      pages: 28,
      keyFindings: [
        "CBDCs complement rather than replace cryptocurrencies",
        "Privacy concerns driving crypto adoption",
        "Interoperability standards still developing",
      ],
    },
    {
      id: "4",
      title: "Layer 1 Blockchain Competitive Analysis",
      type: "Sector Analysis",
      category: "sector",
      date: "Dec 8, 2024",
      author: "Technology Research Team",
      rating: "Buy",
      confidence: "High",
      summary:
        "Comparative analysis of major Layer 1 blockchains including performance, adoption, and ecosystem development metrics.",
      tags: ["Solana", "Avalanche", "Cardano", "Technology"],
      downloads: 950,
      pages: 38,
      keyFindings: [
        "Solana leading in transaction throughput and DeFi TVL",
        "Avalanche gaining enterprise adoption",
        "Multi-chain future becoming reality",
      ],
    },
  ]

  const marketInsights = [
    {
      title: "Institutional Bitcoin Accumulation Accelerates",
      impact: "High",
      timeframe: "Short-term",
      confidence: "95%",
      description:
        "Corporate treasuries and pension funds increasing Bitcoin allocations by 340% QoQ, signaling strong institutional demand.",
      implications: ["Price support at current levels", "Reduced volatility expected", "Supply squeeze potential"],
    },
    {
      title: "DeFi TVL Reaches New All-Time High",
      impact: "Medium",
      timeframe: "Medium-term",
      confidence: "87%",
      description:
        "Total Value Locked in DeFi protocols surpasses $180B, driven by institutional participation and yield farming strategies.",
      implications: ["Increased protocol revenues", "Higher staking rewards", "Cross-chain bridge growth"],
    },
    {
      title: "Regulatory Clarity Emerges in Major Markets",
      impact: "High",
      timeframe: "Long-term",
      confidence: "92%",
      description:
        "Clear regulatory frameworks established in US, EU, and Asia-Pacific regions, reducing compliance uncertainty.",
      implications: ["Institutional adoption acceleration", "Compliance costs stabilization", "Market maturation"],
    },
  ]

  const priceTargets = [
    {
      asset: "BTC",
      current: "$48,750",
      target: "$65,000",
      timeframe: "12M",
      confidence: "High",
      change: "+33%",
      analyst: "Sarah Chen",
      reasoning: "Institutional adoption and supply constraints",
    },
    {
      asset: "ETH",
      current: "$2,850",
      target: "$4,200",
      timeframe: "12M",
      confidence: "High",
      change: "+47%",
      analyst: "Michael Rodriguez",
      reasoning: "Staking yields and DeFi ecosystem growth",
    },
    {
      asset: "SOL",
      current: "$98.50",
      target: "$180",
      timeframe: "12M",
      confidence: "Medium",
      change: "+83%",
      analyst: "Emma Thompson",
      reasoning: "Technical improvements and ecosystem expansion",
    },
    {
      asset: "AVAX",
      current: "$24.80",
      target: "$45",
      timeframe: "12M",
      confidence: "Medium",
      change: "+81%",
      analyst: "David Kim",
      reasoning: "Enterprise adoption and subnet growth",
    },
  ]

  const filteredReports =
    selectedCategory === "all"
      ? researchReports
      : researchReports.filter((report) => report.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Research & Analytics</h1>
                <p className="text-slate-600">Institutional-grade market intelligence and investment research</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input placeholder="Search research..." className="pl-10 w-64" />
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
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
          <Tabs defaultValue="reports" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reports">Research Reports</TabsTrigger>
              <TabsTrigger value="insights">Market Insights</TabsTrigger>
              <TabsTrigger value="targets">Price Targets</TabsTrigger>
              <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="reports">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Research Reports</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-40">
                              <SelectValue placeholder="Filter by category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Categories</SelectItem>
                              <SelectItem value="market">Market Analysis</SelectItem>
                              <SelectItem value="technical">Technical Analysis</SelectItem>
                              <SelectItem value="policy">Policy Research</SelectItem>
                              <SelectItem value="sector">Sector Analysis</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="date">Latest</SelectItem>
                              <SelectItem value="downloads">Popular</SelectItem>
                              <SelectItem value="rating">Rating</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {filteredReports.map((report) => (
                          <div
                            key={report.id}
                            className="p-6 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="font-semibold text-xl">{report.title}</h3>
                                  <Badge variant="outline">{report.type}</Badge>
                                </div>
                                <p className="text-slate-600 mb-3 leading-relaxed">{report.summary}</p>

                                <div className="mb-4">
                                  <h4 className="font-medium text-sm mb-2">Key Findings:</h4>
                                  <ul className="text-sm text-slate-600 space-y-1">
                                    {report.keyFindings.map((finding, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        {finding}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex items-center space-x-6 text-sm text-slate-500">
                                  <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {report.date}
                                  </span>
                                  <span>{report.author}</span>
                                  <span>{report.pages} pages</span>
                                  <span>{report.downloads.toLocaleString()} downloads</span>
                                </div>
                              </div>

                              <div className="ml-6 text-right">
                                <Badge
                                  variant={
                                    report.rating === "Strong Buy"
                                      ? "default"
                                      : report.rating === "Buy"
                                        ? "default"
                                        : report.rating === "Neutral"
                                          ? "secondary"
                                          : "destructive"
                                  }
                                  className="mb-2"
                                >
                                  {report.rating}
                                </Badge>
                                <div className="flex items-center mb-2">
                                  <Star className="w-4 h-4 text-amber-500 mr-1" />
                                  <span className="text-sm">4.8</span>
                                </div>
                                <div className="text-xs text-slate-500">{report.confidence} Confidence</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {report.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Download className="w-4 h-4 mr-1" />
                                  Download
                                </Button>
                                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                                  Read Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Research Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="font-medium text-sm">Upcoming</div>
                          <div className="text-xs text-slate-600 mt-1">Bitcoin Halving Impact Analysis - Dec 18</div>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="font-medium text-sm">This Week</div>
                          <div className="text-xs text-slate-600 mt-1">DeFi Yield Farming Strategies - Dec 20</div>
                        </div>
                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                          <div className="font-medium text-sm">Next Week</div>
                          <div className="text-xs text-slate-600 mt-1">2025 Crypto Market Predictions - Dec 23</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Downloads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>Bitcoin ETF Analysis</span>
                          <span className="text-slate-500">2.4k</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Ethereum Roadmap 2025</span>
                          <span className="text-slate-500">1.8k</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>DeFi Risk Assessment</span>
                          <span className="text-slate-500">1.2k</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Regulatory Landscape</span>
                          <span className="text-slate-500">950</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Research Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Accuracy Rate</span>
                          <span className="font-semibold text-emerald-600">87.3%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Average Return</span>
                          <span className="font-semibold text-emerald-600">+24.8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Hit Rate</span>
                          <span className="font-semibold">73.2%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Market Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {marketInsights.map((insight, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-lg">{insight.title}</h3>
                            <div className="flex items-center space-x-2">
                              <Badge
                                variant={
                                  insight.impact === "High"
                                    ? "destructive"
                                    : insight.impact === "Medium"
                                      ? "default"
                                      : "secondary"
                                }
                                className="text-xs"
                              >
                                {insight.impact} Impact
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {insight.timeframe}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-slate-600 text-sm mb-3">{insight.description}</p>
                          <div className="mb-3">
                            <div className="text-xs text-slate-500 mb-1">Key Implications:</div>
                            <ul className="text-xs text-slate-600 space-y-1">
                              {insight.implications.map((implication, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                  {implication}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-500">Confidence: {insight.confidence}</span>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Market Sentiment Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Institutional Sentiment</span>
                          <Badge variant="default">Bullish</Badge>
                        </div>
                        <div className="text-sm text-slate-600 mb-2">
                          85% of institutional investors remain optimistic about digital assets
                        </div>
                        <div className="text-xs text-slate-500">Based on survey of 200+ institutions</div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Retail Sentiment</span>
                          <Badge variant="secondary">Neutral</Badge>
                        </div>
                        <div className="text-sm text-slate-600 mb-2">
                          Mixed signals from retail investors amid market volatility
                        </div>
                        <div className="text-xs text-slate-500">Social sentiment analysis across platforms</div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Fear & Greed Index</span>
                          <Badge variant="default">68 - Greed</Badge>
                        </div>
                        <div className="text-sm text-slate-600 mb-2">
                          Market showing signs of optimism with controlled risk appetite
                        </div>
                        <div className="text-xs text-slate-500">Composite of 7 market indicators</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="targets">
              <Card>
                <CardHeader>
                  <CardTitle>Analyst Price Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {priceTargets.map((target, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="font-bold text-sm">{target.asset}</span>
                          </div>
                          <Badge variant={target.confidence === "High" ? "default" : "secondary"} className="text-xs">
                            {target.confidence}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <div className="text-xs text-slate-500">Current Price</div>
                            <div className="font-semibold">{target.current}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500">Price Target</div>
                            <div className="font-semibold text-emerald-600">{target.target}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs text-slate-500">Upside</div>
                              <div className="font-semibold text-emerald-600">{target.change}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-slate-500">Timeframe</div>
                              <div className="font-semibold">{target.timeframe}</div>
                            </div>
                          </div>
                          <div className="pt-2 border-t">
                            <div className="text-xs text-slate-500">Analyst: {target.analyst}</div>
                            <div className="text-xs text-slate-600 mt-1">{target.reasoning}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Analytics Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                      <div className="text-center text-slate-500">
                        <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                        <p className="font-medium">Interactive Analytics Platform</p>
                        <p className="text-sm">Real-time market data visualization and analysis tools</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Research Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-slate-600">Accuracy Rate</span>
                        <span className="font-semibold text-emerald-600">87.3%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-slate-600">Average Return</span>
                        <span className="font-semibold text-emerald-600">+24.8%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-slate-600">Hit Rate</span>
                        <span className="font-semibold">73.2%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-slate-600">Risk-Adjusted Return</span>
                        <span className="font-semibold text-emerald-600">2.34</span>
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
