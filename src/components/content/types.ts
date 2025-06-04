
export interface ContentItem {
  id: string;
  title: string;
  category: string;
  status: 'published' | 'pending' | 'rejected';
  lastModified: string;
}
