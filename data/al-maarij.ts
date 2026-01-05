import type { Surah } from '../types';

export const AL_MAARIJ: Surah = {
  id: 70,
  name: "Al-Ma'arij",
  orderInQuran: 70,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 44,
  overview: "Surah Mekkah ini mengutuk kaum pagan karena mengolok-olok Hari Kiamat dan Nabi (ﷺ), menegaskan kembali kebenaran Kiamat dan menggambarkan kengeriannya. Surah ini juga menggambarkan sifat-sifat penghuni Neraka dan Surga serta meyakinkan Nabi (ﷺ) sambil memperingatkan kaum pagan.",
  topicsCovered: ["Deskripsi hari kiamat", "Sifat-sifat orang saleh"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Azab Ilahi dan Hari Kiamat",
      explanation: [
        "Seorang penantang bertanya tentang azab yang pasti akan terjadi.",
        "Hari Kiamat tidak dapat dihindari, dan tidak ada jalan keluar.",
        "Azab itu dari Allah, Pemilik jalan-jalan kenaikan.",
        "Para malaikat dan Ruh naik kepada-Nya dalam sehari yang lamanya lima puluh ribu tahun.",
        "Nabi (ﷺ) diperintahkan untuk bersabar dengan kesabaran yang indah.",
      ],
    },
    {
      id: 2,
      range: "6-18",
      text: "Karakteristik Penghuni Neraka",
      explanation: [
        "Orang-orang kafir berharap mereka bisa diselamatkan dari azab.",
        "Hari Kiamat akan menjadi hari yang sulit bagi orang-orang kafir.",
        "Manusia akan rela menebus kerabat terdekatnya untuk lolos dari azab.",
      ],
    },
    {
      id: 3,
      range: "19-35",
      text: "Karakteristik Orang-orang Saleh",
      explanation: [
        "Manusia diciptakan dalam keadaan gelisah.",
        "Orang-orang saleh tekun dalam shalat dan mereka yang memberikan sebagian hartanya yang telah ditentukan.",
      ],
    },
    {
      id: 4,
      range: "36-44",
      text: "Penentraman dan Peringatan",
      explanation: [
        "Orang-orang kafir dengan mengejek bergegas menuju Nabi (ﷺ).",
        "Surah ini diakhiri dengan jaminan bahwa orang-orang kafir tidak akan dibiarkan begitu saja tanpa pertanggungjawaban.",
      ],
    },
  ],
};
