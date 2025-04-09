
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Home, BarChart2, Users, FileText, Settings, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState("overview");
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon" variant="sidebar">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
                <BarChart2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-sidebar-foreground">RecommendEngine</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "overview"}
                  onClick={() => setActiveItem("overview")}
                  tooltip="Overview"
                >
                  <Home className="mr-2" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "analytics"}
                  onClick={() => setActiveItem("analytics")}
                  tooltip="Analytics"
                >
                  <BarChart2 className="mr-2" />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "users"}
                  onClick={() => setActiveItem("users")}
                  tooltip="Users"
                >
                  <Users className="mr-2" />
                  <span>Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "content"}
                  onClick={() => setActiveItem("content")}
                  tooltip="Content"
                >
                  <FileText className="mr-2" />
                  <span>Content</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "notifications"}
                  onClick={() => setActiveItem("notifications")}
                  tooltip="Notifications"
                >
                  <Bell className="mr-2" />
                  <span>Notifications</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "settings"}
                  onClick={() => setActiveItem("settings")}
                  tooltip="Settings"
                >
                  <Settings className="mr-2" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
