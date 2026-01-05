import type { Surah } from '../types';

export const AT_TIN: Surah = {
  id: 95,
  name: "At-Tin",
  orderInQuran: 95,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 8,
  overview: "Surah Mekkah ini menggarisbawahi peninggian Allah terhadap manusia, namun banyak yang merendahkan diri mereka sendiri dengan menolak prospek bertemu dengan-Nya di Akhirat. Dalam konteks ini, surah berikutnya merujuk pada Abu Jahl, salah satu penolak yang paling terkenal.",
  topicsCovered: ["Manusia memiliki kapasitas untuk menjadikan dirinya yang tertinggi dalam karakter atau yang terendah"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Sumpah demi Simbol-simbol",
      explanation: [
        "Allah bersumpah dengan simbol-simbol penting: buah tin, zaitun, Gunung Sinai, dan kota Mekkah.",
        "Simbol-simbol ini melambangkan berkah, wahyu, dan kesucian, menekankan pentingnya mereka dalam iman dan sejarah Islam.",
      ],
    },
    {
      id: 2,
      range: "4-5",
      text: "Penciptaan dan Degradasi",
      explanation: [
        "Manusia diingatkan akan asal-usul mulia mereka tetapi diakui atas kemunduran mereka karena ketidaktaatan.",
        "Meskipun diciptakan dalam keunggulan, penyimpangan membawa mereka ke keadaan yang paling rendah.",
      ],
    },
    {
      id: 3,
      range: "6-8",
      text: "Janji Pahala",
      explanation: [
        "Orang beriman yang melakukan amal saleh dijanjikan pahala abadi di Surga.",
        "Allah mempertanyakan orang-orang kafir tentang penolakan mereka terhadap Hari Kebangkitan, menegaskan otoritas-Nya sebagai hakim yang tertinggi dan adil.",
      ],
    },
  ],
};
