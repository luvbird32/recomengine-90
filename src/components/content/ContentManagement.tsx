import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Edit2, Trash2, Shield, Check, X } from "lucide-react";
import { useState } from "react";

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
  }
];

export function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredContent = mockContent.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || item.category === selectedCategory)
  );

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
            <Button className="bg-purple-600 hover:bg-purple-700">
              <FileText className="mr-2 h-4 w-4" />
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
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm" className="text-red-600">
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