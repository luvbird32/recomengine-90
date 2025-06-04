
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlgorithmCategoryCard } from "./algorithm/AlgorithmCategoryCard";
import { AlgorithmSelectionGuide } from "./algorithm/AlgorithmSelectionGuide";
import { algorithmCategories } from "./algorithm/algorithmData";

export function AlgorithmExplanationSection() {
  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Recommendation Algorithm Categories</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our recommendation engine organizes algorithms into clear categories based on their approach and use cases. 
          Each category serves different scenarios and can be combined for optimal results.
        </p>
      </div>

      <Tabs defaultValue="user-behavior" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
          {algorithmCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1 text-xs">
              <category.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{category.name.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {algorithmCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <AlgorithmCategoryCard category={category} />
          </TabsContent>
        ))}
      </Tabs>

      <AlgorithmSelectionGuide />
    </div>
  );
}
