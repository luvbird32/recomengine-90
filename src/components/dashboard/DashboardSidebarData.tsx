
import { Home, BarChart2, Building2, FileText, Settings, Code } from "lucide-react";

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const menuItems: MenuItem[] = [
  { id: "overview", title: "Overview", icon: Home },
  { id: "algorithms", title: "Algorithms", icon: BarChart2 },
  { id: "industries", title: "Industries", icon: Building2 },
  { id: "content", title: "Content", icon: FileText },
  { id: "developer", title: "Developer", icon: Code },
  { id: "settings", title: "Settings", icon: Settings },
];
