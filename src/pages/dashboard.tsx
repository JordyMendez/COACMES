import SidebarMenuComponent from "@/pages/sedebarmenu"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "@tanstack/react-router"

export default function SidebarLayout() {
  return (
    <SidebarProvider>
      <SidebarMenuComponent />
      <Outlet />
    </SidebarProvider>
  )
}
