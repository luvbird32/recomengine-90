interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  interests: string[];
}

interface Content {
  id: string;
  title: string;
  type: 'post' | 'article' | 'video';
  creator: string;
  views: number;
  likes: number;
  timestamp: string;
}

interface MutualScore {
  userId: string;
  mutualScore: number;
  sharedInterests: string[];
  sharedConnections: number;
}

// Mock users data
const users: User[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    avatar: '/placeholder.svg',
    bio: 'Digital Creator | Tech Enthusiast',
    followers: 1200,
    following: 350,
    interests: ['technology', 'programming', 'ai']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: '/placeholder.svg',
    bio: 'Content Creator | Photography',
    followers: 3400,
    following: 890,
    interests: ['photography', 'travel', 'art']
  },
  {
    id: '3',
    name: 'Marcus Rodriguez',
    avatar: '/placeholder.svg',
    bio: 'Software Engineer | Open Source Contributor',
    followers: 890,
    following: 450,
    interests: ['programming', 'opensource', 'webdev']
  }
];

// Mock content data
const contents: Content[] = [
  {
    id: '1',
    title: 'Getting Started with AI Development',
    type: 'article',
    creator: 'Alex Thompson',
    views: 1500,
    likes: 230,
    timestamp: '2024-02-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Urban Photography Tips',
    type: 'video',
    creator: 'Sarah Chen',
    views: 2800,
    likes: 450,
    timestamp: '2024-02-14T15:30:00Z'
  },
  {
    id: '3',
    title: 'Building Scalable Web Applications',
    type: 'post',
    creator: 'Marcus Rodriguez',
    views: 980,
    likes: 145,
    timestamp: '2024-02-13T09:15:00Z'
  }
];

interface ContentFeatures {
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

const contentFeatures: ContentFeatures[] = [
  {
    id: '1',
    features: ['ai', 'development', 'tutorial'],
    category: 'article',
    tags: ['machine-learning', 'programming', 'beginner'],
    metadata: {
      complexity: 0.6,
      popularity: 0.85,
      recency: 0.95
    }
  },
  {
    id: '2',
    features: ['photography', 'urban', 'technique'],
    category: 'video',
    tags: ['composition', 'lighting', 'intermediate'],
    metadata: {
      complexity: 0.4,
      popularity: 0.75,
      recency: 0.88
    }
  },
  {
    id: '3',
    features: ['web', 'architecture', 'scalability'],
    category: 'post',
    tags: ['backend', 'performance', 'advanced'],
    metadata: {
      complexity: 0.8,
      popularity: 0.65,
      recency: 0.92
    }
  }
];

export const getContentBasedRecommendations = (
  contentId: string,
  limit: number = 5
): { id: string; similarity: number; features: string[] }[] => {
  const targetContent = contentFeatures.find(c => c.id === contentId);
  if (!targetContent) return [];

  const recommendations = contentFeatures
    .filter(content => content.id !== contentId)
    .map(content => {
      // Calculate feature similarity
      const sharedFeatures = content.features.filter(f => 
        targetContent.features.includes(f)
      );
      
      // Calculate tag similarity
      const sharedTags = content.tags.filter(t => 
        targetContent.tags.includes(t)
      );

      // Calculate metadata similarity using weighted Euclidean distance
      const metadataSimilarity = 1 - Math.sqrt(
        (Math.pow(content.metadata.complexity - targetContent.metadata.complexity, 2) * 0.3) +
        (Math.pow(content.metadata.popularity - targetContent.metadata.popularity, 2) * 0.4) +
        (Math.pow(content.metadata.recency - targetContent.metadata.recency, 2) * 0.3)
      );

      // Calculate overall similarity score (weighted average)
      const similarity = (
        (sharedFeatures.length / Math.max(content.features.length, targetContent.features.length) * 0.4) +
        (sharedTags.length / Math.max(content.tags.length, targetContent.tags.length) * 0.3) +
        (metadataSimilarity * 0.3)
      );

      return {
        id: content.id,
        similarity,
        features: sharedFeatures
      };
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);

  return recommendations;
};

export const getMutualRecommendations = (userId: string, limit: number = 5): MutualScore[] => {
  const currentUser = users.find(u => u.id === userId);
  if (!currentUser) return [];

  return users
    .filter(user => user.id !== userId)
    .map(user => {
      // Calculate shared interests
      const sharedInterests = currentUser.interests.filter(interest => 
        user.interests.includes(interest)
      );

      // Calculate mutual score based on shared interests and network overlap
      const mutualScore = (
        (sharedInterests.length / Math.max(currentUser.interests.length, user.interests.length)) * 0.7 +
        (Math.min(user.followers, currentUser.followers) / 
         Math.max(user.followers, currentUser.followers)) * 0.3
      );

      return {
        userId: user.id,
        mutualScore,
        sharedInterests,
        sharedConnections: Math.floor(Math.random() * 10) // Mock data - in real app would calculate actual shared connections
      };
    })
    .sort((a, b) => b.mutualScore - a.mutualScore)
    .slice(0, limit);
};

export const getRecommendedUsers = (currentUserInterests: string[] = ['technology', 'programming']) => {
  // Simple recommendation based on shared interests
  return users
    .filter(user => user.interests.some(interest => currentUserInterests.includes(interest)))
    .sort((a, b) => b.followers - a.followers);
};

export const getRecommendedContent = (userInterests: string[] = ['technology', 'programming']) => {
  // Simple content recommendation based on popularity and recency
  return contents.sort((a, b) => {
    const scoreA = (a.views * 0.3) + (a.likes * 0.7);
    const scoreB = (b.views * 0.3) + (b.likes * 0.7);
    return scoreB - scoreA;
  });
};

export const trackUserBehavior = (
  userId: string,
  action: 'view' | 'like' | 'follow',
  targetId: string,
  targetType: 'user' | 'content'
) => {
  console.log(`Tracking: User ${userId} performed ${action} on ${targetType} ${targetId}`);
  // In a real application, this would send data to your analytics service
};
