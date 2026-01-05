import type { Surah } from '../types';

export const AL_LAYL: Surah = {
  id: 92,
  name: "Al-Layl",
  orderInQuran: 92,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 21,
  overview: "Surah Mekkah ini menyoroti kemampuan Allah untuk menciptakan dan membimbing umat manusia, menekankan kapasitas mereka untuk memilih antara yang baik dan yang jahat serta konsekuensi yang diakibatkannya. Surah ini juga menekankan kepuasan orang-orang beriman dengan pahala mereka, sebuah tema yang berlanjut dalam surah berikutnya.",
  topicsCovered: ["Kemudahan bagi yang beriman", "Kesulitan bagi yang kafir"],
  ayahs: [
    {
      id: 1,
      range: "1-4",
      text: "Sumpah dan Keanekaragaman dalam Ciptaan",
      explanation: [
        "Sumpah demi malam, siang, dan Pencipta laki-laki dan perempuan menandakan berlalunya waktu dan keanekaragaman dalam ciptaan.",
        "Pengakuan atas beragamnya usaha dan perbuatan manusia mencerminkan tujuan dan sasaran yang berbeda dalam hidup.",
      ],
    },
    {
      id: 2,
      range: "5-10",
      text: "Kebajikan dan Kemudahan",
      explanation: [
        "Amal saleh, pemenuhan kewajiban kepada Allah, dan keimanan kepada Al-Husna memastikan jalan yang mulus menuju kebaikan.",
        "Allah menjanjikan kemudahan dan kemudahan bagi orang-orang yang saleh.",
        "Keserakahan, kekikiran, dan penolakan terhadap pahala terbaik mengarah pada jalan kejahatan.",
      ],
    },
    {
      id: 3,
      range: "11-21",
      text: "Kesia-siaan Harta dan Petunjuk Ilahi",
      explanation: [
        "Harta tidak ada gunanya dalam menghadapi kehancuran di Akhirat.",
        "Petunjuk semata-mata datang dari Allah, yang memegang otoritas atas kedua dunia.",
        "Peringatan keras tentang hukuman Neraka dikeluarkan bagi orang-orang celaka, sementara orang-orang saleh akan menemukan kesenangan di Surga.",
      ],
    },
  ],
};
