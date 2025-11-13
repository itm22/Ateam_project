import type React from 'react';

export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface Habit {
  id: number;
  name: string;
  description: string | null;
  days: Day[];
  activate: boolean;
}