export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Workout {
  id: string;
  userId: string;
  type: string;
  duration: number;
  date: Date;
  notes?: string;
}

export type ApiResponse<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: string;
};
