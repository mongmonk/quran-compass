import type { Surah } from '../types';

export const AL_HAQQAH: Surah = {
  id: 69,
  name: "Al-Haqqah",
  orderInQuran: 69,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 52,
  overview: "Dalam Surah Al-Haqqah, diceritakan tentang kehancuran kaum 'Aad, Tsamud, Firaun, dan Luth (AS) karena mengingkari Akhirat. Surah ini menggambarkan kiamat dan membandingkan pahala orang-orang beriman dengan hukuman orang-orang kafir. Surah ini secara menyeluruh menyangkal argumen kaum pagan terhadap Nabi (ﷺ). Surah ini menjadi dasar untuk deskripsi lebih lanjut tentang kengerian kiamat dalam surah berikutnya.",
  topicsCovered: ["Deskripsi hari kiamat", "penyebutan kehancuran Tsamud, 'Aad, dan firaun", "pahala dan hukuman"],
  ayahs: [
    {
      id: 1,
      range: "1-10",
      text: "Kepastian Hari Kebangkitan",
      explanation: [
        "Surah ini menekankan kepastian Hari Kebangkitan.",
        "Pertanyaan-pertanyaan retoris menggarisbawahi pentingnya peristiwa ini.",
        "Penyangkalan Hari Kiamat oleh peradaban masa lalu menyebabkan kehancuran mereka.",
        "Tsamud dan 'Aad dimusnahkan oleh bencana alam karena kekafiran mereka.",
        "Ketidaktaatan kepada para rasul Allah mengakibatkan hukuman yang berat.",
      ],
    },
    {
      id: 2,
      range: "11-18",
      text: "Peristiwa Hari Kebangkitan",
      explanation: [
        "Hari Kebangkitan akan dimulai dengan tiupan Sangkakala.",
        "Gangguan kosmik akan terjadi, dengan gunung-gunung hancur dan langit terbelah.",
        "Para malaikat akan menopang 'Arsy Allah, dan setiap individu akan dimintai pertanggungjawaban.",
      ],
    },
    {
      id: 3,
      range: "19-37",
      text: "Nasib Orang Saleh dan Orang Jahat",
      explanation: [
        "Orang-orang saleh akan bersukacita di Surga, menikmati buah dari amal mereka.",
        "Orang-orang jahat akan menyesali kekafiran mereka dan menghadapi hukuman berat di Neraka.",
        "Kekayaan dan kekuasaan tidak akan berguna bagi mereka pada Hari itu.",
      ],
    },
    {
      id: 4,
      range: "38-52",
      text: "Wahyu Ilahi Al-Qur'an",
      explanation: [
        "Al-Qur'an dibedakan dari puisi dan ramalan.",
        "Nabi Muhammad (ﷺ) diperingatkan agar tidak mengada-adakan kebohongan tentang Allah.",
        "Al-Qur'an berfungsi sebagai pengingat dan akan menjadi sumber penderitaan bagi para penolak pada Hari Kebangkitan.",
        "Surah ini diakhiri dengan perintah untuk memuliakan Allah.",
      ],
    },
  ],
};
