// components/SidebarLayout.tsx
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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Cat,
  ClipboardPenIcon,
  CloudSunRain,
  Home,
} from "lucide-react"

import { Link, Outlet } from "@tanstack/react-router"

const items = [
  {
    title: "Home",
    to: '/home',
    icon: Home,
  },
  {
    title: "Clima",
    to: '/clima',
    icon: CloudSunRain,
  },
  {
    title: "Pokemon",
    to: '/pokemon',
    icon: Cat,
  },
  {
    title: "Cambio de contraseña",
    to: '/ChangePassword',
    icon: ClipboardPenIcon,
  },
]

export default function Das() {
    return (
            <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.to} className="flex items-center gap-2">
                          <item.icon className="mr-2" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>

                  <Outlet />

      </div>
    </SidebarProvider>

);
}