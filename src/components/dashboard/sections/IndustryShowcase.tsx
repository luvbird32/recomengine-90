
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { IndustryCard } from "./industry/IndustryCard";
import { industries, keyStrengths } from "./industry/industryData";

export function IndustryShowcase() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our recommendation algorithms are versatile and adaptable, serving diverse industries 
          from technology platforms to retail commerce, each with tailored algorithmic approaches.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <IndustryCard key={index} industry={industry} />
        ))}
      </div>

      {/* Key Strengths */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Strengths for Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {keyStrengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3">
                {strength.icon}
                <div>
                  <h4 className="font-semibold">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mathematical Adaptability */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-500" />
            Universal Adaptability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Our mathematical similarity metrics (Cosine, Jaccard, Pearson) make the system adaptable 
            to virtually any industry where you need to find similarities between users, items, or content. 
            From financial services to healthcare, from automotive to real estate - if there's data to compare, 
            our algorithms can provide intelligent recommendations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
