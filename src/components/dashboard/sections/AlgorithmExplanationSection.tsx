
import { AlgorithmSectionHeader } from "./algorithm/AlgorithmSectionHeader";
import { AlgorithmTabs } from "./algorithm/AlgorithmTabs";
import { AlgorithmSelectionGuide } from "./algorithm/AlgorithmSelectionGuide";

export function AlgorithmExplanationSection() {
  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <AlgorithmSectionHeader />
      <AlgorithmTabs />
      <AlgorithmSelectionGuide />
    </div>
  );
}
