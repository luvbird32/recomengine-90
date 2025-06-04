
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Check, X } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  category: string;
  status: 'published' | 'pending' | 'rejected';
  lastModified: string;
}

interface ContentTableProps {
  content: ContentItem[];
  onStatusChange: (id: string, status: 'published' | 'rejected') => void;
  onDelete: (id: string) => void;
}

export function ContentTable({ content, onStatusChange, onDelete }: ContentTableProps) {
  return (
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
        {content.map((item) => (
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
                      onClick={() => onStatusChange(item.id, 'published')}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-600"
                      onClick={() => onStatusChange(item.id, 'rejected')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-600"
                  onClick={() => onDelete(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
