import type { Surah } from '../types';

export const AL_QADR: Surah = {
  id: 97,
  name: "Al-Qadr",
  orderInQuran: 97,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 5,
  overview: "Sebagaimana surah sebelumnya menandai wahyu awal, Surah Al-Qadr memperingati malam agung turunnya Al-Qur'an, yang secara tradisional diyakini terjadi pada malam ke-27 Ramadhan tahun 610 M. Surah ini menjelaskan tujuan di balik misi Nabi (ﷺ) dengan Al-Qur'an, yang diuraikan lebih lanjut dalam surah berikutnya.",
  topicsCovered: ["Al-Qur'an diturunkan pada malam kemuliaan", "yang lebih baik dari seribu bulan"],
  ayahs: [
    {
      id: 1,
      range: "1",
      text: "Wahyu Al-Qur'an",
      explanation: [
        "Al-Qur'an diturunkan pada Malam Al-Qadr, sebuah peristiwa yang sangat penting dalam tradisi Islam.",
      ],
    },
    {
      id: 2,
      range: "2",
      text: "Keutamaan Malam",
      explanation: [
        "Ayat ini secara retoris menggarisbawahi pentingnya dan keagungan Malam Al-Qadr.",
      ],
    },
    {
      id: 3,
      range: "3",
      text: "Keunggulan Al-Qadr",
      explanation: [
        "Malam Al-Qadr dipuji lebih unggul dari seribu bulan dalam hal berkah dan pahala untuk ibadah.",
      ],
    },
    {
      id: 4,
      range: "4",
      text: "Turunnya Malaikat",
      explanation: [
        "Para malaikat, termasuk Jibril (AS), turun ke Bumi pada Malam Al-Qadr, menyampaikan ketetapan dan berkah ilahi dengan izin Allah.",
      ],
    },
    {
      id: 5,
      range: "5",
      text: "Berkah yang Tenang",
      explanation: [
        "Malam Al-Qadr ditandai dengan ketenangan dan kedamaian, dengan Allah melimpahkan berkah kepada hamba-hamba-Nya yang setia hingga fajar menyingsing.",
      ],
    },
  ],
};
