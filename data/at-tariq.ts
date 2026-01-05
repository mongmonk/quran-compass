import type { Surah } from '../types';

export const AT_TARIQ: Surah = {
  id: 86,
  name: "At-Thariq",
  orderInQuran: 86,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 17,
  overview: "Surah At-Tariq adalah surah Mekkah awal yang menggarisbawahi pencatatan cermat perbuatan kita oleh para malaikat, sebuah pengingat konstan akan perhitungan akhir kita. Al-Qur'an, yang ditegaskan oleh sumpah khidmat, berdiri sebagai pesan yang pasti. Surah ini meyakinkan kita bahwa Hari Kebangkitan tidak akan lebih sulit bagi Allah daripada penciptaan kita sendiri. Surah ini diakhiri dengan peringatan yang kuat agar tidak menentang kehendak Tuhan.",
  topicsCovered: ["Allah bersumpah demi bintang yang menusuk", "penciptaan manusia", "Al-Qur'an adalah penentu"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Sumpah Ilahi dan Bintang Terang",
      explanation: [
        "Allah bersumpah demi langit dan At-Tariq, bintang terang yang menerangi malam.",
        "Pembaca didorong untuk merenungkan sifat bintang ini, menekankan kecemerlangannya.",
      ],
    },
    {
      id: 2,
      range: "4-7",
      text: "Penciptaan Manusia",
      explanation: [
        "Setiap individu ditugaskan pelindung dan didesak untuk merenungkan penciptaan mereka.",
        "Manusia berasal dari cairan yang memancar, berasal dari antara tulang sulbi dan tulang dada.",
      ],
    },
    {
      id: 3,
      range: "8-13",
      text: "Kekuasaan Ilahi dan Hari Kiamat",
      explanation: [
        "Allah menegaskan kekuasaan-Nya untuk membangkitkan orang mati dan memperingatkan tentang Hari Kiamat.",
        "Pada hari itu, manusia akan tidak berdaya dan perbuatan mereka akan diperiksa.",
        "Allah bersumpah demi fenomena alam, menekankan kekuasaan-Nya, dan menyoroti Al-Qur'an sebagai kriteria kebenaran.",
      ],
    },
    {
      id: 4,
      range: "14-17",
      text: "Pentingnya Al-Qur'an",
      explanation: [
        "Al-Qur'an tidak untuk diremehkan tetapi harus dianggap serius.",
        "Orang-orang kafir merencanakan kejahatan terhadap Nabi, tetapi Allah juga punya rencana.",
        "Meskipun ada pertentangan, Nabi diperintahkan untuk menunjukkan kesabaran terhadap orang-orang kafir untuk sementara waktu.",
      ],
    },
  ],
};
