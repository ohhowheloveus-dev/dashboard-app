"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react"
import { Line, LineChart } from "recharts"

const sparkData = [
  { v: 8 }, { v: 32 }, { v: 12 }, { v: 45 }, { v: 18 }, { v: 40 }, { v: 10 }, { v: 38 }, { v: 22 }, { v: 48 },
]

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  unit: string
  change: string
  isPositive: boolean
}

export function StatCard({ icon, label, value, unit, change, isPositive }: StatCardProps) {
  const color = isPositive ? "#22c55e" : "#ef4444"
  const chartConfig = {
    v: { label: label, color },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {icon}
          {label}
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex items-end justify-between gap-4">
        <div>
          <div className="text-2xl font-semibold">
            {value} <span className="text-sm font-normal text-muted-foreground">{unit}</span>
          </div>
          <div className={`mt-1 flex items-center gap-1 text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {change}
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[50px] w-[110px]">
          <LineChart data={sparkData}>
            <Line
              type="monotone"
              dataKey="v"
              stroke="var(--color-v)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
