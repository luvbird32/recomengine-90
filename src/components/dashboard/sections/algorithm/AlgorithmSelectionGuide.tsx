
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AlgorithmSelectionGuide() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Algorithm Selection Guide</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">When to Use Each Category</h4>
            <div className="space-y-2 text-sm">
              <div><strong>User Behavior:</strong> When you have rich user interaction data</div>
              <div><strong>Content Analysis:</strong> When items have detailed metadata/features</div>
              <div><strong>Social Connections:</strong> For social platforms and community features</div>
              <div><strong>Mathematical Similarity:</strong> For precise, customizable matching</div>
              <div><strong>Hybrid & Advanced:</strong> For balanced, production-ready systems</div>
              <div><strong>Ensemble & ML:</strong> For maximum accuracy in high-stakes applications</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Progressive Implementation</h4>
            <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
              <li>Start with mathematical similarity for quick setup</li>
              <li>Add user behavior analysis as data grows</li>
              <li>Implement content analysis for rich metadata</li>
              <li>Combine with hybrid approaches for balance</li>
              <li>Scale to ensemble methods for optimization</li>
              <li>Add social features for community building</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
