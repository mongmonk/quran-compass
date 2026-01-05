import type { Surah } from '../types';

export const AT_TAGHABUN: Surah = {
  id: 64,
  name: "At-Taghabun",
  orderInQuran: 64,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 18,
  overview: "Surah At-Taghabun mendapatkan namanya dari penyebutan Hari Kiamat dalam ayat 9, di mana manusia dibagi menjadi pemenang dan pecundang. Melanjutkan dari anjuran surah sebelumnya untuk berinfak sebelum kematian, surah ini menyoroti kekuasaan Allah untuk menciptakan dan membangkitkan orang mati untuk penghakiman. Surah ini diakhiri dengan mendesak orang-orang beriman untuk berinfak di jalan Allah dan tidak terhalang oleh kekhawatiran terhadap pasangan dan anak-anak mereka.",
  topicsCovered: ["Allah menciptakan semua dalam kebenaran", "Taghabun (hari berkumpul, kerugian dan keuntungan)"],
  ayahs: [
    {
      id: 1,
      range: "1-6",
      text: "Pengakuan Universal terhadap Allah",
      explanation: [
        "Segala sesuatu di alam semesta memuliakan Allah, mengakui kekuasaan-Nya.",
        "Allah menciptakan manusia dan mengetahui perbuatan mereka, baik yang tersembunyi maupun yang tampak.",
        "Langit dan bumi diciptakan dengan kebenaran.",
        "Allah mengetahui segalanya, termasuk rahasia di dalam hati.",
        "Orang-orang kafir menghadapi hukuman karena penolakan mereka terhadap petunjuk.",
      ],
    },
    {
      id: 2,
      range: "7-10",
      text: "Jaminan dan Peringatan",
      explanation: [
        "Orang-orang kafir mengingkari kebangkitan, tetapi mereka akan dimintai pertanggungjawaban.",
        "Dianjurkan untuk beriman kepada Allah, Rasul-Nya, dan Al-Qur'an.",
        "Pada Hari Pengumpulan, orang-orang beriman akan diampuni dan masuk Surga.",
        "Orang-orang kafir akan tinggal di Neraka, tempat kembali terburuk.",
      ],
    },
    {
      id: 3,
      range: "11-14",
      text: "Ketundukan dan Nasihat",
      explanation: [
        "Musibah terjadi dengan izin Allah, membimbing hati orang-orang beriman.",
        "Diperintahkan untuk taat kepada Allah dan Rasul-Nya.",
        "Percayalah hanya kepada Allah, karena Dia satu-satunya tuhan yang layak disembah.",
        "Waspadalah terhadap anggota keluarga yang mungkin menghalangi ketaatan kepada Allah, tetapi pengampunan diberi pahala.",
      ],
    },
    {
      id: 4,
      range: "15-18",
      text: "Ujian, Sedekah, dan Sifat-sifat",
      explanation: [
        "Harta dan anak-anak adalah ujian dari Allah, dengan pahala sejati di Surga.",
        "Bertakwalah kepada Allah, taatilah Dia, dan berinfaklah dalam sedekah untuk mengatasi ketamakan.",
        "Berinfak di jalan Allah akan menghasilkan kekayaan berlipat ganda dan ampunan Allah.",
        "Allah Maha Mengetahui, Maha Perkasa, dan Maha Bijaksana.",
      ],
    },
  ],
};
