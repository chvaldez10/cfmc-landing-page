export interface EventData {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  updatedAt: Date;
  createdAt: Date;
  tags: string[];
  category: string; // similar to tags: Bible study, potluck, social
  occurrence: string; // multiple-days,weekly, monthly, one-time
  description: string;
  image: string;
  location: string;
  status: string;
  organizerName: string;
  slug: string;
}

export interface EventDataProps {
  id?: number;
  name: string;
  startDate: Date;
  endDate: Date;
  tags?: string[];
  category: string;
  occurrence: string;
  description: string;
  image: string;
  location: string;
  status: string;
  organizerName: string;
  slug: string;
}
