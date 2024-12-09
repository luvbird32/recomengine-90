import { trackUserBehavior } from './recommendationService';

interface AnalyticsEvent {
  userId: string;
  eventType: 'view' | 'like' | 'follow' | 'timeSpent' | 'search';
  targetId: string;
  targetType: 'user' | 'content';
  metadata?: {
    duration?: number;
    location?: {
      latitude: number;
      longitude: number;
      city?: string;
      country?: string;
    };
    searchQuery?: string;
    mutualScore?: number;
    sharedInterests?: string[];
  };
  timestamp: Date;
}

// In-memory storage for demo purposes
let analyticsEvents: AnalyticsEvent[] = [];

export const trackEvent = (event: Omit<AnalyticsEvent, 'timestamp'>) => {
  const fullEvent = {
    ...event,
    timestamp: new Date(),
  };
  analyticsEvents.push(fullEvent);
  console.log('Tracked event:', fullEvent);
  
  // Also track in recommendation system
  trackUserBehavior(event.userId, event.eventType as any, event.targetId, event.targetType);
};

export const getContentEngagementMetrics = (contentId: string) => {
  const contentEvents = analyticsEvents.filter(event => event.targetId === contentId);
  
  return {
    views: contentEvents.filter(e => e.eventType === 'view').length,
    likes: contentEvents.filter(e => e.eventType === 'like').length,
    averageTimeSpent: calculateAverageTimeSpent(contentEvents),
    totalEngagements: contentEvents.length,
  };
};

export const getUserEngagementMetrics = (userId: string) => {
  const userEvents = analyticsEvents.filter(
    event => event.userId === userId || event.targetId === userId
  );
  
  return {
    followers: analyticsEvents.filter(e => e.targetId === userId && e.eventType === 'follow').length,
    contentViews: userEvents.filter(e => e.eventType === 'view').length,
    contentLikes: userEvents.filter(e => e.eventType === 'like').length,
    averageTimePerContent: calculateAverageTimeSpent(userEvents),
  };
};

const calculateAverageTimeSpent = (events: AnalyticsEvent[]) => {
  const timeSpentEvents = events.filter(e => e.eventType === 'timeSpent' && e.metadata?.duration);
  if (timeSpentEvents.length === 0) return 0;
  
  const totalTime = timeSpentEvents.reduce((sum, event) => sum + (event.metadata?.duration || 0), 0);
  return totalTime / timeSpentEvents.length;
};

export const getMutualSimilarityMetrics = (userId: string) => {
  const mutualEvents = analyticsEvents.filter(
    event => event.userId === userId && event.metadata?.mutualScore
  );
  
  return {
    averageMutualScore: calculateAverageMutualScore(mutualEvents),
    totalMutualConnections: calculateTotalMutualConnections(mutualEvents),
    interestOverlapRate: calculateInterestOverlapRate(mutualEvents),
    topSharedInterests: getTopSharedInterests(mutualEvents)
  };
};

const calculateAverageMutualScore = (events: AnalyticsEvent[]) => {
  const scores = events.map(e => e.metadata?.mutualScore || 0);
  return scores.length ? scores.reduce((a, b) => a + b) / scores.length : 0;
};

const calculateTotalMutualConnections = (events: AnalyticsEvent[]) => {
  return events.filter(e => e.eventType === 'follow').length;
};

const calculateInterestOverlapRate = (events: AnalyticsEvent[]) => {
  const interestEvents = events.filter(e => e.metadata?.sharedInterests);
  if (!interestEvents.length) return 0;
  return interestEvents.reduce((sum, event) => 
    sum + (event.metadata?.sharedInterests?.length || 0), 0) / interestEvents.length;
};

const getTopSharedInterests = (events: AnalyticsEvent[]) => {
  const interests = events
    .flatMap(e => e.metadata?.sharedInterests || [])
    .reduce((acc: Record<string, number>, interest: string) => {
      acc[interest] = (acc[interest] || 0) + 1;
      return acc;
    }, {});
  
  return Object.entries(interests)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([interest]) => interest);
};
