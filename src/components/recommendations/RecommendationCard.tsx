import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus, MapPin, Sparkles } from "lucide-react";

interface RecommendationCardProps {
  type: 'user' | 'content' | 'location';
  title: string;
  description: string;
  image?: string;
  score: number;
  location?: string;
}

export function RecommendationCard({ type, title, description, image, score, location }: RecommendationCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        {type === 'user' && (
          <Avatar className="h-12 w-12">
            <img src={image || "/placeholder.svg"} alt={title} className="object-cover" />
          </Avatar>
        )}
        <div className="flex-1">
          <CardTitle className="text-lg flex items-center gap-2">
            {title}
            {score > 0.8 && <Sparkles className="h-4 w-4 text-yellow-500" />}
          </CardTitle>
          <CardDescription>
            {location && (
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" /> {location}
              </span>
            )}
          </CardDescription>
        </div>
        {type === 'user' && (
          <Button size="sm" className="ml-auto">
            <UserPlus className="h-4 w-4 mr-2" /> Follow
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}