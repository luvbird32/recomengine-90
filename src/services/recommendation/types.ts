export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  interests: string[];
}

export interface Content {
  id: string;
  title: string;
  type: 'post' | 'article' | 'video';
  creator: string;
  views: number;
  likes: number;
  timestamp: string;
}

export interface MutualScore {
  userId: string;
  mutualScore: number;
  sharedInterests: string[];
  sharedConnections: number;
}

export interface ContentFeatures {
  id: string;
  features: string[];
  category: string;
  tags: string[];
  metadata: {
    complexity: number;
    popularity: number;
    recency: number;
  };
}