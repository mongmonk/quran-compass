import type { Surah } from '../types';

export const AN_NASR: Surah = {
  id: 110,
  name: "An-Nasr",
  orderInQuran: 110,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 3,
  overview: "Surah An-Nasr berfokus pada kemenangan, perluasan komunitas Muslim, dan kebutuhan untuk memohon ampunan. Surah berikutnya, Surah Al-Lahab, membahas nasib mereka yang menentang Nabi (ﷺ).",
  topicsCovered: ["Janji kemenangan Allah kepada Muhammad (ﷺ) terpenuhi"],
  ayahs: [
    {
      id: 1,
      range: "1",
      text: "Antisipasi Kemenangan",
      explanation: [
        "Ayat ini menandai pertolongan dan kemenangan yang akan segera datang dari Allah, khususnya merujuk pada penaklukan Mekkah.",
        "Ini menandakan momen penting dalam sejarah Islam, di mana Nabi Muhammad (ﷺ) dan para sahabatnya akan mencapai kemenangan yang menentukan atas musuh-musuh mereka.",
      ],
    },
    {
      id: 2,
      range: "2",
      text: "Konversi Massal ke Islam",
      explanation: [
        "Ayat ini menggambarkan penerimaan Islam secara luas oleh penduduk Mekkah setelah penaklukannya.",
        "Ini menggarisbawahi perluasan komunitas Muslim yang cepat dan signifikan sebagai hasil dari peristiwa ini, karena sejumlah besar orang memeluk Islam.",
      ],
    },
    {
      id: 3,
      range: "3",
      text: "Syukur dan Memohon Ampunan",
      explanation: [
        "Orang-orang beriman diperintahkan untuk memuji dan memohon ampunan dari Allah sebagai tanggapan atas kemenangan dan konversi massal.",
        "Ayat ini menggarisbawahi pentingnya mengungkapkan rasa syukur atas nikmat Allah dan memohon ampunan-Nya atas segala kekurangan, menyoroti rahmat dan kesiapan-Nya untuk menerima taubat.",
      ],
    },
  ],
};
