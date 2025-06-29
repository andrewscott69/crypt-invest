"use client"

import { useState } from "react"
import { TrendingUp, Activity, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TradingDesk() {
  const [selectedPair, setSelectedPair] = useState("BTC/USD")
  const [orderType, setOrderType] = useState("market")
  const [tradeType, setTradeType] = useState("buy")

  const institutionalPairs = [
    { symbol: "BTC/USD", price: "$48,750.00", change: "+2.4%", volume: "$4.2B", spread: "0.02%", positive: true },
    { symbol: "ETH/USD", price: "$2,850.00", change: "+1.8%", volume: "$2.8B", spread: "0.03%", positive: true },
    { symbol: "BTC/EUR", price: "€44,250.00", change: "+2.1%", volume: "€1.2B", spread: "0.04%", positive: true },
    { symbol: "ETH/EUR", price: "€2,580.00", change: "+1.5%", volume: "€850M", spread: "0.05%", positive: true },
    { symbol: "SOL/USD", price: "$98.50", change: "+5.2%", volume: "$680M", spread: "0.08%", positive: true },
    { symbol: "AVAX/USD", price: "$24.80", change: "-1.2%", volume: "$320M", spread: "0.12%", positive: false },
  ]

  const orderBook = {
    asks: [
      { price: "48,755.00", size: "12.5847", total: "612,520.45", orders: 8 },
      { price: "48,760.00", size: "8.2340", total: "401,485.04", orders: 5 },
      { price: "48,765.00", size: "15.8920", total: "774,998.58", orders: 12 },
      { price: "48,770.00", size: "6.4520", total: "314,652.24", orders: 4 },
    ],
    bids: [
      { price: "48,745.00", size: "18.7650", total: "914,289.43", orders: 15 },
      { price: "48,740.00", size: "11.2250", total: "546,832.50", orders: 9 },
      { price: "48,735.00", size: "9.8840", total: "481,755.24", orders: 7 },
      { price: "48,730.00", size: "22.1560", total: "1,079,234.68", orders: 18 },
    ],
  }

  const recentTrades = [
    { price: "48,750.00", size: "2.5000", time: "14:32:15", type: "buy" },
    { price: "48,748.50", size: "1.8500", time: "14:32:12", type: "sell" },
    { price: "48,752.00", size: "0.7500", time: "14:32:08", type: "buy" },
    { price: "48,749.00", size: "3.2000", time: "14:32:05", type: "sell" },
    { price: "48,751.50", size: "1.1500", time: "14:32:02", type: "buy" },
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Institutional Trading Desk</h1>
              <p className="text-slate-600">Professional-grade cryptocurrency trading platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {institutionalPairs.map((pair) => (
                  <SelectItem key={pair.symbol} value={pair.symbol}>
                    {pair.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900">$48,750.00</div>
              <div className="flex items-center space-x-1 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">+2.4% (+$1,140)</span>
              </div>
            </div>
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
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Market Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Institutional Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {institutionalPairs.map((pair) => (
                    <div
                      key={pair.symbol}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedPair === pair.symbol ? "bg-amber-50 border border-amber-200" : "hover:bg-slate-50"
                      }`}
                      onClick={() => setSelectedPair(pair.symbol)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">{pair.symbol}</span>
                        <Badge variant={pair.positive ? "default" : "destructive"} className="text-xs">
                          {pair.change}
                        </Badge>
                      </div>
                      <div className="text-lg font-bold mb-1">{pair.price}</div>
                      <div className="text-xs text-slate-500 space-y-1">
                        <div>Vol: {pair.volume}</div>
                        <div>Spread: {pair.spread}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chart and Order Book */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Advanced Trading Chart - {selectedPair}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center bg-slate-50 rounded-lg">
                  <div className="text-center text-slate-500">
                    <Activity className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                    <p className="font-medium">Professional Trading Interface</p>
                    <p className="text-sm">Real-time charts with institutional-grade analytics</p>
                    <p className="text-xs mt-2">TradingView integration with custom indicators</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Book and Recent Trades */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Level II Order Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-red-600 mb-2 flex justify-between">
                        <span>Asks (Sell Orders)</span>
                        <span className="text-xs text-slate-500">Size | Total | Orders</span>
                      </div>
                      <div className="space-y-1">
                        {orderBook.asks.map((ask, index) => (
                          <div key={index} className="grid grid-cols-4 gap-2 text-xs py-1 hover:bg-red-50">
                            <span className="text-red-600 font-mono">${ask.price}</span>
                            <span className="font-mono">{ask.size}</span>
                            <span className="text-slate-500 font-mono">${ask.total}</span>
                            <span className="text-slate-400">({ask.orders})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm font-medium text-emerald-600 mb-2 flex justify-between">
                        <span>Bids (Buy Orders)</span>
                        <span className="text-xs text-slate-500">Size | Total | Orders</span>
                      </div>
                      <div className="space-y-1">
                        {orderBook.bids.map((bid, index) => (
                          <div key={index} className="grid grid-cols-4 gap-2 text-xs py-1 hover:bg-emerald-50">
                            <span className="text-emerald-600 font-mono">${bid.price}</span>
                            <span className="font-mono">{bid.size}</span>
                            <span className="text-slate-500 font-mono">${bid.total}</span>
                            <span className="text-slate-400">({bid.orders})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2 text-xs font-medium text-slate-500 pb-2 border-b">
                      <span>Price</span>
                      <span>Size</span>
                      <span>Time</span>
                      <span>Side</span>
                    </div>
                    {recentTrades.map((trade, index) => (
                      <div key={index} className="grid grid-cols-4 gap-2 text-xs py-1 hover:bg-slate-50">
                        <span className={`font-mono ${trade.type === "buy" ? "text-emerald-600" : "text-red-600"}`}>
                          ${trade.price}
                        </span>
                        <span className="font-mono">{trade.size}</span>
                        <span className="text-slate-500">{trade.time}</span>
                        <Badge variant={trade.type === "buy" ? "default" : "destructive"} className="text-xs w-fit">
                          {trade.type.toUpperCase()}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Institutional Order Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={tradeType} onValueChange={setTradeType} className="mb-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy" className="text-emerald-600">
                      Buy
                    </TabsTrigger>
                    <TabsTrigger value="sell" className="text-red-600">
                      Sell
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="space-y-4">
                  <div>
                    <Label>Order Type</Label>
                    <Select value={orderType} onValueChange={setOrderType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market">Market</SelectItem>
                        <SelectItem value="limit">Limit</SelectItem>
                        <SelectItem value="algo">Algorithm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {orderType === "limit" && (
                    <div>
                      <Label>Price (USD)</Label>
                      <Input placeholder="48,750.00" />
                    </div>
                  )}

                  {orderType === "algo" && (
                    <div>
                      <Label>Algorithm</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select algorithm" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="twap">TWAP</SelectItem>
                          <SelectItem value="vwap">VWAP</SelectItem>
                          <SelectItem value="pov">POV</SelectItem>
                          <SelectItem value="is">Implementation Shortfall</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <Label>Quantity (BTC)</Label>
                    <Input placeholder="0.00000000" />
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Available Balance:</span>
                      <span className="font-medium">$2,450,000.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Estimated Cost:</span>
                      <span className="font-medium">$487,500.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Est. Commission:</span>
                      <span className="font-medium">$97.50</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full ${
                      tradeType === "buy" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {tradeType === "buy" ? "Buy BTC" : "Sell BTC"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Position Summary */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Position Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">BTC Holdings</span>
                    <span className="font-medium">125.847 BTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">USD Balance</span>
                    <span className="font-medium">$2,450,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Unrealized P&L</span>
                    <span className="font-medium text-emerald-600">+$284,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Margin Used</span>
                    <span className="font-medium">12.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
