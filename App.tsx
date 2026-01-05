import React, { useState, useEffect } from 'react';
import type { Surah } from './types';
import { surahs } from './data';
import { useTheme } from './hooks/useTheme';
import { FontSizeProvider } from './contexts/FontSizeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SurahDetail from './components/SurahDetail';
import WelcomePage from './components/WelcomePage';
import IntroPage from './components/IntroPage';
import PasswordProtection from './components/PasswordProtection';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(() => !localStorage.getItem('hasVisited'));
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('isAuthenticated'));

  const handleSelectSurah = (surah: Surah) => {
    setSelectedSurah(surah);
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setSelectedSurah(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleStartReading = () => {
    localStorage.setItem('hasVisited', 'true');
    setShowIntro(false);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  if (showIntro) {
    return <IntroPage onStart={handleStartReading} />;
  }

  return (
    <FontSizeProvider>
      <div className={`font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300`}>
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
          onGoHome={handleGoHome}
        />
        <Sidebar
          surahs={surahs}
          selectedSurah={selectedSurah}
          onSelectSurah={handleSelectSurah}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <main className="container mx-auto p-4 md:p-8">
          {selectedSurah ? (
            <SurahDetail surah={selectedSurah} />
          ) : (
            <WelcomePage surahs={surahs} onSelectSurah={handleSelectSurah} />
          )}
        </main>
      </div>
    </FontSizeProvider>
  );
}

export default App;
