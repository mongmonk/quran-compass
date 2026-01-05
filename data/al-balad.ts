import type { Surah } from '../types';

export const AL_BALAD: Surah = {
  id: 90,
  name: "Al-Balad",
  orderInQuran: 90,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 20,
  overview: "Tema utama surah Mekkah ini, Surah Al-Balad, adalah kemampuan bawaan manusia untuk membedakan antara yang benar dan yang salah. Surga menanti orang-orang saleh, sementara Neraka menanti para pelaku kejahatan. Tema ini diulangi dalam surah berikutnya.",
  topicsCovered: ["Allah menciptakan dan menunjukkan dua jalan", "manusia menghindari jalan kebaikan yang sulit", "sifat golongan kanan dan kiri"],
  ayahs: [
    {
      id: 1,
      range: "1-5",
      text: "Sumpah dan Refleksi",
      explanation: [
        "Sumpah demi kota Mekkah menandakan pentingnya dan kesuciannya.",
        "Penekanan pada kesucian Mekkah, dengan sumpah demi kota tempat Nabi (ﷺ) tinggal.",
        "Sumpah demi Adam dan keturunannya menyoroti garis keturunan bersama umat manusia.",
        "Pengingat akan tujuan manusia untuk bersusah payah dan berjuang dalam hidup.",
      ],
    },
    {
      id: 2,
      range: "6-10",
      text: "Ketidaktahuan dan Pertanggungjawaban",
      explanation: [
        "Membanggakan diri karena menghamburkan kekayaan tanpa mempertimbangkan konsekuensi.",
        "Keyakinan palsu akan ketiadaan penglihatan dan kurangnya pertanggungjawaban.",
        "Pengingat akan karunia penglihatan, ucapan, dan pemahaman yang dianugerahkan oleh Allah.",
        "Kesadaran akan pilihan moral antara yang baik dan yang jahat.",
        "Ayat-ayat ini menyoroti kemampuan manusia untuk memilih antara yang benar dan yang salah, dan kelalaian sebagian orang terhadap jalan yang benar.",
      ],
    },
    {
      id: 3,
      range: "11-16",
      text: "Pengabaian Kebenaran",
      explanation: [
        "Kelalaian dalam berusaha menempuh jalan kebenaran.",
        "Deskripsi jalan yang terjal sebagai tindakan kebaikan, amal, dan kepedulian terhadap yang membutuhkan.",
        "Contoh perbuatan baik termasuk memerdekakan budak dan memberi makan orang lapar.",
        "Penekanan pada kepedulian terhadap anak yatim dan orang miskin sebagai aspek penting dari kebenaran.",
      ],
    },
    {
      id: 4,
      range: "17-20",
      text: "Transformasi dan Takdir",
      explanation: [
        "Transformasi beberapa individu menjadi orang-orang beriman yang menganjurkan nilai-nilai seperti ketekunan dan belas kasih.",
        "Pengakuan orang-orang saleh sebagai penghuni Surga, yang ditakdirkan untuk kebahagiaan abadi.",
        "Sebaliknya, orang-orang kafir terhadap tanda-tanda Allah ditakdirkan untuk Neraka.",
        "Deskripsi hukuman bagi orang-orang kafir yang diselimuti oleh api yang tak terhindarkan.",
      ],
    },
  ],
};
