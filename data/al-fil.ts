import type { Surah } from '../types';

export const AL_FIL: Surah = {
  id: 105,
  name: "Al-Fil",
  orderInQuran: 105,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 5,
  overview: "Surah Mekkah ini menceritakan kisah Abrahah Al-Habasyi, yang memimpin pasukan perkasa untuk menghancurkan Ka'bah pada tahun 570 Masehi tetapi digagalkan oleh campur tangan ilahi. Diyakini secara luas bahwa Nabi Muhammad (ﷺ) lahir pada tahun yang sama.",
  topicsCovered: ["Raja Yaman Abrahah yang menyerang Mekkah", "Allah menghancurkannya dengan burung-burung kecil"],
  ayahs: [
    {
      id: 1,
      range: "1",
      text: "Merenungkan Peristiwa Sejarah",
      explanation: [
        "Ayat ini mengenang 'Peristiwa Gajah', menyoroti insiden sejarah penting yang melibatkan upaya tentara untuk menyerang Ka'bah dengan seekor gajah.",
      ],
    },
    {
      id: 2,
      range: "2-3",
      text: "Intervensi Ilahi",
      explanation: [
        "Intervensi Allah ditekankan, menggagalkan rencana para penyerang meskipun pasukan dan niat mereka yang tangguh.",
        "Kawanan burung dikirim oleh Allah, berfungsi sebagai intervensi ajaib untuk mengalahkan para penyerang secara tak terduga.",
      ],
    },
    {
      id: 3,
      range: "4-5",
      text: "Pembalasan dan Kehancuran Ilahi",
      explanation: [
        "Para penyerang menghadapi pembalasan ilahi saat burung-burung menyerang mereka dengan batu, yang dikenal sebagai 'Sijjil', yang menyebabkan kerusakan signifikan.",
        "Kekalahan tersebut membuat para penyerang benar-benar hancur, diibaratkan ladang tandus yang hasil panennya telah dilucuti, melambangkan kehancuran total mereka.",
      ],
    },
  ],
};
