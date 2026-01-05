import type { Surah } from '../types';

export const AT_TAKWIR: Surah = {
  id: 81,
  name: "At-Takwir",
  orderInQuran: 81,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 29,
  overview: "Surah At-Takwir menggambarkan peristiwa-peristiwa yang akan terjadi pada Hari Kiamat. Surah ini menyatakan bahwa setiap orang akan menghadapi konsekuensi dari perbuatan mereka pada hari yang menentukan itu. Surah ini diakhiri dengan menegaskan kembali asal usul ilahi Al-Qur'an dan menolak tuduhan kaum pagan tentang kegilaan Nabi (ﷺ).",
  topicsCovered: ["Deskripsi peristiwa hari kiamat"],
  ayahs: [
    {
      id: 1,
      range: "1-7",
      text: "Tanda-tanda Kosmik Hari Kiamat",
      explanation: [
        "Deskripsi peristiwa kiamat seperti matahari kehilangan cahayanya dan bintang-bintang berjatuhan.",
        "Indikasi akan datangnya Hari Kiamat melalui gejolak alam.",
        "Bahkan gunung-gunung dan makhluk-makhluk yang tegar pun mengalami kekacauan.",
        "Gambaran simbolis lautan yang berubah menjadi api atau meluap.",
        "Kebangkitan dan pertanggungjawaban di hadapan Allah.",
      ],
    },
    {
      id: 2,
      range: "8-14",
      text: "Keadilan dan Perhitungan",
      explanation: [
        "Kecaman atas penguburan bayi perempuan hidup-hidup adalah ketidakadilan yang harus dipertanggungjawabkan.",
        "Perhitungan setiap perbuatan manusia di hadapan Allah.",
        "Perubahan kosmik yang dramatis menandai Hari Kiamat.",
        "Kesadaran akan perbuatan dan konsekuensinya.",
      ],
    },
    {
      id: 3,
      range: "15-21",
      text: "Sumpah dan Utusan yang Mulia",
      explanation: [
        "Sumpah khidmat demi fenomena kosmik.",
        "Al-Qur'an adalah firman utusan yang mulia, Jibril (AS), yang diutus oleh Allah.",
        "Ketaatan dan kepercayaan Jibril (AS) memvalidasi pesan Al-Qur'an.",
      ],
    },
    {
      id: 4,
      range: "22-29",
      text: "Validasi Nabi Muhammad (ﷺ)",
      explanation: [
        "Jaminan kepada para sahabat mengenai kewarasan Nabi Muhammad (ﷺ) dan penglihatannya tentang Jibril.",
        "Muhammad (ﷺ) tidak menahan pengetahuan dan hanya berbicara apa yang diwahyukan oleh Allah.",
        "Al-Qur'an adalah wahyu ilahi, bukan dari Setan, berfungsi sebagai pengingat dan petunjuk yang bergantung pada kehendak Allah.",
      ],
    },
  ],
};
