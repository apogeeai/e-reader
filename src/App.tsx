import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { StatusBar } from './components/StatusBar';
import { SearchBar } from './components/SearchBar';
import { BookGrid } from './components/BookGrid';
import { Navigation } from './components/Navigation';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Book } from './types';

const books: Book[] = [
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    progress: '49%',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  },
  {
    title: 'The House of the Spirits',
    author: 'Isabel Allende',
    progress: '0%',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  },
  {
    title: 'The Kiss Quotient',
    author: 'Helen Hoang',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  }
];

const originalStories: Book[] = [
  {
    title: 'The Lost Soul of the City',
    author: 'Dean Koontz',
    cover: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  },
  {
    title: 'Cause of Death',
    author: 'Jeffery Deaver',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  },
  {
    title: 'Zero In',
    author: 'Dean Koontz',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  },
  {
    title: 'Kaleidoscope',
    author: 'Dean Koontz',
    cover: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=225&h=365&q=80&sat=-100'
  }
];

function AppContent() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-kindle-dark-paper text-kindle-dark-text' 
        : 'bg-kindle-paper text-kindle-text'
    }`}>
      <StatusBar time={currentTime} batteryLevel="91%" />
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-10 p-2 rounded-full border border-current"
      >
        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
      <SearchBar />
      <div className="pb-20 overflow-x-auto">
        <BookGrid title="YOUR LIBRARY" books={books} />
        <BookGrid title="AMAZON ORIGINAL STORIES" books={originalStories} showProgress={false} />
      </div>
      <Navigation />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}