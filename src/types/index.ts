export interface Tutor {
  id: string;
  name: string;
  subjects: string[];
  hourlyRate: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  description: string;
  availability: string[];
}

export interface Session {
  id: string;
  tutorId: string;
  studentId: string;
  subject: string;
  date: Date;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
}