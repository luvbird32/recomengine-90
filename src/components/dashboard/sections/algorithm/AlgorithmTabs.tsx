
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlgorithmCategoryCard } from "./AlgorithmCategoryCard";
import { algorithmCategories } from "./algorithmData";

interface AlgorithmTabsProps {
  defaultValue?: string;
}

export function AlgorithmTabs({ defaultValue = "user-behavior" }: AlgorithmTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
        {algorithmCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1 text-xs">
              <IconComponent className="h-5 w-5" />
              <span className="hidden sm:inline">{category.name.split(' ')[0]}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {algorithmCategories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <AlgorithmCategoryCard category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
