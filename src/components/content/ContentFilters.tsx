
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

interface ContentFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  onNewContent: () => void;
}

export function ContentFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  categories, 
  onNewContent 
}: ContentFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input
        placeholder="Search content..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
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
      <Button onClick={onNewContent} className="bg-purple-600 hover:bg-purple-700">
        <Plus className="mr-2 h-4 w-4" />
        New Content
      </Button>
    </div>
  );
}
