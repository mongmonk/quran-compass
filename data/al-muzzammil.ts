import type { Surah } from '../types';

export const AL_MUZZAMMIL: Surah = {
  id: 73,
  name: "Al-Muzzammil",
  orderInQuran: 73,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 20,
  overview: "Surah Al-Muzzammil adalah surah Mekkah awal yang diturunkan kepada Nabi Muhammad (ﷺ) selama periode awal kenabiannya. Nama surah ini, 'Al-Muzzammil,' berarti 'Yang Berselimut,' merujuk pada Nabi (ﷺ) yang dinasihati untuk shalat di malam hari saat berselimut. Surah ini menekankan pentingnya shalat malam (Tahajjud) dan pengabdian kepada Allah. Selain itu, surah ini memberikan kepastian dan dorongan kepada Nabi (ﷺ) saat beliau bersiap menerima wahyu lebih lanjut dan cobaan yang akan datang.",
  topicsCovered: ["Perintah Allah untuk nabi Muhammad (ﷺ)"],
  ayahs: [
    {
      id: 1,
      range: "1-7",
      text: "Panggilan untuk Shalat Malam",
      explanation: [
        "Allah menyapa Nabi Muhammad (ﷺ) sebagai 'orang yang berselimut' dan memerintahkannya untuk menghabiskan sebagian besar malam untuk shalat dan membaca Al-Qur'an.",
        "Periode ibadah malam ini disorot sebagai bermanfaat untuk mengembangkan kekuatan spiritual dan ketulusan.",
      ],
    },
    {
      id: 2,
      range: "8-14",
      text: "Pengabdian dan Kesabaran",
      explanation: [
        "Ayat-ayat ini menekankan pengabdian diri secara eksklusif kepada Allah dan bersabar menghadapi pertentangan dari orang-orang kafir.",
        "Nabi (ﷺ) dinasihati untuk mendedikasikan dirinya untuk beribadah kepada Allah dan bersabar dengan apa yang dikatakan oleh orang-orang kafir.",
      ],
    },
    {
      id: 3,
      range: "15-19",
      text: "Peringatan bagi Orang Kafir dan Hari Kiamat",
      explanation: [
        "Surah ini merujuk pada kisah Musa (AS) dan Firaun untuk mengilustrasikan nasib mereka yang menentang utusan ilahi.",
        "Surah ini memperingatkan orang-orang kafir akan konsekuensi berat yang akan mereka hadapi pada Hari Kiamat, mendorong mereka untuk memperhatikan peringatan.",
      ],
    },
    {
      id: 4,
      range: "20",
      text: "Keringanan dalam Ibadah",
      explanation: [
        "Ayat terakhir memberikan keringanan, mengakui kesulitan menjaga shalat malam berjam-jam.",
        "Mendorong untuk membaca apa yang mudah bagi mereka dari Al-Qur'an.",
        "Allah menekankan pentingnya konsistensi.",
        "Orang beriman harus shalat dan membaca Al-Qur'an sebanyak yang mereka bisa, menyeimbangkan tugas spiritual mereka dengan kehidupan praktis, dan diingatkan untuk melakukan shalat wajib, memberikan sedekah, dan memohon ampunan Allah.",
      ],
    },
  ],
};
