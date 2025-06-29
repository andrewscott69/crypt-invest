"use client"
import { Building, BarChart3, TrendingUp, DollarSign, FileText, AlertCircle, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Trading Desk", href: "/user/trading", icon: TrendingUp },
    { name: "Portfolio Management", href: "/user/portfolio", icon: DollarSign },
    { name: "Research & Analytics", href: "/research", icon: FileText },
    { name: "Risk Management", href: "/risk", icon: AlertCircle },
    { name: "Client Services", href: "/clients", icon: Users },
  ]

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 lg:static lg:inset-0">
      <div className="flex items-center justify-center h-16 bg-slate-800">
        <div className="flex items-center space-x-2">
          <Building className="w-8 h-8 text-amber-500" />
          <span className="text-white font-bold">Meridian Capital</span>
        </div>
      </div>
      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  isActive ? "text-amber-500 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
