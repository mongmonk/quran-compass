import type { Surah } from '../types';

export const AL_JINN: Surah = {
  id: 72,
  name: "Al-Jinn",
  orderInQuran: 72,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 28,
  overview: "Surah Al-Jinn menceritakan penyerahan diri seketika sekelompok jin kepada Tuhan Yang Maha Esa setelah mendengar bacaan Al-Qur'an oleh Nabi (ﷺ). Sebaliknya, kaum pagan Arab ditegur karena keyakinan politeistik mereka. Surah ini menekankan bahwa tugas Nabi (ﷺ) hanyalah menyampaikan risalah, sementara hukuman yang dicari oleh kaum pagan sepenuhnya berada dalam kekuasaan Allah.",
  topicsCovered: ["Kisah Jin"],
  ayahs: [
    {
      id: 1,
      range: "1-10",
      text: "Pertemuan dengan Al-Qur'an",
      explanation: [
        "Jin mendengarkan Al-Qur'an, menegaskan keimanan kepada Allah, dan bersumpah akan tauhid.",
        "Mereka bertaubat dari kebodohan masa lalu, mengakui keagungan Allah dan kebenaran manusia.",
        "Upaya naik ke langit gagal; penyergapan menanti para pencuri dengar.",
        "Ketidakpastian menyelimuti pesan ilahi dan niat duniawi.",
      ],
    },
    {
      id: 2,
      range: "11-19",
      text: "Reaksi dan Takdir yang Beragam",
      explanation: [
        "Di antara Jin, kebenaran dan penyimpangan hidup berdampingan, dengan hukuman yang tak terhindarkan bagi orang-orang kafir.",
        "Keimanan kepada Allah menumbuhkan keberanian dan memeluk Islam; masjid didedikasikan semata-mata untuk Allah.",
        "Orang-orang kafir menghadapi siksaan, sementara orang-orang beriman dijanjikan hujan yang melimpah dan perlindungan.",
      ],
    },
    {
      id: 3,
      range: "20-28",
      text: "Peran Nabi (ﷺ) dan Kedaulatan Allah",
      explanation: [
        "Nabi Muhammad (ﷺ) hanya menyeru kepada Allah, tidak mampu memberi petunjuk atau mencelakakan orang lain.",
        "Ketidaktaatan mengarah pada hukuman abadi; ilmu Allah meliputi yang gaib.",
        "Para rasul dijaga hingga misi mereka selesai, dikelilingi oleh ilmu Allah yang meliputi segalanya.",
      ],
    },
  ],
};
