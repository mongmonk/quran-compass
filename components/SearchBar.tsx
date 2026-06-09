import React from 'react';
import { SearchIcon, CloseIcon } from './Icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: 'sm' | 'lg';
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Cari surah...',
  size = 'lg',
  autoFocus,
}) => {
  const sizeClasses = size === 'lg' ? 'py-3 text-base' : 'py-2 text-sm';

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
        <SearchIcon className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        aria-label="Cari surah"
        className={`w-full pl-10 pr-10 ${sizeClasses} rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Bersihkan pencarian"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
