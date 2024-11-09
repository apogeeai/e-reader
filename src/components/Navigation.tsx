import React from 'react';
import { Home, Library } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const { theme } = useTheme();
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 ${
      theme === 'dark' 
        ? 'bg-kindle-dark-paper border-kindle-dark-border' 
        : 'bg-kindle-paper border-kindle-border'
    } border-t flex justify-around py-3`}>
      <button className="flex flex-col items-center">
        <Home className="w-6 h-6" />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center opacity-50">
        <Library className="w-6 h-6" />
        <span className="text-xs mt-1">Library</span>
      </button>
    </div>
  );
}