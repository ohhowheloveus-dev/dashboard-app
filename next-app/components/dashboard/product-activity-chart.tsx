"use client"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { category: "toBePacked", value: 110000, fill: "var(--color-toBePacked)" },
  {
    category: "processDelivery",
    value: 98000,
    fill: "var(--color-processDelivery)",
  },
  {
    category: "deliveryDone",
    value: 140000,
    fill: "var(--color-deliveryDone)",
  },
  { category: "returned", value: 67236, fill: "var(--color-returned)" },
]

const chartConfig = {
  value: { label: "Activity" },
  toBePacked: { label: "To Be Packed", color: "#38bdf8" },
  processDelivery: { label: "Process Delivery", color: "#f5b942" },
  deliveryDone: { label: "Delivery Done", color: "#2dd4bf" },
  returned: { label: "Returned", color: "#ec4899" },
} satisfies ChartConfig

export function ProductActivityChart() {
  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.value, 0),
    []
  )

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Product Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col items-center justify-center gap-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[260px] w-full"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              innerRadius={110}
              outerRadius={125}
              cornerRadius={8}
              paddingAngle={4}
              strokeWidth={0}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {(total / 1000).toFixed(3)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground text-xs"
                        >
                          Total Activity
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="w-full space-y-3">
          {chartData.map((d) => {
            const config = chartConfig[d.category as keyof typeof chartConfig]

            return (
              <div
                key={d.category}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        "color" in config ? config.color : "transparent",
                    }}
                  />
                  <span className="text-muted-foreground">{config.label}</span>
                </div>
                <span className="font-medium">{d.value.toLocaleString()}</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
