import React from 'react';
import type { Surah } from '../types';
import { CloseIcon } from './Icons';

interface SidebarProps {
  surahs: Surah[];
  selectedSurah: Surah | null;
  onSelectSurah: (surah: Surah) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ surahs, selectedSurah, onSelectSurah, isOpen, setIsOpen }) => {
  const sidebarClasses = `
    fixed
    top-0 left-0 h-full z-50
    w-64 bg-white dark:bg-gray-800 shadow-lg 
    transition-transform duration-300 ease-in-out
    flex flex-col
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      <div className={sidebarClasses}>
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <h2 className="text-lg font-bold text-amber-500">Daftar Surah</h2>
          <button onClick={() => setIsOpen(false)} className="p-2">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-2 flex-1 overflow-y-auto">
          <ul>
            {surahs.map(surah => (
              <li key={surah.id}>
                <button
                  onClick={() => onSelectSurah(surah)}
                  className={`w-full text-left p-3 my-1 rounded-lg transition-colors ${
                    selectedSurah?.id === surah.id
                      ? 'bg-amber-500 dark:bg-amber-600 text-white font-bold'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {surah.id}. {surah.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div 
            onClick={() => setIsOpen(false)} 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  );
};

export default Sidebar;