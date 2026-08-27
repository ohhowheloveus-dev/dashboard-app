import { AppSidebar } from "@/components/app-sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import { SidebarInset } from "@/components/ui/sidebar"
import { StatCard } from "@/components/dashboard/stat-card"
import { ProductActivityChart } from "@/components/dashboard/product-activity-chart"
import { CustomersActivityChart } from "@/components/dashboard/customers-activity-chart"
import { CustomersActive } from "@/components/dashboard/customers-active"
import { TransactionTable } from "@/components/dashboard/transaction-table"
import { Wallet, Package, TrendingUp, TrendingDown } from "lucide-react"

export default function Page() {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <Topbar />
        <div className="min-h-svh space-y-6 p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
              <StatCard
                icon={<Wallet className="h-4 w-4" />}
                label="Nominal Balance"
                value="7,500.00"
                unit="USD"
                change="1.19%"
                isPositive
              />
              <StatCard
                icon={<Package className="h-4 w-4" />}
                label="Total Stock Product"
                value="3,142"
                unit="ITEMS"
                change="0.29%"
                isPositive
              />
              <StatCard
                icon={<TrendingUp className="h-4 w-4" />}
                label="Nominal Revenue"
                value="21,430.00"
                unit="USD"
                change="0.29%"
                isPositive
              />
              <StatCard
                icon={<TrendingDown className="h-4 w-4" />}
                label="Nominal Expense"
                value="12,980.00"
                unit="USD"
                change="0.15%"
                isPositive={false}
              />
            </div>
            <div className="lg:col-span-2">
              <ProductActivityChart />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <CustomersActivityChart />
            </div>
            <div className="lg:col-span-2">
              <CustomersActive />
            </div>
          </div>
          <TransactionTable />
        </div>
      </SidebarInset>
    </>
  )
}
