import type { Surah } from '../types';

export const AL_JUMUAH: Surah = {
  id: 62,
  name: "Al-Jumu'ah",
  orderInQuran: 62,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 11,
  overview: "Surah Al-Jumu'ah mengkritik orang-orang Yahudi yang menyakiti nabi Musa (AS) karena tidak menegakkan Taurat. Sebagaimana para pengikut nabi Isa (AS) dipuji dalam surah sebelumnya, para sahabat Muhammad (ﷺ) dihormati di sini. Nabi (ﷺ) di sini sebagai karunia Allah bagi orang-orang beriman. Selain itu, surah ini juga memberikan petunjuk kepada orang-orang beriman mengenai shalat Jumat.",
  topicsCovered: ["Nabi Muhammad (ﷺ) untuk Semua", "Perintah tentang shalat Jumat"],
  ayahs: [
    {
      id: 1,
      range: "1-4",
      text: "Pemuliaan, Pengangkatan, Misi, Karunia",
      explanation: [
        "Semua ciptaan di langit dan bumi memuliakan Allah, mengakui kedaulatan-Nya.",
        "Pengangkatan Nabi Muhammad (ﷺ) di antara orang-orang Arab yang buta huruf, menyucikan mereka dan mengajarkan Al-Qur'an.",
        "Pengangkatan Nabi Muhammad (ﷺ) dan petunjuk Al-Qur'an mencerminkan karunia Allah.",
      ],
    },
    {
      id: 2,
      range: "5-8",
      text: "Contoh Orang Yahudi, Tantangan, Pengingat Kematian",
      explanation: [
        "Orang-orang Yahudi dipercayakan Taurat tetapi gagal, mirip dengan keledai yang membawa buku.",
        "Tantangan kepada orang Yahudi: Jika teman eksklusif Allah, harapkanlah kematian, namun mereka takut akan hal itu.",
        "Terlepas dari upaya untuk menghindari kematian, mereka akan menghadapinya, dan akan dimintai pertanggungjawaban oleh Allah.",
      ],
    },
    {
      id: 3,
      range: "9-11",
      text: "Shalat Jumat, Izin untuk Bubar, Gangguan",
      explanation: [
        "Pengingat untuk menanggapi panggilan shalat Jumat, meninggalkan urusan duniawi.",
        "Setelah shalat, orang beriman diizinkan untuk bubar, mencari rezeki dari Allah.",
        "Meskipun beberapa mungkin terganggu oleh daya tarik duniawi, orang beriman diingatkan akan rezeki Allah yang lebih unggul.",
      ],
    },
  ],
};
