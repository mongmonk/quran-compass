import type { Surah } from '../types';

export const AT_TAHRIM: Surah = {
  id: 66,
  name: "At-Tahrim",
  orderInQuran: 66,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 12,
  overview: "Surah At-Tahrim membahas sebuah insiden dalam rumah tangga Nabi (ﷺ) yang melibatkan kecemburuan di antara istri-istrinya. Surah ini secara halus menasihati istri-istri Nabi (ﷺ) untuk belajar dari teladan wanita-wanita beriman seperti Maryam (RA) dan Asiyah (RA), sambil memperingatkan tentang konsekuensi yang dihadapi oleh istri-istri nabi Nuh (AS) dan Luth (AS). Surah ini juga mendesak orang-orang beriman untuk bertaubat dengan tulus kepada Allah untuk mendapatkan pahala abadi-Nya, sementara orang-orang kafir diperingatkan akan nasib yang mengerikan, yang dirinci lebih lanjut dalam surah berikutnya.",
  topicsCovered: ["Peringatan bagi istri-istri nabi (ﷺ)", "Allah akan memberikan nabi (ﷺ) istri yang lebih baik jika beliau menceraikan mereka"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Ketetapan Ilahi dan Kerahasiaan",
      explanation: [
        "Nabi (ﷺ) ditanya tentang batasan yang dibuatnya sendiri, yang diizinkan oleh Allah.",
        "Allah menetapkan pembubaran sumpah bagi laki-laki, memiliki hikmah dan pengetahuan tertinggi.",
        "Nabi (ﷺ) curhat kepada salah satu istrinya, tetapi dia mengungkapkannya.",
        "Allah mengungkapkan hal ini, dan Nabi (ﷺ) memberitahukan sebagian dan menyembunyikan sebagian.",
      ],
    },
    {
      id: 2,
      range: "4-7",
      text: "Taubat dan Peringatan",
      explanation: [
        "Taubat dianjurkan bagi istri-istri Nabi (ﷺ). Jika mereka bersekongkol, Allah, Jibril (AS), orang-orang beriman yang saleh, dan para malaikat akan mendukungnya.",
        "Perceraian akan membawa Nabi (ﷺ) kepada istri-istri yang lebih baik.",
        "Orang-orang beriman diperingatkan untuk melindungi diri dari Neraka, dengan malaikat-malaikat yang keras mengawasinya.",
        "Orang-orang kafir tidak akan menemukan alasan pada Hari Kiamat.",
      ],
    },
    {
      id: 3,
      range: "8-12",
      text: "Taubat yang Tulus dan Perjuangan",
      explanation: [
        "Taubat yang tulus dapat membawa pengampunan dan masuk ke Surga.",
        "Nabi (ﷺ) diperintahkan untuk berjuang melawan orang-orang kafir dan munafik, karena tujuan mereka adalah Neraka.",
        "Contoh pengkhianatan dan kebenaran dari istri-istri Nuh (AS) dan Luth (AS), serta istri Firaun dan Maryam (RA), menawarkan pelajaran.",
      ],
    },
  ],
};
