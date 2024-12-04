import React from 'react';
import { GraduationCap, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Lernen</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Find Tutors</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">How it Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Become a Tutor</a>
            <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};