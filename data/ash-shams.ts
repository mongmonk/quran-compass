import type { Surah } from '../types';

export const ASH_SHAMS: Surah = {
  id: 91,
  name: "Asy-Syams",
  orderInQuran: 91,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 15,
  overview: "Surah Mekkah ini menggarisbawahi konsep kehendak bebas, menekankan bahwa individu memiliki pilihan untuk menyucikan atau merusak jiwa mereka. Kesuksesan menanti mereka yang memilih kesucian, sementara kehancuran menanti mereka yang memilih kerusakan, serupa dengan nasib kaum Tsamud. Konsep kehendak bebas terus ditekankan dalam surah berikutnya.",
  topicsCovered: ["Pelanggaran kaum Tsamud dan akhir mereka"],
  ayahs: [
    {
      id: 1,
      range: "1-7",
      text: "Sumpah demi Ciptaan",
      explanation: [
        "Surah ini dimulai dengan sumpah demi benda-benda langit seperti matahari, bulan, langit, dan bumi.",
        "Sumpah-sumpah ini menyoroti keagungan dan keteraturan ciptaan Allah.",
        "Sumpah juga diambil demi Nafs (jiwa), menggarisbawahi pentingnya penciptaan manusia dan kesempurnaan Allah dalam proporsinya.",
      ],
    },
    {
      id: 2,
      range: "8-10",
      text: "Petunjuk dan Kesuksesan",
      explanation: [
        "Allah membimbing umat manusia menuju kebenaran, memperingatkan terhadap kerusakan.",
        "Kesuksesan dicapai melalui penyucian diri, menaati Allah, dan melakukan amal saleh.",
        "Kegagalan berasal dari kerusakan, ketidaktaatan, dan penolakan terhadap Tauhid Islam.",
      ],
    },
    {
      id: 3,
      range: "11-15",
      text: "Peringatan dari Sejarah",
      explanation: [
        "Kaum Tsamud menolak nabi mereka.",
        "Orang yang paling celaka di antara mereka mencoba membunuh unta betina, sebuah tanda dari Allah.",
        "Rasul, Saleh (AS), memperingatkan mereka agar tidak menyakiti unta betina itu.",
        "Penyangkalan dan perbuatan jahat mereka menyebabkan kehancuran mereka.",
      ],
    },
  ],
};
