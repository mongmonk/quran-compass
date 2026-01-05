import type { Surah } from '../types';

export const AL_QARIAH: Surah = {
  id: 101,
  name: "Al-Qari'ah",
  orderInQuran: 101,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 11,
  overview: "Surah Mekkah ini dengan jelas menggambarkan peristiwa Kebangkitan dan penimbangan amal di Akhirat, yang berujung pada tujuan akhir Surga atau Neraka. Surah ini menjadi dasar untuk memahami alasan di balik nasib banyak individu dalam surah berikutnya.",
  topicsCovered: ["Deskripsi hari kiamat", "manusia akan dibalas sesuai timbangan amalnya"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Pengantar Hari Kebangkitan",
      explanation: [
        "Surah ini menekankan pentingnya Hari Kebangkitan, yang dikenal sebagai Al-Qariah, atau Hari Kiamat yang Menggetarkan.",
        "Melalui pertanyaan-pertanyaan retoris, surah ini menyoroti sifat yang tak terpahami dari Kiamat ini, menggarisbawahi ketidakpastian dan kebesarannya.",
      ],
    },
    {
      id: 2,
      range: "4-7",
      text: "Deskripsi Hari Kiamat",
      explanation: [
        "Umat manusia pada Hari itu digambarkan seperti laron yang bertebaran, melambangkan kebingungan dan kekacauan.",
        "Kekokohan gunung-gunung dikontraskan dengan ringannya yang dibayangkan, seperti bulu yang dihambur-hamburkan.",
        "Orang-orang saleh akan diberi pahala kehidupan yang menyenangkan di Surga, sebanding dengan amal baik mereka.",
      ],
    },
    {
      id: 3,
      range: "8-11",
      text: "Hukuman bagi Orang Jahat",
      explanation: [
        "Mereka yang amal buruknya lebih berat dari amal baiknya akan menghadapi hukuman di Hawiyah, sebuah jurang atau Neraka.",
        "Hawiyah digambarkan sebagai api yang menyala-nyala, menekankan panas dan siksaannya yang hebat.",
        "Pendengar ditantang untuk memahami beratnya hukuman ini, menegaskan kembali sifat Neraka sebagai api yang membakar.",
      ],
    },
  ],
};
