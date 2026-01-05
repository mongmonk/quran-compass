import type { Surah } from '../types';

export const AL_FAJR: Surah = {
  id: 89,
  name: "Al-Fajr",
  orderInQuran: 89,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 30,
  overview: "Dalam surah Mekkah ini, Nabi (ﷺ) menerima jaminan bahwa kaum pagan Arab tidak terkecuali dari siksaan yang diderita oleh kaum 'Aad, Tsamud, dan Firaun. Surah ini merujuk pada orang-orang jahat yang kurang bersyukur dalam kemakmuran dan kesabaran dalam kesulitan. Pada Hari Kiamat, para pelaku kejahatan akan menyesali perbuatan mereka, sementara orang-orang saleh akan dimuliakan. Surah ini juga mengkritik mereka yang menahan nikmat Allah.",
  topicsCovered: ["Bangsa-bangsa terdahulu dihancurkan karena kesalahan mereka", "deskripsi hari kiamat"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Sumpah dan Pemahaman",
      explanation: [
        "Demi fajar dan sepuluh hari pertama Dzulhijjah.",
        "Genap dan ganjil ciptaan Allah ditekankan.",
        "Demi malam yang berlalu.",
        "Bukti yang cukup diberikan untuk pemahaman, mendesak penghindaran dosa dan kekafiran.",
      ],
    },
    {
      id: 2,
      range: "6-14",
      text: "Refleksi tentang Bangsa-Bangsa Terdahulu",
      explanation: [
        "Refleksi didesak tentang bagaimana Allah berurusan dengan 'Aad dan Tsamud.",
        "'Aad dikenal dengan perawakan yang menjulang tinggi; Tsamud karena memahat tempat tinggal.",
        "Kekejaman Firaun disorot, termasuk penyiksaan dengan pasak.",
        "Kelompok-kelompok dituduh melakukan pelanggaran dan menyebarkan kerusakan.",
        "Pembalasan berat Allah ditimpakan kepada mereka, menekankan pengawasan-Nya.",
      ],
    },
    {
      id: 3,
      range: "15-20",
      text: "Tanggapan terhadap Cobaan",
      explanation: [
        "Tanggapan manusia yang bervariasi terhadap cobaan dicatat; kehormatan dikaitkan dengan Allah, tetapi kesulitan membawa kehinaan.",
        "Kritik karena mengabaikan anak yatim dan keengganan memberi makan orang miskin.",
        "Melahap warisan dengan rakus dan cinta berlebihan terhadap kekayaan dikecam.",
      ],
    },
    {
      id: 4,
      range: "21-30",
      text: "Hari Kiamat",
      explanation: [
        "Pemandangan bumi yang dihancurkan menjadi debu digambarkan.",
        "Kedatangan Allah dengan barisan malaikat dijelaskan.",
        "Neraka didekatkan, menyebabkan manusia menyesali kelalaiannya.",
        "Ikatan yang tak terhindarkan dan janji-janji istirahat serta kepuasan bagi orang-orang saleh.",
        "Undangan untuk kembali kepada Allah dalam keadaan ridha dan diridhai-Nya.",
      ],
    },
  ],
};
