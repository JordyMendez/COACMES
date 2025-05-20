import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";


export default function Das() {
    return (
        <SidebarProvider>
        <Outlet />
        </SidebarProvider>

);
}