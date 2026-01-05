import type { Surah } from '../types';

export const AL_ALA: Surah = {
  id: 87,
  name: "Al-A'la",
  orderInQuran: 87,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 19,
  overview: "Berbeda dengan orang-orang jahat yang merencanakan kejahatan terhadap Allah seperti yang disebutkan dalam surah sebelumnya, Nabi (ﷺ) diperintahkan di awal surah Mekkah ini untuk memuliakan Tuhannya. Sifat fana dunia ini disamakan dengan umur pendek tanaman. Nabi (ﷺ) diberi kepastian akan dukungan Allah, sementara orang-orang jahat diperingatkan tentang siksaan Neraka, sebuah peringatan yang diulang dalam surah berikutnya.",
  topicsCovered: ["Allah menciptakan dan memberi petunjuk segalanya", "Janji Allah untuk membantu nabi Muhammad (ﷺ) dalam menghafal Al-Qur'an"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Pemuliaan Allah",
      explanation: [
        "Perintah untuk memuliakan Allah, Yang Maha Tinggi.",
        "Pengakuan atas ciptaan Allah dan proporsi yang sempurna.",
        "Pengenalan bimbingan Allah dalam ciptaan.",
        "Penyebutan Allah yang menumbuhkan tumbuh-tumbuhan untuk rezeki.",
        "Deskripsi tumbuh-tumbuhan yang akhirnya berubah menjadi jerami kering.",
      ],
    },
    {
      id: 2,
      range: "6-8",
      text: "Janji dan Pengetahuan Luar Biasa",
      explanation: [
        "Allah berjanji untuk membantu Muhammad (ﷺ) dalam menghafal Al-Qur'an.",
        "Pengetahuan luar biasa Allah meliputi yang tampak dan yang tersembunyi.",
        "Jaminan untuk memudahkan jalan kebenaran bagi Muhammad (ﷺ).",
      ],
    },
    {
      id: 3,
      range: "9-15",
      text: "Dorongan dan Penolakan",
      explanation: [
        "Dorongan bagi orang-orang beriman untuk mengingatkan orang lain demi keuntungan potensial.",
        "Penerimaan pengingat menguntungkan mereka yang takut kepada Allah.",
        "Penolakan dari pengingat oleh orang-orang jahat.",
        "Nasib orang jahat adalah masuk ke dalam api besar tanpa penangguhan.",
        "Keberhasilan bagi mereka yang menyucikan diri dan mengingat Allah.",
      ],
    },
    {
      id: 4,
      range: "16-19",
      text: "Preferensi Duniawi dan Keunggulan Akhirat",
      explanation: [
        "Meskipun janji-janji keberhasilan di Akhirat, manusia sering lebih memilih kesenangan duniawi.",
        "Penekanan pada keunggulan dan ketahanan Akhirat.",
        "Konfirmasi Akhirat dalam kitab-kitab suci Ibrahim (AS) dan Musa (AS).",
        "Wahyu bimbingan yang serupa dengan Muhammad (ﷺ) dalam kitab-kitab suci sebelumnya.",
      ],
    },
  ],
};
