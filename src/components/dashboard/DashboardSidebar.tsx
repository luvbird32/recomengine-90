
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
import { useState } from "react";

interface DashboardSidebarProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardSidebar({ children, activeSection, onSectionChange }: DashboardSidebarProps) {
  const menuItems = [
    { id: "overview", title: "Overview", icon: Home },
    { id: "analytics", title: "Analytics", icon: BarChart2 },
    { id: "users", title: "Users", icon: Users },
    { id: "content", title: "Content", icon: FileText },
    { id: "notifications", title: "Notifications", icon: Bell },
    { id: "settings", title: "Settings", icon: Settings },
  ];
  
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
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    isActive={activeSection === item.id}
                    onClick={() => onSectionChange(item.id)}
                    tooltip={item.title}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
