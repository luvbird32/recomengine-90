export const trackUserBehavior = (
  userId: string,
  action: 'view' | 'like' | 'follow',
  targetId: string,
  targetType: 'user' | 'content'
) => {
  console.log(`Tracking: User ${userId} performed ${action} on ${targetType} ${targetId}`);
  // In a real application, this would send data to your analytics service
};