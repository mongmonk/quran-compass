import type { Surah } from '../types';

export const AL_FALAQ: Surah = {
  id: 113,
  name: "Al-Falaq",
  orderInQuran: 113,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 5,
  overview: "Surah Al-Falaq diturunkan pada tahun-tahun awal misi Nabi Muhammad (ﷺ). Surah ini terkenal dengan tema memohon perlindungan dari berbagai bentuk kejahatan dan bahaya. Surah ini juga menyoroti ketergantungan pada Allah sebagai pelindung dan penjaga utama terhadap segala bahaya, baik yang terlihat maupun yang tidak terlihat.",
  topicsCovered: ["Memohon perlindungan kepada Allah dari kejahatan semua ciptaan"],
  ayahs: [
    {
      id: 1,
      range: "1",
      text: "Memohon Perlindungan kepada Allah",
      explanation: [
        "Ayat ini memerintahkan untuk memohon perlindungan kepada Allah, khususnya dengan memanggil-Nya sebagai Tuhan waktu subuh.",
        "Ini menandakan memohon perlindungan dari potensi bahaya dan tantangan yang mungkin muncul saat hari dimulai.",
      ],
    },
    {
      id: 2,
      range: "2",
      text: "Perlindungan dari Kejahatan Ciptaan",
      explanation: [
        "Ayat ini memohon perlindungan dari kejahatan yang melekat pada semua ciptaan Allah.",
        "Ini mengakui bahwa semua bentuk bahaya pada akhirnya berasal dari ciptaan Allah dan kita harus meminta perlindungan-Nya dari mereka.",
      ],
    },
    {
      id: 3,
      range: "3",
      text: "Perlindungan dari Kegelapan dan Fenomena Bulan",
      explanation: [
        "Di sini, perlindungan dimohon dari kejahatan kegelapan saat ia datang.",
        "Ini menggarisbawahi perlunya perlindungan selama periode kegelapan.",
      ],
    },
    {
      id: 4,
      range: "4",
      text: "Memohon Perlindungan dari Sihir",
      explanation: [
        "Perlindungan dimohon dari bahaya yang disebabkan oleh sihir atau tenung, terutama ketika para praktisi meniup simpul sebagai bagian dari ritual mereka.",
        "Ayat ini menyoroti perlunya perlindungan dari efek berbahaya dari sihir dan praktik gaib.",
      ],
    },
    {
      id: 5,
      range: "5",
      text: "Perlindungan dari Orang yang Dengki",
      explanation: [
        "Ayat terakhir memohon perlindungan dari bahaya yang disebabkan oleh rasa iri atau dengki.",
        "Ini menekankan perlunya perlindungan dari energi negatif dan niat jahat orang-orang yang iri pada orang lain, menyoroti bahaya spiritual yang ditimbulkan oleh rasa iri.",
      ],
    },
  ],
};
