import React from 'react';
import { SunIcon, MoonIcon, TextIncreaseIcon, TextDecreaseIcon, ResetFontSizeIcon, MenuIcon } from './Icons';
import { useFontSize } from '../contexts/FontSizeContext';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleSidebar: () => void;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  toggleSidebar,
  onGoHome,
}) => {
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
          <button onClick={onGoHome} className="text-left">
            <h1 className="text-xl md:text-2xl font-bold text-amber-500">
              Quran Compass
            </h1>
          </button>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-full">
            <button
              onClick={decreaseFontSize}
              aria-label="Decrease font size"
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <TextDecreaseIcon className="w-4 h-4" />
            </button>
            <button
              onClick={resetFontSize}
              aria-label="Reset font size"
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ResetFontSizeIcon className="w-4 h-4" />
            </button>
            <button
              onClick={increaseFontSize}
              aria-label="Increase font size"
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <TextIncreaseIcon className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {theme === 'light' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;