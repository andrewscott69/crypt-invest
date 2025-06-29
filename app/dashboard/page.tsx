"use client"
import { Bell, TrendingUp, TrendingDown, BarChart3, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"

export default function Dashboard() {
  const portfolioMetrics = [
    { title: "Total AUM", value: "$12.8B", change: "+8.2%", positive: true },
    { title: "Active Clients", value: "847", change: "+12", positive: true },
    { title: "Daily Volume", value: "$2.4B", change: "+15.7%", positive: true },
    { title: "Risk Score", value: "7.2/10", change: "-0.3", positive: true },
  ]

  const topPerformers = [
    { symbol: "BTC", allocation: "$4.2B", return: "+18.5%", risk: "Medium" },
    { symbol: "ETH", allocation: "$3.1B", return: "+22.3%", risk: "Medium" },
    { symbol: "SOL", allocation: "$1.8B", return: "+45.2%", risk: "High" },
    { symbol: "AVAX", allocation: "$950M", return: "+28.7%", risk: "High" },
  ]

  const riskAlerts = [
    { type: "High", message: "BTC correlation spike detected", time: "2 hours ago" },
    { type: "Medium", message: "Liquidity threshold reached for SOL", time: "4 hours ago" },
    { type: "Low", message: "Rebalancing recommended for Portfolio Alpha", time: "1 day ago" },
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
                <h1 className="text-2xl font-bold text-slate-900">Executive Dashboard</h1>
                <p className="text-slate-600">Real-time institutional portfolio overview</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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
          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {portfolioMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{metric.title}</p>
                      <p className="text-3xl font-bold text-slate-900">{metric.value}</p>
                    </div>
                    <Badge variant={metric.positive ? "default" : "destructive"} className="text-xs">
                      {metric.positive ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {metric.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Portfolio Performance */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg mb-6">
                    <div className="text-center text-slate-500">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                      <p>Advanced Portfolio Analytics Chart</p>
                      <p className="text-sm">Real-time performance tracking across all asset classes</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Top Performing Assets</h4>
                      <div className="space-y-3">
                        {topPerformers.map((asset, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div>
                              <div className="font-medium">{asset.symbol}</div>
                              <div className="text-sm text-slate-600">{asset.allocation}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-emerald-600 font-medium">{asset.return}</div>
                              <Badge variant="outline" className="text-xs">
                                {asset.risk}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Market Insights</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <div className="font-medium text-sm">Institutional Flow</div>
                          <div className="text-emerald-600 font-bold">+$2.4B Net Inflow</div>
                          <div className="text-xs text-slate-600">Last 24 hours</div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <div className="font-medium text-sm">Market Sentiment</div>
                          <div className="text-amber-600 font-bold">Cautiously Optimistic</div>
                          <div className="text-xs text-slate-600">Based on 47 indicators</div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <div className="font-medium text-sm">Volatility Index</div>
                          <div className="text-slate-900 font-bold">23.4 (Moderate)</div>
                          <div className="text-xs text-slate-600">30-day average</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Alerts & News */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                    Risk Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {riskAlerts.map((alert, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            variant={
                              alert.type === "High" ? "destructive" : alert.type === "Medium" ? "default" : "secondary"
                            }
                            className="text-xs"
                          >
                            {alert.type}
                          </Badge>
                          <span className="text-xs text-slate-500">{alert.time}</span>
                        </div>
                        <p className="text-sm">{alert.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market News</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-amber-500 bg-amber-50">
                      <div className="font-medium text-sm">Fed Policy Update</div>
                      <div className="text-xs text-slate-600 mt-1">
                        Federal Reserve signals potential rate adjustments affecting crypto markets
                      </div>
                      <div className="text-xs text-slate-500 mt-2">2 hours ago</div>
                    </div>
                    <div className="p-3 border-l-4 border-emerald-500 bg-emerald-50">
                      <div className="font-medium text-sm">Institutional Adoption</div>
                      <div className="text-xs text-slate-600 mt-1">
                        Major pension fund allocates $500M to digital assets
                      </div>
                      <div className="text-xs text-slate-500 mt-2">4 hours ago</div>
                    </div>
                    <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                      <div className="font-medium text-sm">Regulatory Development</div>
                      <div className="text-xs text-slate-600 mt-1">
                        New compliance framework announced for digital asset custody
                      </div>
                      <div className="text-xs text-slate-500 mt-2">6 hours ago</div>
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
