"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, PieChart, BarChart3, Download, Filter, Bell, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function PortfolioManagement() {
  const [selectedClient, setSelectedClient] = useState("all")
  const [timeframe, setTimeframe] = useState("30d")
  const [viewMode, setViewMode] = useState("overview")

  const portfolioSummary = {
    totalAUM: "$12.8B",
    performance: "+18.5%",
    activeClients: 847,
    riskScore: "6.8/10",
    dailyPnL: "+$24.5M",
    monthlyPnL: "+$284.7M",
  }

  const clientPortfolios = [
    {
      id: "pension-fund-alpha",
      name: "Pension Fund Alpha",
      aum: "$2.8B",
      allocation: "22%",
      performance: "+18.5%",
      riskScore: "6.2",
      status: "Active",
      manager: "Sarah Chen",
      lastRebalance: "3 days ago",
      targetAllocation: { btc: 45, eth: 25, sol: 15, ada: 10, cash: 5 },
      currentAllocation: { btc: 47, eth: 24, sol: 14, ada: 10, cash: 5 },
    },
    {
      id: "sovereign-wealth",
      name: "Sovereign Wealth Fund",
      aum: "$1.9B",
      allocation: "15%",
      performance: "+22.3%",
      riskScore: "7.1",
      status: "Active",
      manager: "Michael Rodriguez",
      lastRebalance: "1 week ago",
      targetAllocation: { btc: 40, eth: 30, sol: 15, ada: 10, cash: 5 },
      currentAllocation: { btc: 42, eth: 28, sol: 16, ada: 9, cash: 5 },
    },
    {
      id: "insurance-corp",
      name: "Insurance Corporation",
      aum: "$1.2B",
      allocation: "9%",
      performance: "+12.7%",
      riskScore: "4.8",
      status: "Active",
      manager: "Emma Thompson",
      lastRebalance: "5 days ago",
      targetAllocation: { btc: 50, eth: 20, sol: 10, ada: 15, cash: 5 },
      currentAllocation: { btc: 48, eth: 22, sol: 12, ada: 13, cash: 5 },
    },
  ]

  const assetAllocation = [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      allocation: "45%",
      value: "$5.76B",
      change: "+8.2%",
      target: "40-50%",
      status: "On Target",
      risk: "Medium",
      liquidity: "High",
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      allocation: "25%",
      value: "$3.20B",
      change: "+12.5%",
      target: "20-30%",
      status: "On Target",
      risk: "Medium",
      liquidity: "High",
    },
    {
      asset: "Solana",
      symbol: "SOL",
      allocation: "12%",
      value: "$1.54B",
      change: "+28.7%",
      target: "10-15%",
      status: "On Target",
      risk: "High",
      liquidity: "Medium",
    },
    {
      asset: "Cardano",
      symbol: "ADA",
      allocation: "8%",
      value: "$1.02B",
      change: "-2.1%",
      target: "5-10%",
      status: "On Target",
      risk: "Medium",
      liquidity: "Medium",
    },
    {
      asset: "Avalanche",
      symbol: "AVAX",
      allocation: "6%",
      value: "$768M",
      change: "+15.8%",
      target: "5-10%",
      status: "On Target",
      risk: "High",
      liquidity: "Medium",
    },
    {
      asset: "Cash/Stables",
      symbol: "USD",
      allocation: "4%",
      value: "$512M",
      change: "+0.1%",
      target: "2-5%",
      status: "On Target",
      risk: "Low",
      liquidity: "High",
    },
  ]

  const performanceMetrics = [
    { metric: "Alpha", value: "+4.2%", benchmark: "vs BTC", status: "Outperforming" },
    { metric: "Beta", value: "0.87", benchmark: "vs Market", status: "Lower Risk" },
    { metric: "Sharpe Ratio", value: "2.34", benchmark: "Risk-Adj Return", status: "Excellent" },
    { metric: "Max Drawdown", value: "8.7%", benchmark: "Peak to Trough", status: "Controlled" },
    { metric: "Information Ratio", value: "1.85", benchmark: "vs Benchmark", status: "Strong" },
    { metric: "Sortino Ratio", value: "3.12", benchmark: "Downside Risk", status: "Superior" },
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Portfolio Management</h1>
              <p className="text-slate-600">Institutional asset allocation and performance monitoring</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clients</SelectItem>
                {clientPortfolios.map((client) => (
                  <SelectItem key={client.id} value={client.id}>
                    {client.name}
                  </SelectItem>
                ))}
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
        {/* Portfolio Overview Cards */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-slate-600 mb-1">Total AUM</div>
              <div className="text-2xl font-bold text-slate-900">{portfolioSummary.totalAUM}</div>
              <Badge variant="default" className="text-xs mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8.2%
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-slate-600 mb-1">Performance</div>
              <div className="text-2xl font-bold text-emerald-600">{portfolioSummary.performance}</div>
              <Badge variant="default" className="text-xs mt-1">
                30D
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-slate-600 mb-1">Active Clients</div>
              <div className="text-2xl font-bold text-slate-900">{portfolioSummary.activeClients}</div>
              <Badge variant="default" className="text-xs mt-1">
                +12
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-slate-600 mb-1">Risk Score</div>
              <div className="text-2xl font-bold text-amber-600">{portfolioSummary.riskScore}</div>
              <Badge variant="secondary" className="text-xs mt-1">
                Moderate
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-slate-600 mb-1">Daily P&L</div>
              <div className="text-2xl font-bold text-emerald-600">{portfolioSummary.dailyPnL}</div>
              <Badge variant="default" className="text-xs mt-1">
                +1.9%
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-slate-600 mb-1">Monthly P&L</div>
              <div className="text-2xl font-bold text-emerald-600">{portfolioSummary.monthlyPnL}</div>
              <Badge variant="default" className="text-xs mt-1">
                +18.5%
              </Badge>
            </CardContent>
          </Card>
        </div>

        <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Portfolio Overview</TabsTrigger>
            <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
            <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
            <TabsTrigger value="rebalancing">Rebalancing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Client Portfolios */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Client Portfolio Overview</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                        <Input placeholder="Search clients..." className="w-48" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {clientPortfolios.map((client) => (
                        <div key={client.id} className="p-4 border rounded-lg hover:bg-slate-50">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-semibold text-lg">{client.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-slate-600">
                                <span>AUM: {client.aum}</span>
                                <span>Manager: {client.manager}</span>
                                <Badge variant="outline" className="text-xs">
                                  {client.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">{client.performance}</div>
                              <div className="text-sm text-slate-600">Risk: {client.riskScore}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-5 gap-4 text-sm mb-4">
                            <div>
                              <div className="text-slate-500">Allocation</div>
                              <div className="font-medium">{client.allocation}</div>
                            </div>
                            <div>
                              <div className="text-slate-500">Last Rebalance</div>
                              <div className="font-medium">{client.lastRebalance}</div>
                            </div>
                            <div>
                              <div className="text-slate-500">BTC Target</div>
                              <div className="font-medium">{client.targetAllocation.btc}%</div>
                            </div>
                            <div>
                              <div className="text-slate-500">ETH Target</div>
                              <div className="font-medium">{client.targetAllocation.eth}%</div>
                            </div>
                            <div>
                              <div className="text-slate-500">Status</div>
                              <Badge variant="default" className="text-xs">
                                On Track
                              </Badge>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Rebalance
                            </Button>
                            <Button variant="outline" size="sm">
                              Generate Report
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Portfolio Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Allocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-48 mb-4">
                      <PieChart className="w-24 h-24 text-slate-300" />
                    </div>
                    <div className="space-y-2">
                      {assetAllocation.slice(0, 5).map((asset, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                index === 0
                                  ? "bg-amber-500"
                                  : index === 1
                                    ? "bg-emerald-500"
                                    : index === 2
                                      ? "bg-blue-500"
                                      : index === 3
                                        ? "bg-purple-500"
                                        : "bg-slate-500"
                              }`}
                            ></div>
                            <span>{asset.symbol}</span>
                          </div>
                          <span className="font-medium">{asset.allocation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {performanceMetrics.slice(0, 4).map((metric, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-600">{metric.metric}</span>
                          <Badge variant="outline" className="text-xs">
                            {metric.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg">{metric.value}</span>
                          <span className="text-xs text-slate-500">{metric.benchmark}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="allocation">
            <Card>
              <CardHeader>
                <CardTitle>Strategic Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assetAllocation.map((asset, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="font-bold text-sm">{asset.symbol}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{asset.asset}</div>
                            <div className="text-sm text-slate-600">
                              Current: {asset.allocation} | Target: {asset.target}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-xl">{asset.value}</div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={asset.change.startsWith("+") ? "default" : "destructive"}
                              className="text-xs"
                            >
                              {asset.change.startsWith("+") ? (
                                <TrendingUp className="w-3 h-3 mr-1" />
                              ) : (
                                <TrendingDown className="w-3 h-3 mr-1" />
                              )}
                              {asset.change}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-slate-500">Status</div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {asset.status}
                          </Badge>
                        </div>
                        <div>
                          <div className="text-slate-500">Risk Level</div>
                          <div className="font-medium">{asset.risk}</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Liquidity</div>
                          <div className="font-medium">{asset.liquidity}</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Allocation</div>
                          <Progress value={Number.parseInt(asset.allocation)} className="mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg mb-6">
                    <div className="text-center text-slate-500">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                      <p className="font-medium">Performance Chart</p>
                      <p className="text-sm">Historical performance vs benchmarks</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600">{metric.metric}</div>
                        <div className="font-semibold text-lg">{metric.value}</div>
                        <div className="text-xs text-slate-500">{metric.benchmark}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk-Return Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg mb-6">
                    <div className="text-center text-slate-500">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                      <p className="font-medium">Risk-Return Scatter Plot</p>
                      <p className="text-sm">Portfolio positioning vs benchmarks</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Portfolio Return</span>
                      <span className="font-medium text-emerald-600">+18.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Portfolio Risk</span>
                      <span className="font-medium">12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Benchmark Return</span>
                      <span className="font-medium">+14.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Benchmark Risk</span>
                      <span className="font-medium">15.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rebalancing">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rebalancing Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Bitcoin Overweight</span>
                        <Badge variant="destructive" className="text-xs">
                          Action Required
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">Current: 47% | Target: 45% | Deviation: +2%</div>
                      <div className="text-sm font-medium text-amber-700">
                        Recommend selling $256M BTC across 3 portfolios
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Ethereum Underweight</span>
                        <Badge variant="default" className="text-xs">
                          Opportunity
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">Current: 24% | Target: 25% | Deviation: -1%</div>
                      <div className="text-sm font-medium text-blue-700">
                        Recommend buying $128M ETH for rebalancing
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Solana On Target</span>
                        <Badge variant="secondary" className="text-xs">
                          No Action
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        Current: 14% | Target: 12-15% | Status: Within Range
                      </div>
                      <div className="text-sm font-medium text-emerald-700">Allocation within acceptable range</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Execute Rebalancing Plan</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rebalancing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Portfolio Alpha Rebalance</span>
                        <span className="text-xs text-slate-500">3 days ago</span>
                      </div>
                      <div className="text-sm text-slate-600">
                        Reduced BTC from 52% to 45%, increased ETH allocation
                      </div>
                      <div className="text-xs text-emerald-600 mt-1">Impact: +0.8% performance</div>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Sovereign Fund Rebalance</span>
                        <span className="text-xs text-slate-500">1 week ago</span>
                      </div>
                      <div className="text-sm text-slate-600">Added SOL position, trimmed ADA holdings</div>
                      <div className="text-xs text-emerald-600 mt-1">Impact: +1.2% performance</div>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Insurance Corp Rebalance</span>
                        <span className="text-xs text-slate-500">2 weeks ago</span>
                      </div>
                      <div className="text-sm text-slate-600">Quarterly rebalancing to target allocations</div>
                      <div className="text-xs text-emerald-600 mt-1">Impact: +0.5% performance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
