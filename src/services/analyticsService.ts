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

export const getLocationAnalytics = () => {
  const locationEvents = analyticsEvents.filter(event => event.metadata?.location);
  
  // Group by country/city
  const locationMap = new Map<string, number>();
  
  locationEvents.forEach(event => {
    const location = event.metadata?.location;
    if (location?.city && location?.country) {
      const key = `${location.city}, ${location.country}`;
      locationMap.set(key, (locationMap.get(key) || 0) + 1);
    }
  });
  
  return Array.from(locationMap.entries()).map(([location, count]) => ({
    location,
    engagementCount: count,
  }));
};