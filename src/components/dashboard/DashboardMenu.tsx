
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { menuItems, MenuItem } from "./DashboardSidebarData";

interface DashboardMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function DashboardMenu({ activeSection, onSectionChange }: DashboardMenuProps) {
  return (
    <SidebarMenu>
      {menuItems.map((item: MenuItem) => (
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
  );
}
