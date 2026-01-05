import type { Surah } from '../types';

export const AN_NAZIAT: Surah = {
  id: 79,
  name: "An-Nazi'at",
  orderInQuran: 79,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 46,
  overview: "Dalam Surah An-Nazi'at, kepastian Hari Kiamat digarisbawahi, menekankan bahwa waktunya hanya berada dalam pengetahuan Allah. Dengan menceritakan kembali kehancuran Firaun sebagai kisah peringatan, surah ini berfungsi sebagai peringatan bagi orang-orang kafir mengenai konsekuensi dari penolakan mereka terhadap petunjuk ilahi.",
  topicsCovered: ["Deskripsi hari kiamat", "Keraguan tentang kebangkitan", "Nikmat Allah bagi manusia"],
  ayahs: [
    {
      id: 1,
      range: "1-7",
      text: "Sumpah demi Malaikat dan Hari Kiamat",
      explanation: [
        "Sumpah demi berbagai kelompok malaikat menekankan peran mereka dalam tatanan kosmik.",
        "Deskripsi tentang gempa bumi dan kebangkitan menggambarkan kengerian Hari Kiamat.",
        "Peniupan sangkakala menandakan peristiwa seperti kematian dan kebangkitan.",
      ],
    },
    {
      id: 2,
      range: "8-14",
      text: "Ketakutan dan Kebangkitan",
      explanation: [
        "Orang-orang kafir mengalami ketakutan dan kecemasan pada Hari Kiamat.",
        "Beberapa orang menyatakan keraguan tentang kebangkitan tetapi dihadapkan pada kenyataannya.",
      ],
    },
    {
      id: 3,
      range: "15-26",
      text: "Kisah Nabi Musa (AS) dan Firaun",
      explanation: [
        "Kesombongan dan ketidaktaatan Firaun menyebabkan hukuman ilahi.",
        "Meskipun menyaksikan tanda-tanda ajaib, Firaun mengingkarinya dan menghadapi konsekuensi.",
        "Kisah ini berfungsi sebagai kisah peringatan terhadap kesombongan dan ketidaktaatan.",
      ],
    },
    {
      id: 4,
      range: "27-37",
      text: "Penciptaan dan Ketentuan Ilahi",
      explanation: [
        "Refleksi tentang ciptaan agung Allah dan berkah seperti air dan gunung.",
        "Peringatan tentang bencana yang akan datang pada Hari Pembalasan.",
      ],
    },
    {
      id: 5,
      range: "38-46",
      text: "Hasil Pilihan, Surga, dan Neraka",
      explanation: [
        "Takdir membedakan antara mereka yang takut kepada Allah dan mereka yang menuruti hawa nafsu duniawi.",
        "Surga menanti orang-orang saleh, sementara api Neraka menanti para pelanggar.",
        "Nabi Muhammad (ﷺ) diingatkan akan perannya sebagai pemberi peringatan, dan kedatangan Hari Kiamat yang tiba-tiba ditekankan.",
      ],
    },
  ],
};
