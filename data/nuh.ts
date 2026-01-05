import type { Surah } from '../types';

export const NUH: Surah = {
  id: 71,
  name: "Nuh",
  orderInQuran: 71,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 28,
  overview: "Surah Nuh menceritakan upaya Nuh (AS) untuk menyampaikan risalahnya kepada kaumnya selama lebih dari 950 tahun, sesuai dengan jumlah huruf Arab dalam surah ini. Meskipun usahanya yang gigih, kaumnya tetap dalam penolakan dan akhirnya dihancurkan oleh Banjir. Narasi ini kontras dengan kekeraskepalaan kaum pagan Arab di surah sebelumnya, sambil juga membayangi keimanan instan beberapa Jin setelah mendengar kebenaran di surah berikutnya.",
  topicsCovered: ["Kisah Nabi Nuh (AS)"],
  ayahs: [
    {
      id: 1,
      range: "1-9",
      text: "Misi dan Seruan Nabi Nuh (AS)",
      explanation: [
        "Nabi Nuh (AS) diutus oleh Allah untuk memperingatkan kaumnya akan siksaan yang akan datang.",
        "Dia dengan lugas memberitahu mereka tentang perannya dan mengajak mereka untuk menyembah Allah semata.",
        "Nuh menjanjikan pengampunan dan penangguhan, dengan gigih mendesak kaumnya siang dan malam.",
        "Meskipun usahanya, mereka menolak pesannya, menunjukkan kesombongan dan kekeraskepalaan.",
      ],
    },
    {
      id: 2,
      range: "10-20",
      text: "Nasihat dan Refleksi Nabi Nuh (AS)",
      explanation: [
        "Nabi Nuh (AS) menasihati untuk memohon ampunan untuk mendapatkan berkah yang melimpah dan mempertanyakan kekafiran.",
        "Merenungkan ciptaan Allah atas manusia, alam semesta, kehidupan, dan kematian.",
        "Mengakui ciptaan Allah yang luas, menjadikan bumi lapang untuk perjalanan.",
      ],
    },
    {
      id: 3,
      range: "21-28",
      text: "Konsekuensi dan Doa",
      explanation: [
        "Kaum Nabi Nuh (AS) tidak taat dan mengikuti para pemimpin, yang menyebabkan mereka tenggelam dan masuk ke dalam Api.",
        "Nuh berdoa untuk kehancuran orang-orang kafir untuk mencegah kesesatan lebih lanjut.",
        "Dia memohon ampunan bagi orang-orang beriman dan memohon kehancuran hanya bagi orang-orang zalim.",
      ],
    },
  ],
};
