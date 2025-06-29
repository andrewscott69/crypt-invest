"use client"

import { useState } from "react"
import { AlertTriangle, Activity, Bell, RefreshCw, Download, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

export default function RiskManagement() {
  const [riskProfile, setRiskProfile] = useState("moderate")
  const [timeframe, setTimeframe] = useState("30d")
  const [viewMode, setViewMode] = useState("overview")

  const riskOverview = {
    portfolioVaR: "$125M",
    riskScore: "6.8/10",
    stressTestStatus: "Pass",
    complianceStatus: "98.5%",
    activeAlerts: 4,
    criticalAlerts: 1,
  }

  const riskAlerts = [
    {
      id: "1",
      level: "Critical",
      title: "Concentration Risk Threshold Exceeded",
      description: "Bitcoin allocation has exceeded 50% limit in Portfolio Alpha",
      time: "15 minutes ago",
      action: "Immediate rebalancing required",
      portfolio: "Portfolio Alpha",
      impact: "High",
      status: "Active",
    },
    {
      id: "2",
      level: "High",
      title: "Correlation Spike Detected",
      description: "Cross-asset correlation increased to 0.89, above 0.85 threshold",
      time: "2 hours ago",
      action: "Review diversification strategy",
      portfolio: "All Portfolios",
      impact: "Medium",
      status: "Active",
    },
    {
      id: "3",
      level: "Medium",
      title: "Liquidity Warning",
      description: "SOL position size approaching daily volume limit",
      time: "4 hours ago",
      action: "Monitor execution strategy",
      portfolio: "Sovereign Wealth",
      impact: "Low",
      status: "Monitoring",
    },
    {
      id: "4",
      level: "Low",
      title: "Volatility Increase",
      description: "30-day volatility increased by 15% for ETH positions",
      time: "1 day ago",
      action: "Consider hedging options",
      portfolio: "Insurance Corp",
      impact: "Low",
      status: "Acknowledged",
    },
  ]

  const riskMetrics = [
    {
      metric: "Portfolio VaR (95%)",
      value: "$125M",
      limit: "$150M",
      utilization: 83,
      status: "Warning",
      trend: "+5.2%",
      description: "Value at Risk over 1-day horizon",
    },
    {
      metric: "Expected Shortfall",
      value: "$180M",
      limit: "$200M",
      utilization: 90,
      status: "Critical",
      trend: "+8.1%",
      description: "Expected loss beyond VaR threshold",
    },
    {
      metric: "Maximum Drawdown",
      value: "8.7%",
      limit: "12%",
      utilization: 73,
      status: "Normal",
      trend: "-1.2%",
      description: "Peak-to-trough decline",
    },
    {
      metric: "Concentration Risk",
      value: "45%",
      limit: "50%",
      utilization: 90,
      status: "Warning",
      trend: "+2.3%",
      description: "Single asset concentration",
    },
  ]

  const stressTests = [
    {
      scenario: "2008 Financial Crisis",
      impact: "-32.5%",
      recovery: "18 months",
      probability: "Low",
      status: "Pass",
      lastRun: "Dec 10, 2024",
      confidence: "95%",
    },
    {
      scenario: "COVID-19 Market Crash",
      impact: "-45.2%",
      recovery: "8 months",
      probability: "Medium",
      status: "Pass",
      lastRun: "Dec 10, 2024",
      confidence: "92%",
    },
    {
      scenario: "Regulatory Ban Scenario",
      impact: "-68.7%",
      recovery: "36 months",
      probability: "Very Low",
      status: "Review",
      lastRun: "Dec 10, 2024",
      confidence: "87%",
    },
    {
      scenario: "Major Exchange Hack",
      impact: "-25.8%",
      recovery: "12 months",
      probability: "Low",
      status: "Pass",
      lastRun: "Dec 10, 2024",
      confidence: "94%",
    },
  ]

  const complianceMetrics = [
    {
      requirement: "Position Limits",
      status: "Compliant",
      score: "100%",
      details: "All positions within regulatory limits",
      lastCheck: "Today",
    },
    {
      requirement: "Liquidity Requirements",
      status: "Compliant",
      score: "98%",
      details: "Minimum liquidity buffers maintained",
      lastCheck: "Today",
    },
    {
      requirement: "Concentration Limits",
      status: "Warning",
      score: "85%",
      details: "BTC allocation approaching limit",
      lastCheck: "Today",
    },
    {
      requirement: "Counterparty Exposure",
      status: "Compliant",
      score: "95%",
      details: "Diversified across 15+ exchanges",
      lastCheck: "Today",
    },
  ]

  const riskControls = [
    { control: "Position Limits", status: "Active", effectiveness: "98%", lastUpdate: "Today" },
    { control: "Stop Loss Orders", status: "Active", effectiveness: "95%", lastUpdate: "Today" },
    { control: "Correlation Monitoring", status: "Alert", effectiveness: "87%", lastUpdate: "2 hours ago" },
    { control: "Liquidity Buffers", status: "Active", effectiveness: "92%", lastUpdate: "Today" },
    { control: "Volatility Limits", status: "Active", effectiveness: "89%", lastUpdate: "Today" },
    { control: "Drawdown Controls", status: "Active", effectiveness: "94%", lastUpdate: "Today" },
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
                <h1 className="text-2xl font-bold text-slate-900">Risk Management</h1>
                <p className="text-slate-600">Comprehensive risk monitoring and compliance oversight</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={riskProfile} onValueChange={setRiskProfile}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Risk Profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="aggressive">Aggressive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7D</SelectItem>
                  <SelectItem value="30d">30D</SelectItem>
                  <SelectItem value="90d">90D</SelectItem>
                  <SelectItem value="1y">1Y</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
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
          {/* Critical Alerts */}
          <div className="mb-6">
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <strong>Critical Risk Alert:</strong> Bitcoin concentration risk threshold exceeded in Portfolio Alpha.
                Immediate rebalancing required to maintain risk parameters.
              </AlertDescription>
            </Alert>
          </div>

          {/* Risk Overview Cards */}
          <div className="grid md:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Portfolio VaR</div>
                <div className="text-2xl font-bold text-slate-900">{riskOverview.portfolioVaR}</div>
                <Badge variant="destructive" className="text-xs mt-1">
                  Warning
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Risk Score</div>
                <div className="text-2xl font-bold text-amber-600">{riskOverview.riskScore}</div>
                <Badge variant="secondary" className="text-xs mt-1">
                  Moderate
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Stress Tests</div>
                <div className="text-2xl font-bold text-emerald-600">{riskOverview.stressTestStatus}</div>
                <Badge variant="default" className="text-xs mt-1">
                  4/4 Pass
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Compliance</div>
                <div className="text-2xl font-bold text-emerald-600">{riskOverview.complianceStatus}</div>
                <Badge variant="default" className="text-xs mt-1">
                  Compliant
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Active Alerts</div>
                <div className="text-2xl font-bold text-slate-900">{riskOverview.activeAlerts}</div>
                <Badge variant="secondary" className="text-xs mt-1">
                  Monitoring
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-slate-600 mb-1">Critical Alerts</div>
                <div className="text-2xl font-bold text-red-600">{riskOverview.criticalAlerts}</div>
                <Badge variant="destructive" className="text-xs mt-1">
                  Action Required
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Risk Overview</TabsTrigger>
              <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
              <TabsTrigger value="stress">Stress Testing</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="controls">Risk Controls</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Risk Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Key Risk Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {riskMetrics.map((metric, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-slate-600">{metric.metric}</div>
                            <Badge
                              variant={
                                metric.status === "Critical"
                                  ? "destructive"
                                  : metric.status === "Warning"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {metric.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                            <div
                              className={`text-sm font-medium ${metric.trend.startsWith("+") ? "text-red-600" : "text-emerald-600"}`}
                            >
                              {metric.trend.startsWith("+") ? (
                                <TrendingUp className="w-4 h-4 inline mr-1" />
                              ) : (
                                <TrendingDown className="w-4 h-4 inline mr-1" />
                              )}
                              {metric.trend}
                            </div>
                          </div>
                          <div className="text-sm text-slate-500 mb-3">Limit: {metric.limit}</div>
                          <Progress
                            value={metric.utilization}
                            className={`h-2 ${
                              metric.utilization > 85
                                ? "bg-red-100"
                                : metric.utilization > 70
                                  ? "bg-amber-100"
                                  : "bg-emerald-100"
                            }`}
                          />
                          <div className="flex justify-between text-xs text-slate-500 mt-1">
                            <span>{metric.utilization}% utilized</span>
                            <span>{metric.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Analytics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg mb-6">
                      <div className="text-center text-slate-500">
                        <Activity className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                        <p className="font-medium">Risk Analytics Dashboard</p>
                        <p className="text-sm">Real-time risk monitoring and analysis</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Risk-Adjusted Return</span>
                        <span className="font-medium">2.34</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sortino Ratio</span>
                        <span className="font-medium">3.12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Calmar Ratio</span>
                        <span className="font-medium">2.89</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Information Ratio</span>
                        <span className="font-medium">1.85</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Tracking Error</span>
                        <span className="font-medium">12.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Beta to Market</span>
                        <span className="font-medium">0.87</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                    Active Risk Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskAlerts.map((alert) => (
                      <div key={alert.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Badge
                              variant={
                                alert.level === "Critical"
                                  ? "destructive"
                                  : alert.level === "High"
                                    ? "destructive"
                                    : alert.level === "Medium"
                                      ? "default"
                                      : "secondary"
                              }
                              className="text-xs"
                            >
                              {alert.level}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {alert.portfolio}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {alert.status}
                            </Badge>
                          </div>
                          <span className="text-xs text-slate-500">{alert.time}</span>
                        </div>
                        <h3 className="font-semibold mb-2">{alert.title}</h3>
                        <p className="text-sm text-slate-600 mb-3">{alert.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-amber-600">{alert.action}</div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                              Take Action
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stress">
              <Card>
                <CardHeader>
                  <CardTitle>Stress Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stressTests.map((test, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{test.scenario}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge variant={test.status === "Pass" ? "default" : "destructive"} className="text-xs">
                              {test.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {test.confidence} Confidence
                            </Badge>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <div className="text-slate-500">Impact</div>
                            <div className="font-medium text-red-600">{test.impact}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Recovery Time</div>
                            <div className="font-medium">{test.recovery}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Probability</div>
                            <div className="font-medium">{test.probability}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Last Run</div>
                            <div className="font-medium">{test.lastRun}</div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            Run Test
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {complianceMetrics.map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-lg">{item.requirement}</span>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={item.status === "Compliant" ? "default" : "destructive"}
                              className="text-xs"
                            >
                              {item.status}
                            </Badge>
                            <span className="text-sm font-medium">{item.score}</span>
                          </div>
                        </div>
                        <div className="text-sm text-slate-600 mb-2">{item.details}</div>
                        <div className="text-xs text-slate-500">Last checked: {item.lastCheck}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="controls">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskControls.map((control, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium">{control.control}</span>
                            <Badge
                              variant={
                                control.status === "Active"
                                  ? "default"
                                  : control.status === "Alert"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {control.status}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{control.effectiveness}</div>
                            <div className="text-xs text-slate-500">Effectiveness</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-slate-500">Last updated: {control.lastUpdate}</div>
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
