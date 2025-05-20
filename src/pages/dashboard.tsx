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
} from "@/components/ui/sidebar"
import { useState } from "react"
import {
  Cat,
  ClipboardPenIcon,
  CloudSunRain,
  Home,
  UserPen,
  LogOut,
} from "lucide-react"

import { Link, Outlet } from "@tanstack/react-router"
import { toast } from "sonner"

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
  {
    title: "Cambio de nombre de usuario",
    to: '/EditUser',
    icon: UserPen,
  },
]

export default function Das() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const handleLogout = () => {
    toast("¿Estás seguro de que quieres cerrar sesión?", {
      action: {
        label: "Sí, salir",
        onClick: () => {
          // Aquí va la lógica real de logout
          // Por ejemplo: store.setState({ isAuthenticated: false, username: "" });
          toast.success("Sesión cerrada exitosamente.")
          // router.navigate({ to: "/login" }) si quieres redirigir
        },
      },
      cancel: {
        label: "Cancelar",
        onClick: () => toast.info("Cancelado"),
      },
      duration: 8000,
    })
  }
  


   return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className={`${isCollapsed ? 'w-[60px]' : 'w-[250px]'} transition-all duration-300`}>
          <SidebarHeader>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 text-xs text-gray-600 hover:text-black"
            >
              {isCollapsed ? "➡️" : "⬅️"}
            </button>
          </SidebarHeader>

          {!isCollapsed && (
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
          )}

          {!isCollapsed && (
            <SidebarFooter className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 p-2 text-sm text-red-600 hover:bg-red-100 rounded-md transition"
              >
                <LogOut size={16} />
                Cerrar sesión
              </button>
            </SidebarFooter>
          )}
        </Sidebar>

        <Outlet />
      </div>
    </SidebarProvider>
  )
}