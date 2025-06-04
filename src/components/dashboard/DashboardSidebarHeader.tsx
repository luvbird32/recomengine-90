
import { BarChart2 } from "lucide-react";

export function DashboardSidebarHeader() {
  return (
    <div className="flex items-center gap-2 px-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
        <BarChart2 className="h-5 w-5" />
      </div>
      <span className="font-semibold text-sidebar-foreground">RecommendEngine</span>
    </div>
  );
}
