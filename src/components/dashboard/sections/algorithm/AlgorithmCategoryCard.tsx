
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlgorithmCard } from "./AlgorithmCard";
import { AlgorithmCategory } from "./algorithmData";

interface AlgorithmCategoryCardProps {
  category: AlgorithmCategory;
}

export function AlgorithmCategoryCard({ category }: AlgorithmCategoryCardProps) {
  const IconComponent = category.icon;
  
  return (
    <Card className={category.color}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconComponent className="h-5 w-5" />
          {category.name}
        </CardTitle>
        <p className="text-muted-foreground">{category.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Available Algorithms</h3>
          {category.algorithms.map((algorithm, index) => (
            <AlgorithmCard key={index} algorithm={algorithm} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
