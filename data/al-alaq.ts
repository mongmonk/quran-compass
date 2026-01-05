import type { Surah } from '../types';

export const AL_ALAQ: Surah = {
  id: 96,
  name: "Al-'Alaq",
  orderInQuran: 96,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 19,
  overview: "Ayat 1-5 dari surah ini adalah wahyu pertama Al-Qur'an. Ayat-ayat ini menceritakan pertemuan Nabi (ﷺ) dengan malaikat Jibril (AS) di sebuah gua di luar Mekkah, di mana beliau diperintahkan untuk membaca meskipun buta huruf. Ayat-ayat berikutnya diturunkan untuk menghalangi Abu Jahl, seorang pagan Mekkah terkemuka, dari menganiaya Nabi (ﷺ).",
  topicsCovered: ["Allah menciptakan manusia", "diajar dengan pena", "pelanggar diseret ubun-ubunnya ke dalam api"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Wahyu dan Penciptaan",
      explanation: [
        "Nabi Muhammad (ﷺ) menerima perintah untuk membaca dan belajar dengan nama Allah.",
        "Pengakuan Allah sebagai Pencipta manusia dari segumpal darah.",
        "Penekanan pada kemurahan Allah dan penganugerahan ilmu melalui pena.",
        "Pengakuan atas kapasitas manusia untuk memperoleh pengetahuan.",
      ],
    },
    {
      id: 2,
      range: "6-12",
      text: "Pelanggaran Manusia dan Pertanggungjawaban",
      explanation: [
        "Meskipun ada petunjuk, manusia sering melampaui batas, dipengaruhi oleh rasa sombong.",
        "Pengingat akan kembalinya kepada Allah untuk penghakiman dan pertanggungjawaban.",
        "Pertanyaan dan tantangan yang ditujukan kepada Abu Jahl, seorang kafir terkemuka di Mekkah.",
      ],
    },
    {
      id: 3,
      range: "13-19",
      text: "Peringatan dan Konsekuensi Ilahi",
      explanation: [
        "Abu Jahl diperingatkan akan konsekuensi jika ia terus mengingkari kebenaran.",
        "Allah memperingatkan tentang penyitaan ubun-ubun, melambangkan penghinaan dan hukuman.",
        "Pemanggilan para penjaga Neraka menunjukkan konsekuensi berat bagi kekafiran.",
        "Muhammad (ﷺ) diperintahkan untuk bersujud, menekankan ketaatan pada perintah ilahi.",
      ],
    },
  ],
};
