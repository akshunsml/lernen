import React from 'react';
import { Star, Clock, BookOpen } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onSelect: (tutor: Tutor) => void;
}

export const TutorCard: React.FC<TutorCardProps> = ({ tutor, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={tutor.imageUrl}
          alt={tutor.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{tutor.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-yellow-500 mb-2">
          <Star className="w-5 h-5 fill-current" />
          <span className="font-medium">{tutor.rating}</span>
          <span className="text-gray-600">({tutor.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <BookOpen className="w-5 h-5" />
          <span>{tutor.subjects.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Clock className="w-5 h-5" />
          <span>${tutor.hourlyRate}/hour</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{tutor.description}</p>
        <button
          onClick={() => onSelect(tutor)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Session
        </button>
      </div>
    </div>
  );
};