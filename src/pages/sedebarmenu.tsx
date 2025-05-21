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
} from "@/components/ui/sidebar";

import {
  Cat,
  ClipboardPenIcon,
  CloudSunRain,
  Home,
  UserPen,
  LogOut,
  Bone,
  SquareChevronRight,
  Circle,
} from "lucide-react";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

const items = [
  {
    title: "Home",
    to: "/home",
    icon: Home,
  },
  {
    title: "Clima",
    to: "/clima",
    icon: CloudSunRain,
  },
  {
    title: "Pokemon",
    to: "/pokemon",
    icon: Cat,
  },
  {
    title: "Cambio de contraseña",
    to: "/ChangePassword",
    icon: ClipboardPenIcon,
  },
  {
    title: "Cambio nombre de usuario",
    to: "/EditUser",
    icon: UserPen,
  },
  {
    title: "Skeleton",
    to: "/skeleton",
    icon: Bone,
  },
];

export default function SidebarMenuComponent() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    toast("¿Estás seguro de que quieres cerrar sesión?", {
      action: {
        label: "Sí, salir",
        onClick: () => {
          // Lógica de cierre de sesión real
          toast.success("Sesión cerrada exitosamente.");
        },
      },
      cancel: {
        label: "Cancelar",
        onClick: () => toast.info("Cancelado"),
      },
      duration: 8000,
    });
  };

  return (
    <Sidebar
      className={`${isCollapsed ? "w-[60px]" : "w-[250px]"} transition-all duration-300`}
    >
      <SidebarHeader>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-gray-600 hover:text-black transition"
        >
          {isCollapsed ? (
            <Circle size={20} />
          ) : (
            <SquareChevronRight size={20} />
          )}
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
                      <Link to={item.to}>
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
  );
}
