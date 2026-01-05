import type { Surah } from '../types';

export const AL_BURUJ: Surah = {
  id: 85,
  name: "Al-Buruj",
  orderInQuran: 85,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 22,
  overview: "Pembukaan Surah Al-Buruj mengecam penganiayaan yang dilakukan terhadap orang-orang Kristen Najran oleh kaum pagan sekitar tahun 524 M. Para penindas diperingatkan tentang hukuman pembakaran, sementara orang-orang beriman dijamin akan mendapatkan pahala yang luar biasa di Surga. Baik surah ini maupun surah berikutnya bersumpah demi langit yang menjulang tinggi, menggarisbawahi kekuasaan Allah yang tak terbatas, mengeluarkan peringatan kepada para pelanggar, dan menyoroti sifat ilahi Al-Qur'an.",
  topicsCovered: ["Kutukan atas para penghuni parit", "Siksaan bagi penganiaya orang beriman yang tidak bertaubat", "Allah meliputi segalanya"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Sumpah Ilahi",
      explanation: [
        "Allah bersumpah demi langit yang menjulang tinggi dan Hari Kebangkitan, menyoroti pentingnya pesan tersebut.",
        "Sumpah diambil demi langit yang berisi bintang-bintang besar dan Hari Kebangkitan, menekankan pentingnya mereka.",
      ],
    },
    {
      id: 2,
      range: "4-7",
      text: "Penganiayaan",
      explanation: [
        "Orang-orang terkutuk dari parit menyiksa orang-orang beriman dan menyalakan api untuk menyakiti mereka.",
        "Meskipun menyaksikan kekejaman itu, mereka tidak melakukan apa pun untuk menghentikannya.",
        "Orang-orang beriman yang tidak bersalah menghadapi penganiayaan semata-mata karena iman mereka kepada Allah.",
      ],
    },
    {
      id: 3,
      range: "8-12",
      text: "Keimanan dan Pahala",
      explanation: [
        "Orang-orang beriman menanggung penganiayaan karena iman mereka kepada Allah, Penguasa langit dan bumi.",
        "Siksaan menanti para penindas yang menolak untuk bertaubat, sementara orang-orang beriman akan diberi pahala Surga yang di bawahnya mengalir sungai-sungai.",
        "Hukuman Allah itu berat, tetapi rahmat-Nya juga melimpah bagi orang-orang saleh.",
      ],
    },
    {
      id: 4,
      range: "13-16",
      text: "Otoritas Ilahi",
      explanation: [
        "Allah memulai hukuman dan mengulanginya di Akhirat, namun Dia Maha Pengampun dan Maha Penyayang kepada orang-orang beriman.",
        "Dia adalah Pemilik takhta yang mulia, bertindak sesuai dengan kehendak-Nya.",
      ],
    },
    {
      id: 5,
      range: "17-22",
      text: "Pelajaran Sejarah",
      explanation: [
        "Kisah-kisah tentara Firaun dan kaum Tsamud berfungsi sebagai pengingat akan konsekuensi dari kekafiran.",
        "Meskipun ada peringatan dan tanda-tanda, orang-orang kafir tetap bertahan, namun Allah sepenuhnya menyadari perbuatan mereka.",
        "Al-Qur'an digambarkan sebagai mulia dan terpelihara, menekankan asal-usul dan signifikansi ilahinya.",
      ],
    },
  ],
};
