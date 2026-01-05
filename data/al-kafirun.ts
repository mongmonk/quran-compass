import type { Surah } from '../types';

export const AL_KAFIRUN: Surah = {
  id: 109,
  name: "Al-Kafirun",
  orderInQuran: 109,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 6,
  overview: "Surah Al-Kafirun diturunkan sebagai tanggapan atas usulan kaum pagan untuk menyembah Allah saja selama satu tahun sebagai ganti Nabi (ﷺ) menyembah tuhan-tuhan mereka selama satu tahun. Di dalamnya, Nabi (ﷺ) dengan tegas menyatakan dedikasinya semata-mata untuk menyembah Allah hingga nafas terakhirnya, sebuah sentimen yang digaungkan dalam surah berikutnya.",
  topicsCovered: ["Sikap yang benar terhadap mereka yang menolak agamamu"],
  ayahs: [
    {
      id: 1,
      range: "1",
      text: "Menyapa Orang-orang Kafir",
      explanation: [
        "Nabi Muhammad (ﷺ) diperintahkan untuk memisahkan diri dari kepercayaan dan praktik orang-orang kafir dan musyrik.",
        "Beliau menyatakan penolakannya terhadap iman mereka dan menegaskan kepatuhannya pada tauhid.",
      ],
    },
    {
      id: 2,
      range: "2-5",
      text: "Penolakan terhadap Kemusyrikan",
      explanation: [
        "Nabi Muhammad (ﷺ) dengan tegas menolak kemusyrikan dan menegaskan ibadah eksklusifnya kepada Allah.",
        "Beliau menekankan kontras yang tajam antara tauhid dan kemusyrikan, menolak untuk mengkompromikan keyakinannya.",
      ],
    },
    {
      id: 3,
      range: "6",
      text: "Penghargaan terhadap Perbedaan Agama",
      explanation: [
        "Nabi Muhammad (ﷺ) mengakui pemisahan keyakinan, menegaskan bahwa masing-masing memiliki agamanya sendiri, dan beliau akan tetap teguh dalam ibadahnya kepada Allah.",
        "Meskipun ayat ini mempromosikan bentuk toleransi dengan membiarkan orang lain pada keyakinan mereka tanpa campur tangan, ayat ini menjunjung tinggi tauhid Islam dan tidak memvalidasi keyakinan politeistik.",
      ],
    },
  ],
};
