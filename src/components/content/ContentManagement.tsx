
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Edit2, Trash2, Check, X, Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContentItem {
  id: string;
  title: string;
  category: string;
  status: 'published' | 'pending' | 'rejected';
  lastModified: string;
}

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
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleNewContent} className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              New Content
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'published' ? 'bg-green-100 text-green-800' :
                      item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      {item.status === 'pending' && (
                        <>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-green-600"
                            onClick={() => handleStatusChange(item.id, 'published')}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-600"
                            onClick={() => handleStatusChange(item.id, 'rejected')}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-600"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
