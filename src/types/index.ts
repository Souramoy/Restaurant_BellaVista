export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'starters' | 'mains' | 'desserts' | 'beverages';
  isSpecial?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image?: string;
}

export interface Service {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}