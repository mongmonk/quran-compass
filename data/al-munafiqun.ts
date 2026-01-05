import type { Surah } from '../types';

export const AL_MUNAFIQUN: Surah = {
  id: 63,
  name: "Al-Munafiqun",
  orderInQuran: 63,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 11,
  overview: "Surah Al-Munafiqun juga berbicara tentang petunjuk bagi orang-orang beriman. Surah ini mencela orang-orang munafik karena menghalangi orang lain dari jalan Allah dan menghalangi orang-orang untuk berinfak di jalan-Nya. Sebaliknya, surah ini mendorong orang-orang beriman untuk berinfak sebelum kematian menjemput mereka, karena kematian dapat terjadi kapan saja.",
  topicsCovered: ["Sifat-sifat orang munafik", "tidak ada ampunan bagi orang munafik", "berinfaklah sebelum kamu mati"],
  ayahs: [
    {
      id: 1,
      range: "1-4",
      text: "Kebohongan Orang Munafik Terbongkar",
      explanation: [
        "Orang-orang munafik secara salah mengklaim beriman kepada Nabi Muhammad (ﷺ) tetapi dibongkar sebagai pembohong oleh Allah.",
        "Mereka menggunakan sumpah untuk menyembunyikan kemunafikan mereka, menghalangi orang lain dari jalan Allah.",
        "Hati mereka yang terkunci adalah akibat dari awalnya beriman lalu kafir.",
        "Meskipun tampak menyenangkan, mereka hampa di dalam, musuh kebenaran yang pantas mendapatkan kutukan Allah.",
      ],
    },
    {
      id: 2,
      range: "5-8",
      text: "Kesombongan dan Pertentangan",
      explanation: [
        "Allah tidak memberi petunjuk kepada mereka yang memberontak terhadap perintah-Nya, baik Nabi (ﷺ) memohon ampunan untuk mereka atau tidak.",
        "Orang-orang munafik menentang pengeluaran untuk para pengikut Nabi (ﷺ), tidak menyadari bahwa Allah memiliki semua perbendaharaan.",
        "Mereka berencana untuk mengusir Nabi (ﷺ), menipu diri mereka sendiri dengan kekuasaan.",
      ],
    },
    {
      id: 3,
      range: "9-11",
      text: "Peringatan dan Dorongan",
      explanation: [
        "Orang-orang beriman diperingatkan agar harta atau anak-anak tidak memalingkan mereka dari Allah, yang menyebabkan kerugian.",
        "Dianjurkan untuk berinfak dari harta Allah sebelum kematian, menghindari penyesalan.",
        "Kematian tidak memberikan penangguhan; Allah mengetahui semua tindakan dan niat.",
      ],
    },
  ],
};
