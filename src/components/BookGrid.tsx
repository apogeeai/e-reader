import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Book } from '../types';

export function BookGrid({ title, books, showProgress = true }: { 
  title: string; 
  books: Book[]; 
  showProgress?: boolean;
}) {
  const { theme } = useTheme();
  
  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-4">
        {books.map((book, index) => (
          <div key={index} className="relative w-[225px]">
            <img 
              src={book.cover} 
              alt={book.title}
              width={225}
              height={365}
              className={`w-[225px] h-[365px] object-cover grayscale ${
                theme === 'dark' ? 'brightness-75' : 'brightness-100'
              } rounded`}
            />
            {showProgress && book.progress && book.progress !== '0%' && (
              <div className={`absolute bottom-2 left-2 ${
                theme === 'dark' 
                  ? 'bg-kindle-dark-paper text-kindle-dark-text' 
                  : 'bg-kindle-paper text-kindle-text'
              } bg-opacity-70 text-xs px-2 py-1 rounded-full border border-current`}>
                {book.progress}
              </div>
            )}
            <div className="mt-2">
              <h3 className="font-medium text-sm truncate">{book.title}</h3>
              <p className="text-xs text-gray-500 truncate">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}