import type { Surah } from '../types';

export const AT_TALAQ: Surah = {
  id: 65,
  name: "At-Thalaq",
  orderInQuran: 65,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 12,
  overview: "Surah At-Talaq menguraikan prosedur perceraian dan ketentuan bagi wanita yang diceraikan dan anak-anak mereka (ayat 1-7). Surah ini menjanjikan pahala besar bagi mereka yang mematuhi perintah Allah sambil memperingatkan mereka yang tidak taat akan nasib yang diderita oleh orang-orang sebelum mereka.",
  topicsCovered: ["Petunjuk tentang perceraian dan Iddah"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Perceraian dan Rezeki Ilahi",
      explanation: [
        "Perceraian harus dilaksanakan dengan adil dan belas kasih, menghormati masa tunggu dan menghindari pengusiran yang tidak adil dari rumah.",
        "Allah memberikan rezeki dari sumber yang tidak terduga bagi mereka yang percaya kepada-Nya.",
        "Percaya pada rencana Allah sudah cukup, karena Dia memastikan pemenuhan Tujuan-Nya.",
      ],
    },
    {
      id: 2,
      range: "4-7",
      text: "Masa Tunggu dan Kasih Sayang",
      explanation: [
        "Wanita yang diceraikan memiliki masa tunggu yang ditentukan, dan Allah menjanjikan kemudahan bagi mereka yang takut kepada-Nya.",
        "Perlakuan yang baik terhadap wanita yang diceraikan, terutama selama kehamilan, ditekankan.",
        "Pengeluaran harus sesuai dengan kemampuan seseorang, dan Allah menjanjikan kemudahan setelah kesulitan.",
      ],
    },
    {
      id: 3,
      range: "8-12",
      text: "Hukuman dan Petunjuk",
      explanation: [
        "Kota-kota yang tidak taat menghadapi hukuman berat di dunia ini dan Akhirat.",
        "Allah memperingatkan akan siksaan berat bagi orang-orang kafir.",
        "Al-Qur'an berfungsi sebagai petunjuk dari kegelapan menuju cahaya, menjanjikan Surga bagi orang-orang beriman.",
        "Kekuasaan dan pengetahuan Allah ditunjukkan melalui ciptaan-Nya dan perintah atas segala sesuatu.",
      ],
    },
  ],
};
