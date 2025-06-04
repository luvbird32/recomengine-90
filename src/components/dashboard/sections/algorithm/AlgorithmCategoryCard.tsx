
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlgorithmCard } from "./AlgorithmCard";

interface Algorithm {
  name: string;
  explanation: string;
  useCase: string;
  example: string;
  code: string;
}

interface AlgorithmCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  algorithms: Algorithm[];
}

interface AlgorithmCategoryCardProps {
  category: AlgorithmCategory;
}

export function AlgorithmCategoryCard({ category }: AlgorithmCategoryCardProps) {
  return (
    <Card className={category.color}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {category.icon}
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
