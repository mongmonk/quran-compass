import React from 'react';
import type { Ayah } from '../types';
import { useFontSize } from '../contexts/FontSizeContext';
import { withHonorifics } from '../utils/honorifics';

interface AyahCardProps {
  ayah: Ayah;
}

const AyahCard: React.FC<AyahCardProps> = ({ ayah }) => {
  const { fontClass } = useFontSize();
  const clipPathStyle = {clipPath: 'polygon(0% 15%, 50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%)'};

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start ml-6">
      {/* Ayah Text Card */}
      <div className="relative md:col-span-2">
         {/* The verse number circle - positioned relative to the outer container */}
         <div 
          className="absolute z-10 -left-5 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-500 dark:bg-amber-600 flex items-center justify-center rounded-full shadow-lg"
        >
          <span className="text-white text-lg font-bold">
            {ayah.id}
          </span>
        </div>

        {/* The main card with border and content */}
        <div
          className="bg-gray-900 dark:bg-gray-400 p-0.5" // This creates the border
          style={clipPathStyle}
        >
          <div
            className="bg-white dark:bg-gray-800 p-8 text-center" // Inner content with padding
            style={clipPathStyle}
          >
            <p className="text-base font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Ayat {ayah.range}</p>
            <p className="text-lg md:text-xl leading-relaxed">
              {withHonorifics(ayah.text)}
            </p>
          </div>
        </div>
      </div>


      {/* Explanation Card */}
      <div className="border-2 border-gray-900 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
        <div className="bg-amber-500 dark:bg-amber-600 p-2 text-center text-white font-bold">
          {ayah.id}
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 flex-grow">
          <ul className={`list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ${fontClass}`}>
            {ayah.explanation.map((point, index) => (
              <li key={index}>{withHonorifics(point)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AyahCard;