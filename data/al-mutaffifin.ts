import type { Surah } from '../types';

export const AL_MUTAFFIFIN: Surah = {
  id: 83,
  name: "Al-Mutaffifin",
  orderInQuran: 83,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 36,
  overview: "Surah Al-Mutaffifin adalah surah Mekkah yang dimulai dengan peringatan kepada mereka yang curang dalam timbangan tentang Hari yang mengerikan yang akan datang. Surah ini berbicara tentang hari kiamat ketika orang-orang jahat akan menghadapi hukuman berat dan orang-orang saleh akan menerima pahala yang melimpah. Surah ini diakhiri dengan menyatakan bahwa orang-orang kafir akan menghadapi balasan karena mengolok-olok orang-orang beriman.",
  topicsCovered: ["Celakalah bagi para penipu", "penyebutan dua kitab catatan", "deskripsi surga"],
  ayahs: [
    {
      id: 1,
      range: "1-9",
      text: "Peringatan Terhadap Ketidakadilan",
      explanation: [
        "Celakalah bagi mereka yang curang dalam takaran dan timbangan, merugikan orang lain.",
        "Mereka menuntut takaran penuh tetapi memberi kurang saat giliran mereka.",
        "Kelupaan akan Hari Kiamat.",
        "Perbuatan jahat dicatat di Sijjin, sebuah kitab catatan orang-orang durhaka.",
      ],
    },
    {
      id: 2,
      range: "10-16",
      text: "Malapetaka bagi Para Pendusta",
      explanation: [
        "Celakalah pada Hari Kiamat bagi mereka yang mengingkari keberadaan Allah dan pengadilan ilahi.",
        "Menganggap Al-Qur'an sebagai dongeng kuno.",
        "Hati yang tertutup dari mengenali kebenaran karena dosa-dosa masa lalu.",
        "Hukuman yang tak terhindarkan menanti, terhalang dari melihat Tuhan.",
      ],
    },
    {
      id: 3,
      range: "17-28",
      text: "Pengakuan dan Pahala",
      explanation: [
        "Para penolak dihadapkan pada kenyataan yang mereka ingkari.",
        "Amal orang-orang saleh dicatat di 'Illiyyun, yang terdekat dengan Allah.",
        "Pahala di Surga: singgasana, anggur murni, aroma kesturi, air Tasnim.",
      ],
    },
    {
      id: 4,
      range: "29-36",
      text: "Ejekan dan Balasan",
      explanation: [
        "Para penjahat mengolok-olok orang beriman dalam kehidupan duniawi.",
        "Orang-orang beriman akan menertawakan orang-orang kafir pada Hari Kiamat.",
        "Balasan menanti orang-orang kafir atas perbuatan mereka.",
      ],
    },
  ],
};
