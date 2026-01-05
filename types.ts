export interface Ayah {
  id: number;
  range: string;
  text: string;
  explanation: string[];
}

export interface Surah {
  id: number;
  name: string;
  orderInQuran: number;
  revealedIn: 'Makiyah' | 'Madaniyah';
  numberOfAyat: number;
  overview: string;
  topicsCovered: string[];
  ayahs: Ayah[];
}
