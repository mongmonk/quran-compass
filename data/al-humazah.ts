import type { Surah } from '../types';

export const AL_HUMAZAH: Surah = {
  id: 104,
  name: "Al-Humazah",
  orderInQuran: 104,
  // FIX: Corrected the value of `revealedIn` to 'Makiyah' to match the type definition.
  revealedIn: 'Makiyah',
  numberOfAyat: 9,
  overview: "Surah Mekkah ini mengutuk mereka yang melakukan fitnah dan menahan nikmat yang dianugerahkan oleh Allah. Hukuman mereka di Neraka diibaratkan dengan kemudahan Allah dapat menghancurkan kekuatan jahat yang disebutkan dalam surah berikutnya.",
  topicsCovered: ["Para pengumpat dan orang kikir akan dimasukkan ke dalam tiang-tiang api"],
  ayahs: [
    {
      id: 1,
      range: "1-3",
      text: "Peringatan Terhadap Fitnah dan Materialisme",
      explanation: [
        "Peringatan keras terhadap fitnah dan ghibah, menekankan konsekuensi beratnya.",
        "Individu digambarkan sebagai terobsesi dengan menumpuk harta, memprioritaskan harta benda materi di atas pertumbuhan spiritual.",
        "Rasa aman palsu mereka dalam kekayaan mencerminkan prioritas dan delusi mereka yang salah tempat.",
      ],
    },
    {
      id: 2,
      range: "4-6",
      text: "Hukuman Berat dan Api Neraka",
      explanation: [
        "Meskipun harapan mereka, mereka akan menghadapi hukuman berat di Neraka.",
        "Beratnya hukuman yang tak terduga ditekankan, mempertanyakan apa yang bisa secara memadai menyampaikan sifat aslinya.",
        "Api neraka, yang dinyalakan oleh Allah sendiri, digambarkan sebagai api yang dahsyat dan menakutkan.",
      ],
    },
    {
      id: 3,
      range: "7-9",
      text: "Siksaan Dahsyat dan Hukuman Abadi",
      explanation: [
        "Intensitas api digambarkan melompati hati mereka, melambangkan sifatnya yang luar biasa.",
        "Mereka akan ditutup dan dikelilingi oleh api ini, tanpa ada jalan keluar atau jeda.",
        "Gambaran api yang membentang di tiang-tiang memperkuat gagasan penderitaan abadi mereka di Neraka.",
      ],
    },
  ],
};
