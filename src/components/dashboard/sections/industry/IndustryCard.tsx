
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Industry {
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: string[];
  algorithms: string[];
}

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          {industry.icon}
          <CardTitle className="text-lg">{industry.name}</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">{industry.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2">Example Platforms</h4>
          <div className="flex flex-wrap gap-2">
            {industry.examples.map((example, exampleIndex) => (
              <Badge key={exampleIndex} variant="outline" className="text-xs">
                {example}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Recommended Algorithms</h4>
          <div className="flex flex-wrap gap-2">
            {industry.algorithms.map((algo, algoIndex) => (
              <Badge key={algoIndex} variant="secondary" className="text-xs">
                {algo}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
