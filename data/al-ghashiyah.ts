import type { Surah } from '../types';

export const AL_GHASHIYAH: Surah = {
  id: 88,
  name: "Al-Ghasyiyah",
  orderInQuran: 88,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 26,
  overview: "Dalam Surah Al-Ghasyiyah, nasib orang-orang zalim di Akhirat dikontraskan dengan nasib orang-orang saleh. Mereka yang menolak kekuasaan Allah ditegur karena lalai merenungkan keajaiban ciptaan-Nya. Surah ini memperingatkan mereka tentang nasib orang-orang kafir tertentu yang telah dibinasakan, yang disebutkan di awal surah berikutnya.",
  topicsCovered: ["Deskripsi hari kiamat", "Tugas para nabi dan rasul (AS) hanyalah untuk mengingatkan"],
  ayahs: [
    {
      id: 1,
      range: "1-7",
      text: "Peristiwa yang Luar Biasa",
      explanation: [
        "Audiens ditanya tentang kesadaran akan Hari Kebangkitan.",
        "Wajah-wajah orang kafir dipenuhi dengan kehinaan dan aib.",
        "Bekerja keras dalam ibadah kepada selain Allah mendatangkan kelelahan dan kehinaan.",
        "Hukuman menanti di api yang membakar.",
        "Air mendidih disajikan sebagai minuman yang menyiksa.",
        "Rezeki terbatas pada tanaman berduri beracun, tidak memberikan nutrisi.",
      ],
    },
    {
      id: 2,
      range: "8-16",
      text: "Kegembiraan di Surga",
      explanation: [
        "Beberapa wajah dipenuhi kegembiraan, senang dengan iman mereka.",
        "Mereka akan tinggal di Surga yang tinggi dan agung.",
        "Tidak adanya pembicaraan yang merugikan atau kebohongan di Surga.",
        "Kelimpahan mata air yang mengalir.",
        "Singgasana-singgasana ditinggikan dan cangkir-cangkir diatur dalam jangkauan yang mudah.",
        "Bantal-bantal tersusun berderet dan karpet-karpet kaya terhampar untuk kenyamanan.",
      ],
    },
    {
      id: 3,
      range: "17-26",
      text: "Refleksi dan Peringatan",
      explanation: [
        "Refleksi didesak pada ciptaan: unta, langit, gunung, dan bumi.",
        "Muhammad diperintahkan untuk mengingatkan, bukan mendikte.",
        "Orang-orang kafir diperingatkan akan hukuman berat.",
        "Kembali kepada Allah untuk semua, dengan perbuatan diperhitungkan.",
      ],
    },
  ],
};
