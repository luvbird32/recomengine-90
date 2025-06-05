
import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { AlgorithmExplanationSection } from "@/components/dashboard/sections/AlgorithmExplanationSection";
import { IndustriesSection } from "@/components/dashboard/sections/IndustriesSection";
import { DeveloperSection } from "@/components/dashboard/settings/DeveloperSection";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "algorithms":
        return <AlgorithmExplanationSection />;
      case "industries":
        return <IndustriesSection />;
      case "developer":
        return <DeveloperSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <DashboardSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
      >
        <div className="p-8 max-w-full overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {renderSection()}
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );
};

export default Dashboard;
