import type { Surah } from '../types';

export const AL_MUMTAHANAH: Surah = {
  id: 60,
  name: "Al-Mumtahanah",
  orderInQuran: 60,
  // FIX: Corrected the value of `revealedIn` to 'Madaniyah' to match the type definition.
  revealedIn: 'Madaniyah',
  numberOfAyat: 13,
  overview: "Surah Al-Mumtahanah diturunkan sebelum penaklukan Mekkah oleh Nabi (ﷺ), dan membahas pelanggaran perjanjian damai di Hudaibiyah. Surah ini menyoroti pentingnya loyalitas kepada Allah dan sesama orang beriman. Surah ini juga mengajarkan orang beriman untuk menunjukkan kesopanan kepada non-Muslim kecuali jika mereka menganiaya Muslim. Nama surah ini berasal dari pengujian wanita yang melarikan diri dari Mekkah untuk memastikan hijrah mereka adalah karena Islam.",
  topicsCovered: ["Jangan berteman dengan musuh Allah dan Muslim", "Nabi (ﷺ) menerima baiat wanita berdasarkan enam janji"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Larangan Pertemanan dan Hari Kiamat",
      explanation: [
        "Orang-orang beriman diperingatkan agar tidak berteman dengan orang-orang kafir yang menunjukkan permusuhan terhadap Islam.",
        "Konsekuensi disorot jika orang-orang kafir memperoleh kekuasaan, memperlakukan orang-orang beriman dengan kejam.",
        "Pengingat akan Hari Kebangkitan di mana ikatan keluarga tidak akan berguna, menekankan kemahahadiran Allah.",
      ],
    },
    {
      id: 2,
      range: "4-6",
      text: "Teladan Ibrahim (AS) dan Doa untuk Pengampunan",
      explanation: [
        "Loyalitas Ibrahim (AS) kepada Allah, memutuskan ikatan karena kekafiran.",
        "Permohonan belas kasih Ibrahim (AS) untuk pengampunan ayahnya.",
        "Perilaku mereka menjadi teladan bagi orang-orang beriman, percaya pada rahmat Allah.",
      ],
    },
    {
      id: 3,
      range: "7-10",
      text: "Harapan untuk Rekonsiliasi dan Perlakuan Adil",
      explanation: [
        "Potensi Allah untuk memfasilitasi rekonsiliasi antara orang beriman dan musuh.",
        "Dorongan untuk memperlakukan mereka yang tidak memerangi atau mengusir orang beriman secara adil.",
        "Pengecualian mengenai lawan yang memusuhi dan petunjuk mengenai wanita imigran dan pernikahan.",
      ],
    },
    {
      id: 4,
      range: "11-13",
      text: "Kompensasi dan Syarat-syarat Baiat",
      explanation: [
        "Kompensasi jika istri seorang mukmin bergabung dengan orang kafir.",
        "Syarat-syarat untuk baiat kepada Nabi Muhammad.",
        "Larangan berteman dengan mereka yang telah dimurkai Allah, seperti orang-orang Yahudi yang putus asa.",
      ],
    },
  ],
};
