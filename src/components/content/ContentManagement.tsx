
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ContentTable } from "./ContentTable";
import { ContentFilters } from "./ContentFilters";
import { ContentItem } from "./types";

const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Recommendation Engine Setup Guide',
    category: 'Documentation',
    status: 'published',
    lastModified: '2024-02-20'
  },
  {
    id: '2',
    title: 'API Integration Best Practices',
    category: 'Technical',
    status: 'pending',
    lastModified: '2024-02-19'
  },
  {
    id: '3',
    title: 'Performance Optimization Tips',
    category: 'Guide',
    status: 'published',
    lastModified: '2024-02-18'
  },
  {
    id: '4',
    title: 'User Analytics Dashboard',
    category: 'Tutorial',
    status: 'pending',
    lastModified: '2024-02-17'
  }
];

export function ContentManagement() {
  const [content, setContent] = useState<ContentItem[]>(mockContent);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const filteredContent = content.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || item.category === selectedCategory)
  );

  const categories = ['all', ...Array.from(new Set(content.map(item => item.category)))];

  const handleStatusChange = (id: string, newStatus: 'published' | 'rejected') => {
    setContent(prev => prev.map(item => 
      item.id === id 
        ? { ...item, status: newStatus, lastModified: new Date().toISOString().split('T')[0] }
        : item
    ));
    
    toast({
      title: "Status Updated",
      description: `Content ${newStatus === 'published' ? 'approved' : 'rejected'} successfully.`,
    });
  };

  const handleDelete = (id: string) => {
    setContent(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Content Deleted",
      description: "Content item has been removed.",
      variant: "destructive",
    });
  };

  const handleNewContent = () => {
    const newItem: ContentItem = {
      id: Date.now().toString(),
      title: 'New Content Item',
      category: 'Draft',
      status: 'pending',
      lastModified: new Date().toISOString().split('T')[0]
    };
    
    setContent(prev => [newItem, ...prev]);
    toast({
      title: "Content Created",
      description: "New content item added to the queue.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Content Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <ContentFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            onNewContent={handleNewContent}
          />
          <ContentTable
            content={filteredContent}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </div>
      </CardContent>
    </Card>
  );
}
