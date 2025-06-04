
import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { AlgorithmExplanationSection } from "@/components/dashboard/sections/AlgorithmExplanationSection";
import { IndustriesSection } from "@/components/dashboard/sections/IndustriesSection";
import { ContentSection } from "@/components/dashboard/sections/ContentSection";

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
