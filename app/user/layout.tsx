import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
