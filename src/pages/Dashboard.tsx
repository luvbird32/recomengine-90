
import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { AlgorithmExplanationSection } from "@/components/dashboard/sections/AlgorithmExplanationSection";
import { IndustriesSection } from "@/components/dashboard/sections/IndustriesSection";
import { ContentSection } from "@/components/dashboard/sections/ContentSection";
import { SettingsSection } from "@/components/dashboard/sections/SettingsSection";
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
      case "content":
        return <ContentSection />;
      case "developer":
        return <DeveloperSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <DashboardSidebar 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
    >
      {renderSection()}
    </DashboardSidebar>
  );
};

export default Dashboard;
