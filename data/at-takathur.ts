import type { Surah } from '../types';

export const AT_TAKATHUR: Surah = {
  id: 102,
  name: "At-Takatsur",
  orderInQuran: 102,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 8,
  overview: "Dalam Surah At-Takathur, orang-orang kafir ditegur karena menyia-nyiakan hidup mereka dalam pengejaran yang tidak memiliki arti penting di Akhirat. Fokusnya, terutama, adalah pada penumpukan kekayaan, yang digambarkan sebagai usaha sia-sia yang tidak memiliki nilai abadi.",
  topicsCovered: ["Pertanyaan di akhirat"],
  ayahs: [
    {
      id: 1,
      range: "1-2",
      text: "Peringatan Terhadap Gangguan Duniawi",
      explanation: [
        "Umat manusia dikecam karena fokus berlebihan pada harta benda duniawi, yang mengalihkan mereka dari tujuan hidup yang sebenarnya.",
        "Kunjungan ke kuburan berfungsi sebagai pengingat keras akan kefanaan manusia dan sifat fana dari pengejaran duniawi.",
      ],
    },
    {
      id: 2,
      range: "3-5",
      text: "Jaminan Pengetahuan yang Akan Datang",
      explanation: [
        "Kepastian ditekankan mengenai kesadaran di masa depan meskipun ada kelalaian saat ini.",
        "Pengulangan 'Nay!' menggarisbawahi keniscayaan kesadaran ini, seandainya orang memiliki wawasan yang benar.",
        "Pengetahuan sejati akan membawa prioritas yang berbeda, mengurangi pemanjaan dalam pengejaran duniawi.",
      ],
    },
    {
      id: 3,
      range: "6-8",
      text: "Visi Api Neraka",
      explanation: [
        "Peringatan dikeluarkan tentang menghadapi api neraka yang menyala-nyala, sangat kontras dengan pemanjaan duniawi.",
        "Kepastian menyaksikan Neraka ditekankan, tidak meninggalkan ruang untuk keraguan.",
        "Setiap individu akan dimintai pertanggungjawaban pada Hari Kiamat atas kesenangan duniawi mereka, menggarisbawahi pentingnya moderasi dan pertanggungjawaban.",
      ],
    },
  ],
};
