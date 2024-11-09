import React from 'react';
import { useTheme } from '../context/ThemeContext';

export function StatusBar({ time, batteryLevel }: { time: string; batteryLevel: string }) {
  const { theme } = useTheme();
  
  return (
    <div className={`flex justify-between items-center px-4 py-2 ${
      theme === 'dark' 
        ? 'bg-kindle-dark-paper border-kindle-dark-border' 
        : 'bg-kindle-paper border-kindle-border'
    } border-b`}>
      <span className="text-sm">{time}</span>
      <div className={`w-8 h-1 ${
        theme === 'dark' ? 'bg-kindle-dark-text' : 'bg-kindle-text'
      } rounded-full mx-auto`} />
      <div className="flex items-center gap-2">
        <span className="text-sm">{batteryLevel}</span>
        <div className="w-6 h-3 border border-current rounded-sm relative">
          <div className="absolute inset-0.5 bg-current" style={{width: batteryLevel}} />
        </div>
      </div>
    </div>
  );
}