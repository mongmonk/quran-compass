import React from 'react';
import { QuranIcon } from './Icons';

interface IntroPageProps {
  onStart: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 dark:bg-black text-amber-400">
            <QuranIcon className="w-10 h-10" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
          Quran Compass
        </h1>
        <div className="text-left space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Jujur saja: Al-Qur’an bisa terasa berat di awal. Enam ratusan halaman, 114 surah, wahyu yang turun selama 23 tahun—wajar kalau kita bingung harus mulai dari mana. Teksnya begitu kaya; banyak konsep yang belum familiar. Al-Qur’an adalah kalam Allah—dan membacanya itu sangat penting.
          </p>
          <p>
            Kami ingin langkah pertama menuju Al-Qur’an terasa ringan, bukan membebani. Karena itu, kami hadirkan Quran Compass.
          </p>
          <p className="font-bold text-gray-800 dark:text-gray-100">
            Quran Compass adalah ringkasan strategis untuk SETIAP surah:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>memberikan konteks turunnya, tema besar, dan alur gagasan utama,</li>
            <li>menyorot latar belakang dan sudut pandang penting agar bacaan lebih “terarah”,</li>
            <li>membantu Anda masuk ke ayat dengan persiapan—bukan sekadar membuka halaman secara acak.</li>
          </ul>
          <p>
            Hasilnya? Setiap sesi tilawah atau tadabbur jadi lebih fokus, mudah diikuti, dan relevan untuk semua—apa pun usia, profesi, atau latar belakang Anda. Quran Compass adalah pendamping yang tepat untuk studi Al-Qur’an Anda, kapan saja dan di mana saja.
          </p>
        </div>
        <div className="mt-10">
          <button
            onClick={onStart}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-700"
          >
            Mulai Membaca
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
