"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const transactions = [
  {
    id: "AR-47380416-61",
    product: "Meta Quest 3",
    spec: "512Gb • White",
    price: "$499.00",
    customer: "Liam Smith",
    date: "02 Apr 2025, 8:15 am",
    method: "VISA •••• 4321",
    email: "smith@example.com",
  },
  {
    id: "AR-30631995-17",
    product: "iPhone 15 Pro Max",
    spec: "512Gb • eSIM",
    price: "$1,399.00",
    customer: "Lily Thompson",
    date: "06 Apr 2025, 6:45 pm",
    method: "MC •••• 8890",
    email: "thom@example.com",
  },
  {
    id: "AR-79609316-32",
    product: 'MacBook Air M3 (13")',
    spec: "M3 chip • Ultra-light",
    price: "$1,299.00",
    customer: "Lucas Young",
    date: "10 Apr 2025, 11:30 am",
    method: "VISA •••• 1023",
    email: "young@example.com",
  },
  {
    id: "AR-17288760-13",
    product: "AirPods Pro",
    spec: "2nd Gen • USB-C case",
    price: "$229.00",
    customer: "Isabella Garcia",
    date: "14 Apr 2025, 7:50 pm",
    method: "VISA •••• 5678",
    email: "garcia@example.com",
  },
  {
    id: "AR-24593385-96",
    product: "Apple Vision Pro",
    spec: "AR Headset",
    price: "$3,499.00",
    customer: "Amelia Davis",
    date: "18 Apr 2025, 9:05 am",
    method: "MC •••• 3301",
    email: "davis@example.com",
  },
  {
    id: "AR-57722590-75",
    product: "Oura Ring 4",
    spec: "Health Wearable",
    price: "$399.00",
    customer: "Caleb Turner",
    date: "22 Apr 2025, 10:10 pm",
    method: "STRIPE •••• 9823",
    email: "turner@example.com",
  },
]

const BASIC_LIMIT = 3

const shinchanAvatars = [
  {
    name: "짱구",
    image: "/짱구.png",
  },
  {
    name: "짱아",
    image: "/짱아.jpeg",
  },
  {
    name: "짱구 엄마",
    image: "/짱구엄마.png",
  },
  {
    name: "짱구 아빠",
    image: "/짱구아빠.png",
  },
  {
    name: "액션가면",
    image: "/짱구 액션가면.png",
  },
  {
    name: "나미리 선생님",
    image: "/짱구 나미리쌤.png",
  },
]

export function TransactionTable() {
  const [query, setQuery] = useState("")
  const [showAll, setShowAll] = useState(false)

  const filtered = transactions.filter((t) => {
    const q = query.toLowerCase()
    return (
      t.id.toLowerCase().includes(q) ||
      t.product.toLowerCase().includes(q) ||
      t.customer.toLowerCase().includes(q) ||
      t.email.toLowerCase().includes(q)
    )
  })

  const visible = showAll ? filtered : filtered.slice(0, BASIC_LIMIT)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <CardTitle className="text-base whitespace-nowrap">
          Recent Transaction ({filtered.length})
        </CardTitle>
        <div className="flex shrink-0 items-center gap-2">
          <div className="relative">
            <Search className="absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-8 w-[160px] pl-7 text-xs"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-[92px] shrink-0"
            onClick={() => setShowAll((s) => !s)}
          >
            {showAll ? "Basic view" : "View All"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-hidden">
        <Table className="table-fixed">
          <colgroup>
            <col className="w-[14%]" />
            <col className="w-[20%]" />
            <col className="w-[10%]" />
            <col className="w-[16%]" />
            <col className="w-[16%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
          </colgroup>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Product Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date Checkout</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="py-8 text-center text-sm text-muted-foreground"
                >
                  No transactions found.
                </TableCell>
              </TableRow>
            ) : (
              visible.map((t, index) => {
                const avatar = shinchanAvatars[index % shinchanAvatars.length]

                return (
                  <TableRow key={t.id}>
                    <TableCell className="truncate">{t.id}</TableCell>
                    <TableCell className="truncate">
                      <div className="truncate">{t.product}</div>
                      <div className="truncate text-xs text-muted-foreground">
                        {t.spec}
                      </div>
                    </TableCell>
                    <TableCell className="truncate">{t.price}</TableCell>
                    <TableCell className="truncate">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 shrink-0">
                          <AvatarImage
                            src={avatar.image}
                            alt={`${avatar.name} avatar`}
                          />
                          <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="truncate">{t.customer}</span>
                      </div>
                    </TableCell>
                    <TableCell className="truncate">{t.date}</TableCell>
                    <TableCell className="truncate">{t.method}</TableCell>
                    <TableCell className="truncate">{t.email}</TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
