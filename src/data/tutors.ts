import { Tutor } from '../types';

export const tutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    subjects: ['Mathematics', 'Physics'],
    hourlyRate: 45,
    rating: 4.9,
    reviews: 128,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'PhD in Applied Mathematics with 8+ years of teaching experience. Specializing in calculus and quantum mechanics.',
    availability: ['Mon', 'Wed', 'Fri']
  },
  {
    id: '2',
    name: 'Prof. James Wilson',
    subjects: ['Literature', 'Creative Writing'],
    hourlyRate: 40,
    rating: 4.8,
    reviews: 95,
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Published author and literature professor. Helping students discover their creative voice for over a decade.',
    availability: ['Tue', 'Thu', 'Sat']
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    subjects: ['Spanish', 'French'],
    hourlyRate: 35,
    rating: 4.7,
    reviews: 156,
    imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Native Spanish speaker with certification in French. Interactive and engaging language learning methods.',
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  }
];