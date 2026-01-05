import type { Surah } from '../types';

export const AL_INFITAR: Surah = {
  id: 82,
  name: "Al-Infitar",
  orderInQuran: 82,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 19,
  overview: "Serupa dengan surah sebelumnya, Surah Al-Infitar juga menggambarkan kengerian Hari Kiamat dan menegur orang-orang kafir atas rasa tidak bersyukur mereka terhadap Pencipta mereka. Surah ini menyoroti bahwa semua individu, termasuk para penipu yang disebutkan dalam surah berikutnya, akan bertanggung jawab atas tindakan mereka yang dicatat dengan cermat oleh para malaikat yang waspada.",
  topicsCovered: ["Deskripsi peristiwa hari kiamat", "malaikat sebagai penjaga"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Tanda-tanda Dramatis",
      explanation: [
        "Penggambaran peristiwa kosmik yang menandai Hari Kiamat.",
        "Terbelahnya langit, bintang-bintang yang jatuh, lautan yang meluap, dan kuburan yang terbongkar.",
        "Pendahuluan pertanggungjawaban setiap individu atas perbuatannya.",
        "Kesadaran akan tindakan dan konsekuensi pada Hari Kiamat.",
      ],
    },
    {
      id: 2,
      range: "6-12",
      text: "Pengingat Penciptaan dan Penyangkalan",
      explanation: [
        "Pengingat penciptaan manusia oleh Yang Maha Pemurah.",
        "Meskipun ada berkah dan tanda-tanda, penyangkalan terhadap balasan ilahi adalah hal yang umum.",
        "Malaikat ditugaskan untuk mencatat perbuatan manusia dengan cermat.",
        "Pencatatan perbuatan baik dan buruk untuk pertanggungjawaban.",
      ],
    },
    {
      id: 3,
      range: "13-19",
      text: "Takdir dan Hukuman",
      explanation: [
        "Orang-orang saleh menikmati Surga, sementara orang-orang jahat menderita di Neraka.",
        "Hukuman yang tak terhindarkan bagi orang-orang jahat pada Hari Pembalasan.",
        "Penekanan pada pentingnya Hari Kiamat.",
        "Semua keputusan pada hari itu sepenuhnya di tangan Allah.",
      ],
    },
  ],
};
