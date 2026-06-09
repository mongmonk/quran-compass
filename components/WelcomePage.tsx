import React, { useState, useMemo } from 'react';
import type { Surah } from '../types';
import SurahGrid from './SurahGrid';
import SearchBar from './SearchBar';
import { searchSurahs } from '../utils/searchSurahs';

interface WelcomePageProps {
  surahs: Surah[];
  onSelectSurah: (surah: Surah) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ surahs, onSelectSurah }) => {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchSurahs(surahs, query), [surahs, query]);

  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto">
        <SearchBar
          value={query}
          onChange={setQuery}
          size="lg"
          placeholder="Cari surah, topik, atau kata kunci..."
        />
      </div>

      {results.length > 0 ? (
        <SurahGrid surahs={results} onSelectSurah={onSelectSurah} />
      ) : (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <p className="text-lg">
            Tidak ada surah yang cocok dengan "
            <span className="font-semibold text-gray-700 dark:text-gray-200">{query}</span>".
          </p>
          <p className="text-sm mt-1">Coba kata kunci lain.</p>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
