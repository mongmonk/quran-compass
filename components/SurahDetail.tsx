import React from 'react';
import type { Surah } from '../types';
import InfoCard from './InfoCard';
import AyahCard from './AyahCard';
import { QuranIcon, KaabaIcon } from './Icons';
import { surahInfo } from '../data/surah-info';
import { withHonorifics } from '../utils/honorifics';

interface SurahDetailProps {
  surah: Surah;
}

const SurahDetail: React.FC<SurahDetailProps> = ({ surah }) => {

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-gray-900 dark:text-white">
          {surah.name}
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mt-2">
          ({surahInfo[surah.id]?.translation || ''})
        </p>
        <div className="flex items-center justify-center my-4">
            <div className="h-0.5 flex-grow bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-0.5 w-16 mx-2 bg-amber-500"></div>
            <div className="h-0.5 flex-grow bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
        <InfoCard title="URUTAN DALAM QUR'AN" value={`#${surah.orderInQuran}`} />
        <InfoCard title="DITURUNKAN DI" value={surah.revealedIn} />
        <InfoCard title="JUMLAH AYAT" value={surah.numberOfAyat.toString()} />
      </section>
      
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 dark:bg-black text-amber-400">
                <QuranIcon className="w-8 h-8 md:w-10 md:h-10"/>
            </div>
            <div className="flex-1">
                 <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">Gambaran Umum</h3>
                 <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{withHonorifics(surah.overview)}</p>
            </div>
             <div className="flex flex-col items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mt-4 md:mt-0 self-center md:w-1/4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 dark:bg-black text-amber-400">
                    <KaabaIcon className="w-5 h-5"/>
                </div>
                <div className="text-center">
                  <h4 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Topik yang Dibahas</h4>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {surah.topicsCovered.map((topic, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {withHonorifics(topic)}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
        </div>
      </section>

      <section className="space-y-12 md:space-y-16">
        {surah.ayahs.map((ayah) => (
          <AyahCard key={ayah.id} ayah={ayah} />
        ))}
      </section>
    </div>
  );
};

export default SurahDetail;