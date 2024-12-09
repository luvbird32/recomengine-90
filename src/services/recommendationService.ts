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
