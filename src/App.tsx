import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchFilters } from './components/SearchFilters';
import { TutorCard } from './components/TutorCard';
import { tutors } from './data/tutors';
import { Tutor } from './types';

function App() {
  const [filteredTutors, setFilteredTutors] = useState(tutors);

  const handleSearch = (query: string) => {
    const filtered = tutors.filter(tutor => 
      tutor.name.toLowerCase().includes(query.toLowerCase()) ||
      tutor.subjects.some(subject => 
        subject.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredTutors(filtered);
  };

  const handleFilterChange = (filters: any) => {
    let filtered = [...tutors];
    
    if (filters.subject) {
      filtered = filtered.filter(tutor => 
        tutor.subjects.includes(filters.subject)
      );
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(tutor => {
        if (max) {
          return tutor.hourlyRate >= min && tutor.hourlyRate <= max;
        }
        return tutor.hourlyRate >= min;
      });
    }

    setFilteredTutors(filtered);
  };

  const handleSelectTutor = (tutor: Tutor) => {
    console.log('Selected tutor:', tutor);
    // Implement booking logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl text-gray-600">
            Connect with expert tutors for personalized learning experiences
          </p>
        </div>

        <SearchFilters 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map(tutor => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              onSelect={handleSelectTutor}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;