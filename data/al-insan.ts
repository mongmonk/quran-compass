import type { Surah } from '../types';

export const AL_INSAN: Surah = {
  id: 76,
  name: "Al-Insan",
  orderInQuran: 76,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 31,
  overview: "Surah Al-Insan mengingatkan manusia bagaimana Allah menciptakan mereka, menganugerahi mereka dengan berbagai kemampuan, membimbing mereka, dan memberi mereka kehendak bebas. Surah ini secara luas membahas pahala bagi mereka yang memilih untuk beriman, sedangkan surah berikutnya hanya menyebutkannya secara singkat. Sebaliknya, surah ini secara singkat menyebutkan hukuman bagi mereka yang memilih kekafiran tetapi merincinya di surah berikutnya. Nabi (ﷺ) juga dinasihati untuk tetap teguh dan tidak menyerah kepada para penolak Hari Kiamat.",
  topicsCovered: ["Keberadaan alam semesta sebelum manusia", "Deskripsi surga"],
  ayahs: [
    {
      id: 1,
      range: "1-12",
      text: "Penciptaan dan Pahala",
      explanation: [
        "Penciptaan manusia dari awal yang sederhana menyoroti kemampuan dan pilihannya.",
        "Orang-orang kafir menghadapi hukuman berat; orang-orang saleh dijanjikan pahala yang melimpah.",
        "Sifat-sifat saleh termasuk memenuhi nazar dan memberi makan orang miskin.",
        "Allah campur tangan untuk menyelamatkan orang-orang saleh, memberi mereka kemewahan Surga.",
      ],
    },
    {
      id: 2,
      range: "13-22",
      text: "Deskripsi Surga",
      explanation: [
        "Deskripsi terperinci tentang Surga menekankan kenyamanan dan keindahannya.",
        "Pemuda abadi, keteduhan, dan buah-buahan lezat menanti penghuninya.",
        "Mereka akan dilayani dengan minuman dalam bejana perak dan kristal.",
        "Surga menawarkan kesenangan abadi sebagai pahala atas usaha orang-orang beriman.",
      ],
    },
    {
      id: 3,
      range: "23-31",
      text: "Wahyu dan Petunjuk",
      explanation: [
        "Wahyu Al-Qur'an secara bertahap menekankan kesabaran dan ketaatan.",
        "Orang-orang beriman didesak untuk mengingat Allah secara konsisten, menjaga hubungan ilahi.",
        "Orang-orang kafir mengutamakan kesenangan duniawi daripada Hari Kiamat.",
        "Allah akan menentukan rahmat dan hukuman, membimbing mereka yang memperhatikan nasihat.",
      ],
    },
  ],
};
