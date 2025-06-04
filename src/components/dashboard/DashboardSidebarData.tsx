
import { Home, BarChart2, Building2 } from "lucide-react";

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const menuItems: MenuItem[] = [
  { id: "overview", title: "Overview", icon: Home },
  { id: "algorithms", title: "Algorithms", icon: BarChart2 },
  { id: "industries", title: "Industries", icon: Building2 },
];
