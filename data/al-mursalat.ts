import type { Surah } from '../types';

export const AL_MURSALAT: Surah = {
  id: 77,
  name: "Al-Mursalat",
  orderInQuran: 77,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 50,
  overview: "Sama seperti dua surah sebelumnya dan dua surah berikutnya, Surah Al-Mursalat menekankan bahwa kekuasaan Allah untuk menciptakan menjadi bukti kemampuan-Nya untuk membangkitkan orang mati untuk penghakiman. Surah ini dengan jelas menggambarkan kengerian Kiamat dan hukuman yang menanti orang-orang jahat.",
  topicsCovered: ["Deskripsi hari kiamat", "kondisi bintang-bintang", "penciptaan manusia", "langit dan gunung"],
  ayahs: [
    {
      id: 1,
      range: "1-13",
      text: "Sumpah dan Hari yang Dijanjikan",
      explanation: [
        "Berbagai fenomena alam dijadikan sumpah, menyoroti kekuasaan Allah.",
        "Hari Kiamat tidak dapat dihindari, dengan tanda-tanda langit dan pengumpulan para rasul.",
        "Tanda-tanda ini berfungsi sebagai pengingat akan Hari Pemisahan.",
      ],
    },
    {
      id: 2,
      range: "14-23",
      text: "Peringatan dan Penciptaan",
      explanation: [
        "Para penolak diperingatkan akan nasib mereka, merujuk pada generasi-generasi masa lalu.",
        "Penciptaan manusia dan kehamilan di dalam rahim menunjukkan hikmah Allah.",
        "Pemberian rezeki di bumi menggarisbawahi kebaikan Allah.",
      ],
    },
    {
      id: 3,
      range: "24-31",
      text: "Konsekuensi dan Api Neraka",
      explanation: [
        "Penyangkalan terhadap Hari Kebangkitan mengarah pada siksaan Neraka.",
        "Intensitas dan kengerian Api Neraka digambarkan dengan jelas.",
        "Orang-orang kafir tidak akan mendapatkan naungan dan akan menghadapi api yang dahsyat.",
      ],
    },
    {
      id: 4,
      range: "32-40",
      text: "Hari Kiamat dan Undangan",
      explanation: [
        "Hari Kiamat membawa pertanggungjawaban tanpa ada jalan keluar.",
        "Orang-orang beriman yang saleh diundang ke naungan, mata air, dan buah-buahan sebagai pahala.",
        "Penolakan orang-orang kafir terhadap shalat menyoroti rasa tidak bersyukur kepada Allah.",
      ],
    },
    {
      id: 5,
      range: "41-50",
      text: "Pahala dan Tantangan",
      explanation: [
        "Orang-orang beriman yang saleh dijanjikan kenyamanan dan pahala, berbeda dengan kesengsaraan orang-orang kafir.",
        "Orang-orang kafir didesak untuk menikmati kesenangan duniawi secara singkat.",
        "Sebuah pertanyaan retoris menantang para penolak untuk menemukan keimanan setelah Al-Qur'an.",
      ],
    },
  ],
};
