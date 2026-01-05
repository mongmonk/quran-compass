import type { Surah } from '../types';

export const AL_INSHIQAQ: Surah = {
  id: 84,
  name: "Al-Insyiqaq",
  orderInQuran: 84,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 25,
  overview: "Melanjutkan tema-tema dari surah sebelumnya, Surah Al-Insyiqaq merinci peristiwa-peristiwa Hari Kiamat. Orang-orang beriman akan dengan gembira menerima catatan amal mereka di tangan kanan mereka, sementara orang-orang kafir akan meratap saat menerima catatan mereka di tangan kiri, mengantisipasi hukuman yang segera. Surah ini mengkritik orang-orang kafir atas kegagalan mereka untuk tunduk kepada Allah, membandingkan ketidaktaatan mereka dengan ketundukan total langit dan bumi.",
  topicsCovered: ["Deskripsi hari kiamat", "Orang dengan catatan di tangan kanan akan bahagia"],
  ayahs: [
    {
      id: 1,
      range: "1-6",
      text: "Tanda-tanda dan Ketaatan",
      explanation: [
        "Tanda-tanda Kiamat meliputi langit yang terbelah dan bumi yang diratakan.",
        "Langit dan bumi menaati Allah tanpa ragu.",
        "Umat manusia akan kembali kepada Tuhannya, menghadapi konsekuensi dari perbuatan mereka.",
      ],
    },
    {
      id: 2,
      range: "7-19",
      text: "Perhitungan dan Kesalahan Penilaian",
      explanation: [
        "Mereka yang menerima catatan di tangan kanan akan bergembira.",
        "Penyesalan menanti mereka yang menerima catatan dari belakang punggung mereka.",
        "Tertipu oleh kekafiran, mereka mengira tidak akan kembali kepada Allah.",
      ],
    },
    {
      id: 3,
      range: "20-25",
      text: "Kekafiran dan Peringatan",
      explanation: [
        "Orang-orang kafir menolak Al-Qur'an dan Nabi Muhammad (ﷺ).",
        "Mereka mengingkari pertanggungjawaban atas perbuatan mereka.",
        "Hukuman yang pedih menanti, kecuali bagi orang-orang beriman yang dijanjikan Surga.",
      ],
    },
  ],
};
