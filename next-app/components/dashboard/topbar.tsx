import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Home, LayoutGrid } from "lucide-react"

const avatars = ["U1", "U2", "U3", "U4"]

export function Topbar() {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1">
                <LayoutGrid className="h-3.5 w-3.5" />
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {avatars.map((a) => (
            <Avatar key={a} className="h-7 w-7 border-2 border-background">
              <AvatarFallback className="text-[10px]">{a}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="h-7 w-7 border-2 border-background">
            <AvatarFallback className="text-[10px]">+9</AvatarFallback>
          </Avatar>
        </div>
        <Button size="sm">Invite</Button>
      </div>
    </div>
  )
}
