import type { Surah } from '../types';

export const AZ_ZALZALAH: Surah = {
  id: 99,
  name: "Az-Zalzalah",
  orderInQuran: 99,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 8,
  overview: "Surah Madaniyah ini menggarisbawahi pertanggungjawaban semua perbuatan pada Hari Kiamat, sebuah tema yang digaungkan dalam surah berikutnya. Surah ini menekankan kepastian untuk dimintai pertanggungjawaban atas tindakan seseorang di hadapan Allah.",
  topicsCovered: ["Deskripsi hari kiamat", "bumi akan bergoncang", "bahkan perbuatan sekecil atom pun akan dibalas"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Gempa Bumi dan Kebingungan",
      explanation: [
        "Hari Kiamat akan menyaksikan gempa bumi yang dahsyat, menyebabkan bumi mengeluarkan beban-bebannya.",
        "Manusia akan kebingungan, mempertanyakan kejadian luar biasa itu.",
      ],
    },
    {
      id: 2,
      range: "4-6",
      text: "Pernyataan dan Pertanggungjawaban",
      explanation: [
        "Bumi akan mengungkapkan semua peristiwa yang terjadi di atasnya, mengikuti ilham Allah.",
        "Umat manusia akan dibagi menjadi kelompok-kelompok yang terpencar, menunggu pengungkapan amal mereka.",
      ],
    },
    {
      id: 3,
      range: "7-8",
      text: "Balasan yang Adil",
      explanation: [
        "Bahkan perbuatan terkecil, baik atau buruk, akan diperlihatkan untuk diperiksa.",
        "Allah memastikan bahwa setiap tindakan, betapapun tidak signifikannya, akan diungkapkan konsekuensinya.",
      ],
    },
  ],
};
