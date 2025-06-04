
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Play, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  ShoppingBag,
  Code,
  Tv,
  Users,
  BookOpen,
  Coffee,
  MapPin
} from "lucide-react";

interface Industry {
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: string[];
  algorithms: string[];
}

export function IndustryShowcase() {
  const industries: Industry[] = [
    {
      name: "Technology & Software",
      icon: <Monitor className="h-6 w-6 text-blue-500" />,
      description: "Content platforms, e-commerce, social media, and developer tools",
      examples: ["YouTube", "Amazon", "LinkedIn", "GitHub", "Stack Overflow"],
      algorithms: ["Collaborative Filtering", "Content-Based", "Hybrid"]
    },
    {
      name: "Media & Entertainment",
      icon: <Play className="h-6 w-6 text-purple-500" />,
      description: "Streaming services, gaming platforms, news and publishing",
      examples: ["Netflix", "Spotify", "Steam", "Medium", "Podcast Apps"],
      algorithms: ["User Behavior", "Content Analysis", "Ensemble Methods"]
    },
    {
      name: "Professional & Business",
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      description: "Professional networking, HR recruitment, B2B services",
      examples: ["LinkedIn", "Indeed", "Upwork", "Salesforce", "HubSpot"],
      algorithms: ["Mutual Connections", "Social Filtering", "Mathematical Similarity"]
    },
    {
      name: "Education & Learning",
      icon: <GraduationCap className="h-6 w-6 text-indigo-500" />,
      description: "Online courses, academic content, skill development platforms",
      examples: ["Udemy", "Coursera", "Khan Academy", "ResearchGate", "Duolingo"],
      algorithms: ["Content-Based", "Learning Path", "Adaptive Learning"]
    },
    {
      name: "Social & Community",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      description: "Dating apps, community platforms, event discovery",
      examples: ["Tinder", "Discord", "Meetup", "Reddit", "Facebook Groups"],
      algorithms: ["Mutual Interest", "Social Connections", "Preference Matching"]
    },
    {
      name: "Retail & Commerce",
      icon: <ShoppingBag className="h-6 w-6 text-orange-500" />,
      description: "Fashion, food & dining, travel and accommodation",
      examples: ["Zara", "Uber Eats", "Airbnb", "TripAdvisor", "Yelp"],
      algorithms: ["Purchase History", "Location-Based", "Seasonal Trends"]
    }
  ];

  const keyStrengths = [
    {
      icon: <Code className="h-5 w-5 text-blue-500" />,
      title: "Rich User Interaction Data",
      description: "Perfect for collaborative filtering algorithms"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
      title: "Detailed Content Metadata",
      description: "Ideal for content-based filtering systems"
    },
    {
      icon: <Users className="h-5 w-5 text-purple-500" />,
      title: "Social Connections",
      description: "Enables mutual recommendation features"
    },
    {
      icon: <Tv className="h-5 w-5 text-orange-500" />,
      title: "Multiple Data Sources",
      description: "Supports hybrid and ensemble approaches"
    }
  ];

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
          <Card key={index} className="hover:shadow-lg transition-shadow">
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
