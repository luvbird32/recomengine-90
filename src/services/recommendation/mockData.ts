import { User, Content, ContentFeatures } from './types';

export const users: User[] = [
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

export const contents: Content[] = [
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

export const contentFeatures: ContentFeatures[] = [
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