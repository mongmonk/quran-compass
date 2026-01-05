import type { Surah } from '../types';

export const AL_BAQARAH: Surah = {
  id: 2,
  name: 'Al-Baqarah',
  orderInQuran: 2,
  revealedIn: 'Madaniyah',
  numberOfAyat: 286,
  overview: "Surah Al-Baqarah, surah kedua, adalah surah terpanjang dalam Al-Qur'an dan dinamai berdasarkan kisah sapi yang dibahas dalam ayat 67-73. Surah ini menjelaskan kualitas orang-orang beriman, kafir, dan munafik, membahas kekuasaan Allah dalam penciptaan dan kebangkitan, menceritakan permusuhan Setan terhadap Adam (AS) dan keturunannya, serta merinci perjanjian Allah dengan Musa (AS) dan Bani Israil. Surah ini juga memberikan aturan tentang banyak aspek penting lainnya, termasuk hubungan perkawinan, wasiat, jihad, puasa, haji, sumbangan, utang, dan riba.",
  topicsCovered: [
    "Penciptaan", "Berkah", "Ujian Nabi Ibrahim (AS)", "Kiblat", "Puasa", "Jihad", "Haji", "Perceraian", "Riba", "Kontrak",
  ],
  ayahs: [
    // Bagian 1-7 (dari gambar pertama)
    {
      id: 1,
      range: "1-20",
      text: "Tiga Golongan Manusia",
      explanation: [
        "Memperkenalkan tiga golongan manusia berdasarkan keimanan mereka kepada Allah.",
        "Menggambarkan mereka yang mencari petunjuk, beriman kepada yang gaib, dan mengerjakan amal saleh.",
        "Menyoroti orang-orang kafir yang menyembunyikan petunjuk dan merendahkan orang beriman, serta berdusta kepada Allah dan diri mereka sendiri.",
      ],
    },
    {
      id: 2,
      range: "21-29",
      text: "Bukti Keimanan kepada Allah dan Rasul-Nya",
      explanation: [
        "Menekankan bukti keimanan kepada Allah dan Rasul-Nya.",
        "Menegaskan konsekuensi dari keimanan dan kekafiran, menguraikan takdir di Surga atau Neraka.",
        "Memberikan contoh dari ciptaan, sehingga tidak ada keraguan tentang kekuasaan Allah.",
      ],
    },
    {
      id: 3,
      range: "30-39",
      text: "Awal Mula Kemanusiaan dan Tanggung Jawab",
      explanation: [
        "Menjelajahi awal mula keberadaan manusia dan tanggung jawabnya untuk menjadi pengelola yang baik.",
        "Memperkenalkan Iblis sebagai musuh utama dan menekankan ego manusia.",
        "Menggambarkan dampak ilmu pengetahuan terhadap kedudukan dan perjuangan untuk mengikuti petunjuk.",
      ],
    },
    {
      id: 4,
      range: "40-50",
      text: "Perjanjian dengan Bani Israil",
      explanation: [
        "Mengalihkan fokus kepada Bani Israil, menyoroti perjanjian Allah dengan mereka.",
        "Menekankan perlunya keselamatan dari penindasan duniawi dan spiritual.",
      ],
    },
     {
      id: 5,
      range: "51-66",
      text: "Penindasan Spiritual di Kalangan Komunitas Beriman",
      explanation: [
        "Mengkaji penindasan spiritual di antara komunitas beriman, dimulai dari rasa tidak bersyukur.",
        "Menyoroti rasa tidak bersyukur atas nikmat ibadah, makanan, tanah, dan minuman, yang mengarah pada murka ilahi.",
        "Membahas rasa tidak bersyukur terhadap ritual suci seperti hari Sabat.",
      ],
    },
    {
      id: 6,
      range: "67-80",
      text: "Psikologi Rasa Tidak Bersyukur",
      explanation: [
        "Menjelajahi psikologi rasa tidak bersyukur di kalangan Bani Israil.",
        "Menyoroti pertanyaan mereka yang berlebihan untuk menghindari tanggung jawab agama.",
        "Menggambarkan bagaimana hati bisa menjadi tidak peka terhadap rasa takut dan kagum kepada Allah.",
        "Mengungkap distorsi wahyu yang disengaja, menyembunyikan informasi, dan mengandalkan imajinasi alih-alih kitab suci.",
      ],
    },
    {
      id: 7,
      range: "81-93",
      text: "Sifat Perjanjian dan Pelanggarannya",
      explanation: [
        "Menguraikan sifat perjanjian-perjanjian Allah.",
        "Menggambarkan contoh-contoh pelanggaran perjanjian, termasuk penggunaan hukum suci secara selektif, membunuh dan berbohong tentang para Rasul, menolak bantuan ilahi, dan mengabaikan wahyu saat ini.",
        "Memperingatkan terhadap ketidaktaatan meskipun mengetahui kebenaran dan mengklaim beriman.",
      ],
    },
    // Bagian 8-14 (dari gambar kedua)
    {
        id: 8,
        range: "94-101",
        text: "Karakteristik Pelanggar Perjanjian",
        explanation: [
          "Mengkaji karakteristik orang-orang yang cenderung melanggar perjanjian.",
          "Mengidentifikasi individu yang memprioritaskan kehidupan duniawi di atas akhirat, meskipun ada Rasul dan malaikat tertentu, serta memiliki hukum suci yang mereka ketahui.",
        ],
    },
    {
        id: 9,
        range: "102-123",
        text: "Menabur Perselisihan dan Kedengkian",
        explanation: [
          "Membongkar kedengkian di hati orang-orang dari keyakinan lain.",
          "Merinci bagaimana perbedaan kata dan wahyu digunakan untuk menabur perselisihan dalam keluarga dan komunitas.",
          "Konsekuensinya mencakup ketidakpastian dalam iman dan tujuan akhir untuk meninggalkan Islam.",
        ],
    },
    {
        id: 10,
        range: "124-141",
        text: "Kepemimpinan Agama yang Sejati - Kisah Nabi Ibrahim (AS)",
        explanation: [
          "Menggambarkan cetak biru yang benar untuk kepemimpinan kenabian melalui kisah Ibrahim.",
          "Menyoroti tindakan Nabi Ibrahim (AS), termasuk membangun rumah doa, memastikan keamanan dan keberlanjutan bagi masyarakat, mempromosikan partisipasi antargenerasi dalam ibadah, dan mendirikan pendidikan agama serta penyucian spiritual.",
        ],
    },
    {
        id: 11,
        range: "142-162",
        text: "Transisi dari Sejarah Kuno ke Nabi Muhammad (ﷺ)",
        explanation: [
          "Beralih dari sejarah kuno ke masa hidup Nabi Muhammad (ﷺ).",
          "Merinci perubahan kiblat dari Yerusalem ke Ka'bah, menanggapi keberatan kaum 'munafik'.",
          "Menyoroti pentingnya kiblat dalam menjaga arah spiritual.",
          "Mengklarifikasi peran al-Safa dan al-Marwah dalam ritus Haji dan Umrah.",
        ],
    },
    {
        id: 12,
        range: "163-176",
        text: "Mengikuti Agama Secara Buta dan Menyembunyikan Pengetahuan",
        explanation: [
          "Memperingatkan agar tidak mengikuti agama secara buta, yang memungkinkan orang dengan sengaja kekurangan pengetahuan, yang mengarah ke Neraka.",
          "Menyatakan Allah sebagai satu-satunya Pencipta dan menekankan ibadah hanya kepada-Nya untuk menghindari kesesatan.",
          "Menggambarkan perjuangan di berbagai bidang seperti batasan diet dan memperingatkan agar tidak mengikuti mereka yang jauh dari petunjuk Allah.",
        ],
    },
    {
        id: 13,
        range: "177-203",
        text: "Kebenaran di Luar Shalat",
        explanation: [
          "Membangun landasan shalat dan Otoritas Ilahi dalam segala urusan.",
          "Memperluas konsep kebenaran di luar shalat untuk mencakup komunitas, keadilan, warisan, puasa di bulan Ramadhan, berburu, amal, penampakan hilal, menghindari kekayaan haram, moderasi, berperang, dan menunaikan Haji.",
        ],
    },
    {
        id: 14,
        range: "204-222",
        text: "Kebenaran dalam Hubungan Antarmanusia",
        explanation: [
          "Menjelajahi tema kebenaran dalam hubungan antarmanusia.",
          "Mengingatkan nasib Bani Israil karena hukum suci, membunuh dan berbohong tentang para Rasul, menolak bantuan ilahi, dan mengabaikan wahyu saat ini.",
          "Menangani pertanyaan spesifik tentang amal, berperang selama bulan-bulan suci, perjudian, alkohol, memperlakukan anak yatim, dan hukum menstruasi.",
        ],
    },
    // Bagian 15-21 (dari gambar ketiga)
     {
      id: 15,
      range: "223-242",
      text: "Perluasan Topik Menstruasi",
      explanation: [
        "Meluas pada pembahasan tentang dampak menstruasi pada pernikahan dan perceraian.",
        "Merinci perlakuan terhadap wanita dalam pernikahan, perceraian, dan peraturan hak asuh anak.",
        "Pedoman khusus bagi janda mengenai masa tunggu (Iddah).",
        "Mencakup pedoman untuk menyusui dan dukungan anak.",
      ],
    },
    {
      id: 16,
      range: "243-252",
      text: "Narasi Interaksi Manusia dengan Para Nabi (AS)",
      explanation: [
        "Beralih ke narasi yang menggambarkan bagaimana manusia berinteraksi dengan para nabi.",
        "Menyampaikan kisah bernubuat dari ketetapan Allah dan menghadapi konsekuensinya.",
        "Menggambarkan Bani Israil mencari pertolongan dari Allah dan tanggapan mereka kepada Raja Talut.",
      ],
    },
    {
      id: 17,
      range: "253-260",
      text: "Kesatuan Para Rasul dan Penerimaan Hirarki",
      explanation: [
        "Melanjutkan tema para Rasul, menekankan bagaimana mereka dipilih dan hirarkinya berdasarkan karunia ilahi.",
        "Menyoroti bahwa para Rasul difasilitasi untuk tunduk pada Petunjuk Ilahi, namun ada rintangan yang menghalangi ketundukan kepada Nabi Muhammad (ﷺ).",
        "Menekankan kekuatan dan bimbingan tertinggi Allah, diakhiri dengan Ayat Kursi untuk menegaskan supremasi-Nya.",
      ],
    },
    {
      id: 18,
      range: "261-262",
      text: "Kekayaan dan Dampaknya pada Keimanan",
      explanation: [
        "Beralih ke diskusi tentang kekayaan, menegaskan kembali bagaimana orang dapat mengkompromikan agama mereka demi keuntungan materi.",
        "Menyoroti bahwa hujan seringkali dihasilkan dari kegagalan memahami tujuan Allah atas kekayaan.",
        "Menekankan bahwa Allah yang menentukan pemberian dan makna kekayaan.",
      ],
    },
     {
      id: 19,
      range: "263-274",
      text: "Amal dan Berkah",
      explanation: [
        "Membahas pemberian amal sebagai sarana meningkatkan kekayaan, menekankan niat tulus untuk berkah.",
        "Memperingatkan agar tidak memberi untuk tujuan pamer atau karena takut miskin, menganggap pemberian seperti itu tidak memiliki keanggunan.",
        "Menguraikan cara terbaik untuk memberi amal demi peningkatan spiritual dan mengidentifikasi penerima yang paling diberkahi.",
      ],
    },
    {
      id: 20,
      range: "275-283",
      text: "Riba dan Dampak Spiritualnya",
      explanation: [
        "Riba digambarkan sebagai metode terbesar untuk menghancurkan kekayaan dan semangat.",
        "Menyoroti pentingnya Petunjuk Ilahi untuk menghindari keterikatan finansial.",
        "Menekankan pentingnya dokumentasi yang tepat, kesaksian, dan perlindungan bagi juru tulis dan saksi, serta pilihan jaminan.",
      ],
    },
    {
      id: 21,
      range: "284-286",
      text: "Penutup Surah Al-Baqarah",
      explanation: [
        "Sebuah kesimpulan dari Surah Al-Baqarah, merangkum tema-tema komunitas yang adil, hukum yang disampaikan, dan penjelasan keyakinan yang benar.",
        "Mengingatkan akan pertanggungjawaban dan menggambarkan permohonan untuk kemudahan dan kasih sayang dalam kewajiban agama kepada Allah.",
      ],
    },
  ],
};