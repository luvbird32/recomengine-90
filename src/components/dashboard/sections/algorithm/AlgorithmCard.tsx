
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Algorithm } from "./algorithmData";

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

export function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  return (
    <Card className="p-4 bg-white border">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-medium">{algorithm.name}</Badge>
        </div>
        <p className="text-sm font-medium">{algorithm.explanation}</p>
        <div className="text-xs text-muted-foreground space-y-1">
          <div><strong>Best Use Case:</strong> {algorithm.useCase}</div>
          <div><strong>Example:</strong> {algorithm.example}</div>
        </div>
        <div className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
          <pre className="text-xs">
            <code>{algorithm.code}</code>
          </pre>
        </div>
      </div>
    </Card>
  );
}
