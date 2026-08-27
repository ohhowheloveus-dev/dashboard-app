"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", value: "12,628", pct: 80, color: "bg-green-500" },
  { name: "United States", flag: "🇺🇸", value: "10,628", pct: 70, color: "bg-orange-500" },
  { name: "Sweden", flag: "🇸🇪", value: "8,628", pct: 60, color: "bg-blue-500" },
  { name: "Turkey", flag: "🇹🇷", value: "6,628", pct: 40, color: "bg-red-500" },
  { name: "Spain", flag: "🇪🇸", value: "3,628", pct: 30, color: "bg-cyan-500" },
]

const BASIC_LIMIT = 3

export function CustomersActive() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? countries : countries.slice(0, BASIC_LIMIT)

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Customers Active</CardTitle>
        <Button variant="outline" size="sm" onClick={() => setShowAll((s) => !s)}>
          {showAll ? "Basic view" : "View All"}
        </Button>
      </CardHeader>
      <CardContent className="space-y-5">
        {visible.map((c) => (
          <div key={c.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span>{c.flag} {c.name}</span>
              <span className="text-muted-foreground">{c.value} ({c.pct}%)</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted">
              <div className={`h-1.5 rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
