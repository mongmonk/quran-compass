import type { Surah } from '../types';

export const AL_QALAM: Surah = {
  id: 68,
  name: "Al-Qalam",
  orderInQuran: 68,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 52,
  overview: "Dalam surah Mekkah ini, hati Nabi (ﷺ) menemukan ketenangan dan karakternya dipuji setinggi-tingginya. Beliau (ﷺ) didesak untuk tetap teguh dan tidak menyerah kepada kaum pagan yang menolak risalahnya dan menyebutnya gila. Surah ini juga memperingatkan kaum pagan akan konsekuensi langsung di dunia ini dan Akhirat. Surah ini mengutip nasib orang-orang kafir sebelumnya dalam surah berikutnya sebagai pencegah bagi kaum pagan.",
  topicsCovered: ["Kemuliaan nabi", "penghuni surga", "keadilan Allah dan hari kiamat", "Iman"],
  ayahs: [
    {
      id: 1,
      range: "1-9",
      text: "Kemuliaan Nabi Muhammad (ﷺ)",
      explanation: [
        "Surah ini dimulai dengan sumpah demi pena, menekankan ilmu pengetahuan dan tulisan.",
        "Nabi Muhammad (ﷺ) diyakinkan akan nikmat-Nya dari Allah dan dijanjikan pahala yang tak berkesudahan.",
        "Beliau dipuji karena karakternya yang agung, dan orang-orang ditantang untuk memahami keadaan sejatinya.",
      ],
    },
    {
      id: 2,
      range: "10-25",
      text: "Hukuman bagi Kekafiran",
      explanation: [
        "Ciri-ciri orang jahat diuraikan, dan hukuman bagi kekafiran diperingatkan.",
        "Perumpamaan tentang sebuah kebun yang hancur karena kelalaian menjadi pengingat akan hukuman ilahi.",
        "Orang-orang kafir meratapi kerugian mereka, saling menyalahkan, dan berharap penebusan.",
      ],
    },
    {
      id: 3,
      range: "26-33",
      text: "Refleksi dan Penebusan",
      explanation: [
        "Penyesalan dan pengakuan kesalahan kaum tersebut disorot.",
        "Mereka dinasihati untuk mengakui kehendak Allah dan memohon ampunan.",
        "Meskipun saling menyalahkan, mereka berharap penebusan dan menyadari beratnya hukuman di Akhirat.",
      ],
    },
    {
      id: 4,
      range: "34-41",
      text: "Pahala dan Hari Kebangkitan",
      explanation: [
        "Orang-orang saleh akan diberi pahala taman-taman kenikmatan, membedakan orang beriman dari orang kafir.",
        "Orang-orang didesak untuk merenungkan penilaian dan ilusi kendali mereka.",
        "Klaim-klaim palsu akan terbongkar pada Hari Kebangkitan, menantang asumsi-asumsi manusia.",
      ],
    },
    {
      id: 5,
      range: "42-52",
      text: "Penangguhan Ilahi dan Tujuan Al-Qur'an",
      explanation: [
        "Hari Kebangkitan akan mengungkap keadaan iman manusia yang sebenarnya.",
        "Orang-orang munafik dan penolak akan menghadapi hukuman, tetapi rencana Allah itu kokoh.",
        "Orang-orang dinasihati untuk menantikan ketetapan Allah dengan sabar dan merenungkan tujuan Al-Qur'an.",
      ],
    },
  ],
};
