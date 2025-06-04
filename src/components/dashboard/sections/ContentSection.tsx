
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentManagement } from "@/components/content/ContentManagement";

export function ContentSection() {
  return (
    <div className="container p-6 mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <p className="text-muted-foreground">Manage your content library and recommendations</p>
      </div>
      
      <ContentManagement />
    </div>
  );
}
