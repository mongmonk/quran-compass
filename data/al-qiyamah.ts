import type { Surah } from '../types';

export const AL_QIYAMAH: Surah = {
  id: 75,
  name: "Al-Qiyamah",
  orderInQuran: 75,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 40,
  overview: "Surah Al-Qiyamah menyangkal penolakan kaum pagan terhadap kebangkitan dan penghakiman, menekankan keniscayaan kematian dan pertanggungjawaban. Surah ini menyoroti kemampuan Allah untuk menciptakan manusia dari cairan hina dan meminta pertanggungjawaban setiap orang, sebagaimana dirinci dalam surah berikutnya.",
  topicsCovered: ["Deskripsi hari kiamat"],
  ayahs: [
    {
      id: 1,
      range: "1-11",
      text: "Penekanan pada Kebangkitan",
      explanation: [
        "Sumpah demi Hari Kiamat menggarisbawahi keseriusannya.",
        "Jiwa yang menyesali diri menyoroti kesadaran akan perbuatan dan taubat.",
        "Allah menegaskan kekuasaan-Nya atas kebangkitan, bahkan merekonstruksi ujung jari dengan sempurna.",
        "Orang-orang kafir terus berbuat dosa meskipun mengingkari kebangkitan.",
      ],
    },
    {
      id: 2,
      range: "12-21",
      text: "Pertanggungjawaban dan Alasan",
      explanation: [
        "Setiap individu akan diberitahu tentang perbuatannya dan menjadi saksi atas diri mereka sendiri.",
        "Upaya untuk memberikan alasan atas perbuatan akan ditolak.",
        "Wahyu dan bacaan Al-Qur'an kepada Muhammad menunjukkan kendali ilahi.",
        "Kecintaan orang-orang kafir terhadap kehidupan duniawi menyebabkan penolakan terhadap kebangkitan.",
      ],
    },
    {
      id: 3,
      range: "22-30",
      text: "Reaksi pada Hari Kebangkitan",
      explanation: [
        "Beberapa wajah akan bersinar sementara yang lain menjadi gelap, mencerminkan nasib masing-masing.",
        "Ketakutan dan kepanikan akan memenuhi mereka yang menghadapi malapetaka.",
        "Tahapan mendekati kematian mengarah pada kesadaran akan keniscayaannya.",
        "Pada akhirnya, semua jiwa akan tunduk pada otoritas ilahi.",
      ],
    },
     {
      id: 4,
      range: "31-40",
      text: "Peringatan dan Kekafiran",
      explanation: [
        "Orang-orang kafir mengabaikan kewajiban agama seperti iman kepada Al-Qur'an dan shalat.",
        "Meskipun kafir, mereka berjalan dengan angkuh di antara keluarga, mengagumi diri sendiri.",
        "Peringatan menekankan konsekuensi dari kekafiran dan kelalaian.",
        "Kemampuan Allah untuk menciptakan dan membangkitkan kembali digarisbawahi, menyoroti kekuasaan-Nya.",
      ],
    },
  ],
};
