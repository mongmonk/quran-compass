import type { Surah } from '../types';

export const AD_DUHAA: Surah = {
  id: 93,
  name: "Adh-Dhuha",
  orderInQuran: 93,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 11,
  overview: "Surah Mekkah ini diturunkan sebagai tanggapan atas ejekan terhadap Nabi (ﷺ) oleh beberapa kaum pagan Mekkah, yang mengklaim bahwa Allah telah mengabaikan dan membenci beliau (ﷺ). Tujuannya adalah untuk membantah tuduhan palsu ini dan mengingatkan Nabi (ﷺ) akan nikmat Allah.",
  topicsCovered: ["Akhirat lebih baik bagi Nabi Muhammad (ﷺ)", "berbuat baiklah kepada orang lain sebagaimana Allah berbuat baik kepadamu"],
  ayahs: [
    {
      id: 1,
      range: "1-2",
      text: "Sumpah demi Waktu",
      explanation: [
        "Sumpah diucapkan demi waktu dhuha (ad-Duha) dan malam ketika gelap, melambangkan berlalunya waktu dan silih bergantinya siang dan malam.",
      ],
    },
    {
      id: 2,
      range: "3-5",
      text: "Jaminan dan Janji Ilahi",
      explanation: [
        "Nabi Muhammad (ﷺ) diyakinkan akan kehadiran dan nikmat Allah, dengan janji Akhirat yang lebih baik.",
        "Allah menjanjikan berkah dan kepuasan yang terus-menerus bagi Nabi Muhammad (ﷺ).",
      ],
    },
    {
      id: 3,
      range: "6-7",
      text: "Perlindungan dan Petunjuk Ilahi",
      explanation: [
        "Allah menceritakan perlindungan-Nya terhadap Nabi Muhammad sebagai seorang yatim piatu dan petunjuk-Nya meskipun sebelumnya tidak mengetahui Al-Qur'an dan kenabian.",
      ],
    },
    {
      id: 4,
      range: "8-11",
      text: "Pengangkatan dan Perintah",
      explanation: [
        "Diangkatnya derajat Nabi Muhammad (ﷺ) dari kemiskinan menjadi kekayaan disorot.",
        "Beliau diperintahkan untuk memperlakukan anak yatim dan orang miskin dengan adil dan untuk menyatakan nikmat dan karunia Allah.",
      ],
    },
  ],
};
