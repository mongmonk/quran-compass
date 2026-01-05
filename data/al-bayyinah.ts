import type { Surah } from '../types';

export const AL_BAYYINAH: Surah = {
  id: 98,
  name: "Al-Bayyinah",
  orderInQuran: 98,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 8,
  overview: "Surah Al-Bayyinah adalah surah Madaniyah yang menguraikan misi Nabi (ﷺ) untuk membimbing orang-orang kafir agar menyembah Allah semata. Surah ini menjanjikan pahala besar bagi orang-orang beriman dan memperingatkan akan hukuman berat bagi mereka yang terus-menerus dalam kekafiran.",
  topicsCovered: ["Orang-orang sengaja memecah belah agamanya bahkan setelah melihat bukti", "Perintah Allah adalah sama bahkan untuk bangsa-bangsa sebelumnya"],
  ayahs: [
    {
      id: 1,
      range: "1-2",
      text: "Bukti yang Jelas dan Rasul (ﷺ)",
      explanation: [
        "Orang-orang kafir tetap bertahan sampai bukti yang jelas, yang diwujudkan oleh Rasul Muhammad (ﷺ), disampaikan kepada mereka.",
        "Muhammad (ﷺ) membacakan lembaran-lembaran yang disucikan, bebas dari kepalsuan, sebagai bukti yang meyakinkan.",
      ],
    },
    {
      id: 2,
      range: "3-4",
      text: "Hukum Ilahi dan Perselisihan",
      explanation: [
        "Lembaran-lembaran yang disucikan berisi hukum-hukum yang lurus dari Allah.",
        "Perselisihan di antara Ahli Kitab baru muncul setelah bukti yang jelas datang, merujuk pada kedatangan dan wahyu Muhammad (ﷺ).",
      ],
    },
    {
      id: 3,
      range: "5-6",
      text: "Perintah dan Konsekuensi",
      explanation: [
        "Perintahnya adalah untuk menyembah Allah semata, mendirikan shalat, menunaikan zakat, dan mengikuti agama yang benar.",
        "Orang-orang kafir di antara Ahli Kitab dan kaum musyrik akan tinggal kekal di Neraka, dianggap sebagai makhluk yang terburuk.",
      ],
    },
    {
      id: 4,
      range: "7-8",
      text: "Kebajikan dan Pahala",
      explanation: [
        "Orang-orang beriman, yang memenuhi kewajiban Islam, dianggap sebagai makhluk yang terbaik.",
        "Pahala mereka adalah Surga, dengan tempat tinggal abadi dan keridhaan Allah, disediakan bagi mereka yang takut kepada Tuhan mereka.",
      ],
    },
  ],
};
