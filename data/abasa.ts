import type { Surah } from '../types';

export const ABASA: Surah = {
  id: 80,
  name: "'Abasa",
  orderInQuran: 80,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 42,
  overview: "Dalam sebuah hadis yang dikumpulkan oleh At-Tirmidzi, seorang pria buta bernama 'Abdullah ibn Umm Maktum', seorang Muslim yang taat, menyela Nabi (ﷺ) saat berdiskusi dengan seorang pagan Mekkah elit, ingin belajar lebih banyak tentang iman. Nabi (ﷺ), yang awalnya sibuk, kemudian menerima wahyu yang menegurnya karena tidak memberikan perhatian kepada Abdullah. Surah Mekkah ini menggarisbawahi pentingnya melayani mereka yang tulus, setia, dan bersemangat untuk belajar.",
  topicsCovered: ["Deskripsi Hari Kiamat", "Nikmat Allah bagi umat manusia", "Pesan Allah untuk nabi Muhammad (ﷺ)"],
  ayahs: [
    {
      id: 1,
      range: "1-7",
      text: "Teguran kepada Nabi (ﷺ)",
      explanation: [
        "Insiden Nabi Muhammad (ﷺ) tidak memperhatikan seorang pria buta yang mencari petunjuk.",
        "Mempertanyakan reaksi Nabi (ﷺ), menekankan tugasnya untuk menyampaikan pesan kepada semua orang.",
        "Pengingat akan tugas Nabi (ﷺ) untuk menyampaikan pesan tanpa memandang status pendengar.",
      ],
    },
    {
      id: 2,
      range: "8-17",
      text: "Teguran dan Nasihat",
      explanation: [
        "Nasihat kepada Nabi (ﷺ) karena mengabaikan pria buta demi para pemimpin Quraisy.",
        "Penekanan pada nilai Al-Qur'an sebagai sumber nasihat dan petunjuk.",
        "Kecaman terhadap mereka yang menolak pesan Al-Qur'an.",
      ],
    },
    {
      id: 3,
      range: "18-32",
      text: "Penciptaan dan Rezeki",
      explanation: [
        "Refleksi tentang tahapan penciptaan manusia dan rezeki Allah bagi umat manusia.",
        "Deskripsi berbagai biji-bijian, buah-buahan, dan tumbuh-tumbuhan yang disediakan oleh Allah.",
      ],
    },
    {
      id: 4,
      range: "33-42",
      text: "Hari Kebangkitan",
      explanation: [
        "Deskripsi kekacauan dan pengabaian pada Hari Kebangkitan.",
        "Kontras antara wajah-wajah cerah orang beriman dan wajah-wajah gelap orang kafir.",
        "Kegembiraan orang beriman atas kabar Surga dan keputusasaan orang kafir.",
      ],
    },
  ],
};
