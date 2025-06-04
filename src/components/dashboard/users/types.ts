
export interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Banned';
  joinDate: string;
  engagement: 'High' | 'Medium' | 'Low';
}

export const USERS_STORAGE_KEY = 'dashboard_users';
