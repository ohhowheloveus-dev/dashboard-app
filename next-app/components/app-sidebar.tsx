"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Home,
  LayoutDashboard,
  BarChart3,
  Package,
  Tags,
  ShoppingCart,
  Receipt,
  Users,
  Star,
  CreditCard,
  MoreHorizontal,
} from "lucide-react"

const subItems = ["Analytics", "Sales Overview", "Top Products", "Stock Status"]

const items = [
  { title: "Home", icon: Home },
  { title: "Dashboard", icon: LayoutDashboard, active: true, sub: subItems },
  { title: "Analytics", icon: BarChart3 },
  { title: "Products", icon: Package },
  { title: "Categories", icon: Tags },
  { title: "Orders", icon: ShoppingCart },
  { title: "Taxes", icon: Receipt },
  { title: "Customers", icon: Users },
  { title: "Reviews", icon: Star },
  { title: "Payments", icon: CreditCard },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground">
            Q
          </div>
          <div>
            <div className="text-sm font-medium">Quantico</div>
            <div className="text-xs text-muted-foreground">ID: CMP-1006</div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={item.active}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.sub && (
                    <SidebarMenuSub>
                      {item.sub.map((sub, i) => (
                        <SidebarMenuSubItem key={sub}>
                          <SidebarMenuSubButton isActive={i === 0}>
                            {sub}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="gap-4 p-4">
        <Card className="bg-muted/50">
          <CardContent className="space-y-2 p-3">
            <p className="text-sm font-medium">Need setup help?</p>
            <p className="text-xs text-muted-foreground">
              Get your questions answered in a 1:1 call with our team.
            </p>
            <Button size="sm" variant="secondary" className="w-full">
              Schedule a call
            </Button>
          </CardContent>
        </Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/짱구.png" alt="짱구 아바타" />
              <AvatarFallback>짱</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1 text-sm font-medium">
                Nathan Scott
                <span className="rounded bg-primary/20 px-1 py-0.5 text-[9px] font-semibold text-primary">
                  PRO
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                scott@example.com
              </div>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
