import type { Surah } from '../types';

export const AN_NABA: Surah = {
  id: 78,
  name: "An-Naba'",
  orderInQuran: 78,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 40,
  overview: "Dalam surah Mekkah ini, argumen orang-orang yang mengingkari Akhirat dibantah secara tuntas melalui pemeriksaan rinci atas keajaiban ciptaan Allah. Contoh-contoh ini menjadi bukti kuat akan kekuasaan Allah untuk membangkitkan orang mati dan membalas setiap individu secara adil sesuai dengan perbuatan mereka.",
  topicsCovered: ["Nikmat Allah bagi manusia", "hari kiamat", "deskripsi surga dan neraka"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Pertanyaan tentang Berita Besar",
      explanation: [
        "Pendahuluan dengan pertanyaan tentang 'berita besar', yang meliputi Tauhid Islam, Al-Qur'an, dan Hari Kebangkitan.",
        "Meskipun ada perselisihan, pengetahuan akhir tentang kebenaran ditegaskan.",
      ],
    },
    {
      id: 2,
      range: "6-17",
      text: "Ciptaan dan Ketentuan Ilahi",
      explanation: [
        "Deskripsi ciptaan dan ketentuan Allah, termasuk bumi, gunung, tidur, malam, dan siang.",
        "Penyebutan tujuh langit yang kokoh, matahari, hujan, dan tumbuh-tumbuhan.",
      ],
    },
    {
      id: 3,
      range: "18-30",
      text: "Hari Keputusan dan Balasan",
      explanation: [
        "Deskripsi Hari Kiamat, peniupan sangkakala, kebangkitan, terbukanya langit, dan bergeraknya gunung-gunung.",
        "Neraka digambarkan sebagai hukuman bagi para pelanggar, menghadapi siksaan karena mengingkari tanda-tanda Allah.",
      ],
    },
    {
      id: 4,
      range: "31-40",
      text: "Kesuksesan bagi Orang Saleh dan Peringatan",
      explanation: [
        "Kesuksesan dijanjikan bagi orang-orang saleh di Surga, dengan taman-taman, kebun-kebun anggur, dan teman-teman.",
        "Pahala dari Allah pada Hari Kebenaran, memperingatkan akan siksaan yang akan datang bagi orang-orang kafir, yang mengarah pada penyesalan.",
      ],
    },
  ],
};
