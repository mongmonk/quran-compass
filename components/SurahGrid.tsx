import React from 'react';
import type { Surah } from '../types';
import { surahInfo } from '../data/surah-info';

interface SurahGridProps {
  surahs: Surah[];
  onSelectSurah: (surah: Surah) => void;
}

const SurahGrid: React.FC<SurahGridProps> = ({ surahs, onSelectSurah }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {surahs.map((surah) => {
        const info = surahInfo[surah.id];
        return (
          <button
            key={surah.id}
            onClick={() => onSelectSurah(surah)}
            className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">
                  {surah.orderInQuran}
                </div>
                <div className="ml-2">
                  <p className="font-bold text-lg text-gray-900 dark:text-white">{surah.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {info.translation} &middot; {surah.numberOfAyat} ayat
                  </p>
                </div>
              </div>
              <p className="text-3xl font-arabic text-gray-800 dark:text-gray-200" lang="ar" dir="rtl">
                {info.arabic}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SurahGrid;