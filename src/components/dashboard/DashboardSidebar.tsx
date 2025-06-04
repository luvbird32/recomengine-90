
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { DashboardSidebarHeader } from "./DashboardSidebarHeader";
import { DashboardMenu } from "./DashboardMenu";

interface DashboardSidebarProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardSidebar({ children, activeSection, onSectionChange }: DashboardSidebarProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar collapsible="icon" variant="sidebar">
          <SidebarHeader>
            <DashboardSidebarHeader />
          </SidebarHeader>
          <SidebarContent>
            <DashboardMenu 
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            />
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
