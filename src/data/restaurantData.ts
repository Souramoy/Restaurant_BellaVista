import { TeamMember, Review, Service, Event } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Chef Marco Rossi",
    role: "Executive Chef",
    image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    name: "Isabella Martinez",
    role: "Sous Chef",
    image: "https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    name: "Antonio Silva",
    role: "Sommelier",
    image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Exceptional dining experience! The truffle arancini was absolutely divine, and the service was impeccable. Will definitely be returning!",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "Best restaurant in the city! The wagyu beef was cooked to perfection, and the ambiance is perfect for special occasions.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    comment: "Outstanding food and service. The chocolate soufflé is a must-try! The staff made our anniversary dinner truly special.",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200"
  }
];

export const services: Service[] = [
  {
    id: 1,
    name: "AC Seating",
    icon: "❄️",
    description: "Climate-controlled dining area"
  },
  {
    id: 2,
    name: "Outdoor Terrace",
    icon: "🌿",
    description: "Beautiful outdoor dining space"
  },
  {
    id: 3,
    name: "Free WiFi",
    icon: "📶",
    description: "High-speed internet access"
  },
  {
    id: 4,
    name: "Valet Parking",
    icon: "🚗",
    description: "Complimentary valet service"
  },
  {
    id: 5,
    name: "Kids Zone",
    icon: "🧸",
    description: "Family-friendly area"
  },
  {
    id: 6,
    name: "Live Music",
    icon: "🎵",
    description: "Weekend jazz performances"
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: "Wine Tasting Evening",
    description: "Join us for an exclusive wine tasting featuring selections from renowned vineyards",
    date: "Every Friday",
    image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    description: "An intimate dining experience with our executive chef",
    date: "Monthly",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Sunday Brunch",
    description: "Special brunch menu with bottomless mimosas",
    date: "Sundays 10AM-3PM",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];