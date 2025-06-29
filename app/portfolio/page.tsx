"use client"

import { useState } from "react"
import {
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Download,
  Filter,
  Building,
  Menu,
  DollarSign,
  Users,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function PortfolioManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState("all")
  const [timeframe, setTimeframe] = useState("30d")

  const clientPortfolios = [
    {
      id: "pension-fund-alpha",
      name: "Pension Fund Alpha",
      aum: "$2.8B",
      allocation: "22%",
      performance: "+18.5%",
      riskScore: "6.2",
      status: "Active",
      positive: true,
    },
    {
      id: "sovereign-wealth",
      name: "Sovereign Wealth Fund",
      aum: "$1.9B",
      allocation: "15%",
      performance: "+22.3%",
      riskScore: "7.1",
      status: "Active",
      positive: true,
    },
    {
      id: "insurance-corp",
      name: "Insurance Corporation",
      aum: "$1.2B",
      allocation: "9%",
      performance: "+12.7%",
      riskScore: "4.8",
      status: "Active",
      positive: true,
    },
    {
      id: "endowment-fund",
      name: "University Endowment",
      aum: "$950M",
      allocation: "7%",
      performance: "+15.2%",
      riskScore: "5.5",
      status: "Active",
      positive: true,
    },
  ]

  const assetAllocation = [
    { asset: "Bitcoin", allocation: "45%", value: "$5.76B", change: "+8.2%", target: "40-50%", status: "On Target" },
    { asset: "Ethereum", allocation: "25%", value: "$3.20B", change: "+12.5%", target: "20-30%", status: "On Target" },
    { asset: "Solana", allocation: "12%", value: "$1.54B", change: "+28.7%", target: "10-15%", status: "On Target" },
    { asset: "Cardano", allocation: "8%", value: "$1.02B", change: "-2.1%", target: "5-10%", status: "On Target" },
    { asset: "Avalanche", allocation: "6%", value: "$768M", change: "+15.8%", target: "5-10%", status: "On Target" },
    { asset: "Cash/Stables", allocation: "4%", value: "$512M", change: "+0.1%", target: "2-5%", status: "On Target" },
  ]

  const riskMetrics = [
    { metric: "Portfolio VaR (95%)", value: "$125M", status: "Normal", change: "-2.1%" },
    { metric: "Sharpe Ratio", value: "2.34", status: "Excellent", change: "+0.12" },
    { metric: "Max Drawdown", value: "8.7%", status: "Low", change: "-1.2%" },
    { metric: "Beta to BTC", value: "0.87", status: "Moderate", change: "+0.05" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-slate-800">
          <div className="flex items-center space-x-2">
            <Building className="w-8 h-8 text-amber-500" />
            <span className="text-white font-bold">Meridian Capital</span>
          </div>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
            <Link
              href="/trading"
              className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              <TrendingUp className="w-5 h-5 mr-3" />
              Trading Desk
            </Link>
            <Link href="/portfolio" className="flex items-center px-4 py-2 text-amber-500 bg-slate-800 rounded-lg">
              <DollarSign className="w-5 h-5 mr-3" />
              Portfolio Management
            </Link>
            <Link
              href="/research"
              className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              Research & Analytics
            </Link>
            <Link
              href="/risk"
              className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              <AlertCircle className="w-5 h-5 mr-3" />
              Risk Management
            </Link>
            <Link
              href="/clients"
              className="flex items-center px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              <Users className="w-5 h-5 mr-3" />
              Client Services
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
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
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Portfolio Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-slate-600 mb-1">Total AUM</div>
                <div className="text-3xl font-bold text-slate-900">$12.8B</div>
                <Badge variant="default" className="text-xs mt-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8.2%
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-slate-600 mb-1">30-Day Performance</div>
                <div className="text-3xl font-bold text-emerald-600">+18.5%</div>
                <Badge variant="default" className="text-xs mt-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +2.1%
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-slate-600 mb-1">Active Clients</div>
                <div className="text-3xl font-bold text-slate-900">847</div>
                <Badge variant="default" className="text-xs mt-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-slate-600 mb-1">Risk Score</div>
                <div className="text-3xl font-bold text-amber-600">6.8/10</div>
                <Badge variant="secondary" className="text-xs mt-2">
                  Moderate
                </Badge>
              </CardContent>
            </Card>
          </div>

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
                  <div className="space-y-4">
                    {clientPortfolios.map((client) => (
                      <div key={client.id} className="p-4 border rounded-lg hover:bg-slate-50">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{client.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-600">
                              <span>AUM: {client.aum}</span>
                              <span>Allocation: {client.allocation}</span>
                              <Badge variant="outline" className="text-xs">
                                {client.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-emerald-600">{client.performance}</div>
                            <div className="text-sm text-slate-600">Risk Score: {client.riskScore}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-slate-500">YTD Return</div>
                            <div className="font-medium text-emerald-600">{client.performance}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Sharpe Ratio</div>
                            <div className="font-medium">2.34</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Max Drawdown</div>
                            <div className="font-medium">-8.7%</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Last Rebalance</div>
                            <div className="font-medium">3 days ago</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Asset Allocation */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Strategic Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assetAllocation.map((asset, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="font-bold text-sm">{asset.asset.slice(0, 3).toUpperCase()}</span>
                          </div>
                          <div>
                            <div className="font-semibold">{asset.asset}</div>
                            <div className="text-sm text-slate-600">
                              Current: {asset.allocation} | Target: {asset.target}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-lg">{asset.value}</div>
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
                            <Badge variant="outline" className="text-xs">
                              {asset.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Analytics */}
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
                    {assetAllocation.slice(0, 4).map((asset, index) => (
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
                                    : "bg-purple-500"
                            }`}
                          ></div>
                          <span>{asset.asset}</span>
                        </div>
                        <span className="font-medium">{asset.allocation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {riskMetrics.map((metric, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-600">{metric.metric}</span>
                        <Badge variant="outline" className="text-xs">
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">{metric.value}</span>
                        <span
                          className={`text-sm ${metric.change.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}
                        >
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-32 mb-4">
                    <BarChart3 className="w-16 h-16 text-slate-300" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Alpha</span>
                      <span className="font-medium text-emerald-600">+4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Beta</span>
                      <span className="font-medium">0.87</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Information Ratio</span>
                      <span className="font-medium">1.85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Tracking Error</span>
                      <span className="font-medium">12.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
