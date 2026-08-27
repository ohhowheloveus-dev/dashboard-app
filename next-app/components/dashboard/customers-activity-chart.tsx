"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "Apr 2025", paid: 700, checkout: 900 },
  { month: "May 2025", paid: 1500, checkout: 1700 },
  { month: "Jun 2025", paid: 900, checkout: 1500 },
  { month: "Jul 2025", paid: 890, checkout: 1300 },
  { month: "Aug 2025", paid: 600, checkout: 800 },
  { month: "Sep 2025", paid: 1500, checkout: 1700 },
  { month: "Oct 2025", paid: 1300, checkout: 1600 },
]

const chartConfig = {
  paid: { label: "Paid product", color: "#3b82f6" },
  checkout: { label: "Checkout Product", color: "#38bdf8" },
} satisfies ChartConfig

export function CustomersActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Customers Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <BarChart data={chartData} barGap={4}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis tickLine={false} axisLine={false} tickMargin={10} />
            <ChartTooltip cursor={{ fill: "transparent" }} content={<ChartTooltipContent />} />
            <Bar dataKey="paid" fill="var(--color-paid)" radius={4} />
            <Bar dataKey="checkout" fill="var(--color-checkout)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
