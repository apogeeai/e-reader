import React from 'react';
import { Search, ShoppingCart, MoreVertical } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function SearchBar() {
  const { theme } = useTheme();
  
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search Kindle"
          className={`w-full pl-10 pr-4 py-2 rounded-full border ${
            theme === 'dark' 
              ? 'bg-kindle-dark-paper text-kindle-dark-text border-kindle-dark-border focus:ring-kindle-dark-border' 
              : 'bg-kindle-paper text-kindle-text border-kindle-border focus:ring-kindle-border'
          } focus:outline-none focus:ring-2`}
        />
        <div className="absolute right-3 top-2 flex items-center gap-4">
          <ShoppingCart className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}