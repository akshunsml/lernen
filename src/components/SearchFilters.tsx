import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by subject or tutor name..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onFilterChange({ subject: e.target.value })}
          >
            <option value="">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Literature">Literature</option>
            <option value="Languages">Languages</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => onFilterChange({ priceRange: e.target.value })}
          >
            <option value="">Price Range</option>
            <option value="0-25">$0 - $25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50+">$50+</option>
          </select>
        </div>
      </div>
    </div>
  );
};