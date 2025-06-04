
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
} from "lucide-react";

interface Industry {
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: string[];
  algorithms: string[];
}

export const industries: Industry[] = [
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

export const keyStrengths = [
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
