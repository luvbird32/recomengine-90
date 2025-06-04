
import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { AlgorithmExplanationSection } from "@/components/dashboard/sections/AlgorithmExplanationSection";
import { AnalyticsSection } from "@/components/dashboard/sections/AnalyticsSection";
import { UsersSection } from "@/components/dashboard/sections/UsersSection";
import { ContentSection } from "@/components/dashboard/sections/ContentSection";
import { NotificationsSection } from "@/components/dashboard/sections/NotificationsSection";
import { SettingsSection } from "@/components/dashboard/sections/SettingsSection";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "algorithms":
        return <AlgorithmExplanationSection />;
      case "analytics":
        return <AnalyticsSection />;
      case "users":
        return <UsersSection />;
      case "content":
        return <ContentSection />;
      case "notifications":
        return <NotificationsSection />;
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
