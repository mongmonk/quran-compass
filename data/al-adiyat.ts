import type { Surah } from '../types';

export const AL_ADIYAT: Surah = {
  id: 100,
  name: "Al-'Adiyat",
  orderInQuran: 100,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 11,
  overview: "Surah Mekkah ini menekankan pertanggungjawaban individu pada Hari Kiamat atas rasa tidak bersyukur mereka terhadap Allah. Surah ini mempersiapkan panggung untuk penggambaran kebangkitan dalam surah berikutnya, terutama menyoroti pemandangan orang-orang yang keluar dari kubur mereka.",
  topicsCovered: ["Perbandingan makhluk yang berbeda"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Sumpah demi Kuda Perang",
      explanation: [
        "Surah ini dimulai dengan sumpah yang jelas demi kuda perang yang terengah-engah dan memercikkan api saat berlari ke medan perang saat fajar.",
        "Sumpah-sumpah ini dengan jelas menggambarkan kekuatan dan urgensi pesan yang disampaikan.",
      ],
    },
    {
      id: 2,
      range: "6-8",
      text: "Ketidaksyukuran Manusia",
      explanation: [
        "Meskipun ada tanda-tanda yang jelas, umat manusia menunjukkan rasa tidak bersyukur terhadap Penciptanya.",
        "Tindakan manusia menjadi saksi atas ketidaksyukuran dan keterikatan berlebihan pada kekayaan duniawi.",
      ],
    },
    {
      id: 3,
      range: "9-11",
      text: "Hari Kebangkitan",
      explanation: [
        "Pengingat akan Hari Kebangkitan yang akan datang, ketika kuburan akan mengeluarkan isinya dan rahasia yang tersembunyi akan diungkapkan.",
        "Pada Hari itu, setiap perbuatan, betapapun tersembunyinya, akan dibawa ke terang, dan keadilan ilahi akan ditegakkan.",
      ],
    },
  ],
};
