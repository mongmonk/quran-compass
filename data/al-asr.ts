import type { Surah } from '../types';

export const AL_ASR: Surah = {
  id: 103,
  name: "Al-'Ashr",
  orderInQuran: 103,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 3,
  overview: "Dalam surah Mekkah ini, ditekankan bahwa kesuksesan dalam kehidupan abadi yang akan datang disediakan bagi mereka yang memanfaatkan waktu mereka di dunia yang fana ini untuk kebaikan. Hal ini sangat kontras dengan nasib para pelaku kejahatan yang disebutkan dalam surah berikutnya.",
  topicsCovered: ["Orang yang sabar dan benar akan berhasil"],
  ayahs: [
    {
      id: 1,
      range: "1-2",
      text: "Sumpah demi Waktu",
      explanation: [
        "Ayat-ayat ini dibuka dengan sumpah demi waktu, menyoroti makna mendalamnya dan sifat fana dari keberadaan manusia.",
        "Umat manusia dinyatakan berada dalam keadaan rugi, menggarisbawahi beratnya kondisi ini dan kebutuhan mendesak untuk penebusan.",
      ],
    },
    {
      id: 2,
      range: "3",
      text: "Pengecualian dari Kerugian",
      explanation: [
        "Menyoroti karakteristik orang-orang yang merupakan pengecualian dari keadaan rugi umum yang disebutkan dalam ayat-ayat sebelumnya.",
        "Individu-individu ini digambarkan memiliki empat kualitas utama: Iman yang tulus pada Tauhid Islam, Keterlibatan yang konsisten dalam Perbuatan Saleh, Promosi Kebenaran, dan Menunjukkan Kesabaran dan ketekunan.",
      ],
    },
  ],
};
