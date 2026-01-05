import React from 'react';
import type { Surah } from '../types';
import SurahGrid from './SurahGrid';

interface WelcomePageProps {
  surahs: Surah[];
  onSelectSurah: (surah: Surah) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ surahs, onSelectSurah }) => {
  return (
    <SurahGrid surahs={surahs} onSelectSurah={onSelectSurah} />
  );
};

export default WelcomePage;
