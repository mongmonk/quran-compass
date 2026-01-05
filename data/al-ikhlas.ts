import type { Surah } from '../types';

export const AL_IKHLAS: Surah = {
  id: 112,
  name: "Al-Ikhlash",
  orderInQuran: 112,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 4,
  overview: "Dalam Surah Al-Ikhlas, konsep Trinitas, penyembahan berhala, ateisme, dan politeisme dibantah. Surah ini menyoroti perlunya pengabdian sepenuh hati hanya kepada Tuhan Yang Maha Esa (Allah). Tema-tema ini diuraikan lebih lanjut dalam dua surah berikutnya.",
  topicsCovered: ["Konsep Tauhid (monoteisme)"],
  ayahs: [
    {
      id: 1,
      range: "1",
      text: "Pernyataan Tauhid",
      explanation: [
        "Ayat ini menegaskan konsep Tauhid, menekankan keesaan dan keunikan Allah.",
        "Ayat ini menyatakan bahwa Allah adalah satu-satunya Tuhan yang layak disembah, tanpa sekutu atau rekanan.",
      ],
    },
    {
      id: 2,
      range: "2",
      text: "Deskripsi Allah sebagai As-Samad",
      explanation: [
        "Allah digambarkan sebagai As-Samad, Tuhan Yang Mandiri, menyoroti kemandirian dan keabadian-Nya.",
        "Ayat ini menekankan bahwa Allah tidak bergantung pada siapa pun atau apa pun, sementara seluruh ciptaan bergantung sepenuhnya pada-Nya untuk rezeki dan dukungan.",
      ],
    },
    {
      id: 3,
      range: "3",
      text: "Penolakan terhadap Keturunan",
      explanation: [
        "Ayat ini secara kategoris menyangkal gagasan apa pun tentang Allah memiliki anak atau dilahirkan dari siapa pun.",
        "Ayat ini menggarisbawahi keberadaan abadi Allah dan membantah konsep keturunan ilahi yang dikaitkan dengan-Nya.",
      ],
    },
    {
      id: 4,
      range: "4",
      text: "Keunikan dan Ketidakterbandingan Allah",
      explanation: [
        "Ayat ini menegaskan bahwa tidak ada yang sebanding dengan Allah, menyoroti keunikan dan ketidakterbandingan-Nya yang mutlak.",
        "Ayat ini menolak gagasan menyekutukan Allah dan menekankan status-Nya yang tak tertandingi sebagai Yang Maha Tinggi.",
      ],
    },
  ],
};
