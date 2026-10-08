/**
 * DATA PEMBELAJARAN JAGO NGIKLAN BANYUMAS
 * Berbasis Pendekatan Culturally Responsive Teaching (CRT) & Project-Based Learning (PjBL)
 * Bahasa Indonesia Kelas 8 SMP - Fase D Kurikulum Merdeka
 * Didesain mudah disunting oleh guru tanpa mengubah logika aplikasi.
 */

const APP_DATA = {
  info: {
    title: "Jago Ngiklan Banyumas",
    subtitle: "Petualangan Slogan, Iklan, & Poster",
    target: "Bahasa Indonesia Kelas 8 SMP (Fase D)",
    curriculum: "Kurikulum Merdeka",
    theme: "Kearifan Lokal Banyumas (Culturally Responsive Teaching)",
    model: "Project Based Learning (PjBL)",
    developer: "Mahasiswa PPG Calon Guru / Guru Pamong",
    version: "1.0.0"
  },

  // Kamus Sapaan & Kata Ngapak Banyumasan (Untuk Tooltip Interaktif & Pemahaman Budaya)
  ngapakGlossary: {
    "inyong": {
      word: "Inyong",
      arti: "Saya / Aku",
      contoh: "Jeneng inyong Kang Mendhoan! (Nama saya Kang Mendhoan!)",
      catatan: "Kata ganti orang pertama khas Banyumas dan pesisir barat Jawa Tengah."
    },
    "rika": {
      word: "Rika",
      arti: "Kamu / Anda",
      contoh: "Kepriwe kabare rika? (Bagaimana kabar kamu?)",
      catatan: "Sapaan akrab namun sopan kepada lawan bicara dalam bahasa Banyumasan."
    },
    "kepriwe": {
      word: "Kepriwe",
      arti: "Bagaimana / Apa kabar",
      contoh: "Kepriwe, wis siap sinau? (Bagaimana, sudah siap belajar?)",
      catatan: "Kata tanya khas untuk menanyakan keadaan atau cara."
    },
    "kencot": {
      word: "Kencot",
      arti: "Lapar",
      contoh: "Ayo kencot ora? Mayuh madang mendoan! (Ayo lapar tidak? Mari makan mendoan!)",
      catatan: "Kosa kata khas Banyumas untuk rasa lapar perut."
    },
    "sing semangat": {
      word: "Sing Semangat",
      arti: "Yang semangat ya!",
      contoh: "Ayo kanca-kanca, sing semangat nyinauni iklan!",
      catatan: "Ungkapan pemberi motivasi."
    },
    "wis bener": {
      word: "Wis Bener",
      arti: "Sudah benar / Tepat sekali!",
      contoh: "Mantep, wangsulanmu wis bener!",
      catatan: "Pujian afirmasi positif saat siswa menjawab dengan tepat."
    },
    "mantep": {
      word: "Mantep",
      arti: "Hebat / Keren / Bagus sekali",
      contoh: "Mantep temen slogan gaweanmu!",
      catatan: "Pujian atas karya atau usaha yang memuaskan."
    },
    "mayuh": {
      word: "Mayuh",
      arti: "Ayo / Mari bersama-sama",
      contoh: "Mayuh sinau bareng Kang Mendhoan!",
      catatan: "Ajakan gotong royong dan kebersamaan khas 'Banyumasan cablaka'."
    },
    "madang": {
      word: "Madang",
      arti: "Makan",
      contoh: "Bubar sinau, gagean madang getuk goreng!",
      catatan: "Istilah makan dalam bahasa Banyumas sehari-hari."
    },
    "gagean": {
      word: "Gagean",
      arti: "Ayo lekas / Segera",
      contoh: "Gagean rampungna misine!",
      catatan: "Kata anjuran untuk bersegera."
    }
  },

  // Khazanah Budaya & Potensi Banyumas untuk Konteks Pembelajaran CRT
  banyumasCulture: [
    {
      id: "mendoan",
      name: "Tempe Mendoan",
      category: "Kuliner Khas",
      tagline: "Anget, Gurih, Cocol Sambel Kecap Pedes!",
      desc: "Tempe kedelai berbalut adonan tepung berbumbu ketumbar dan daun bawang, digoreng setengah matang (mendo). Diakui sebagai Warisan Budaya Takbenda (WBTb) Indonesia dari Banyumas.",
      icon: "🥟",
      color: "#E5A93C"
    },
    {
      id: "soto-sokaraja",
      name: "Soto Sokaraja",
      category: "Kuliner Khas",
      tagline: "Kuah Sambel Kacang Legit, Nikmat Ketupat Asli!",
      desc: "Soto khas Sokaraja yang unik dengan racikan bumbu kacang lembut, disajikan bersama potongan ketupat empuk dan taburan kerupuk canthir merah-putih.",
      icon: "🍲",
      color: "#D97706"
    },
    {
      id: "getuk-goreng",
      name: "Getuk Goreng Sokaraja",
      category: "Kuliner & Oleh-oleh",
      tagline: "Manis Legit Gula Kelapa, Awet Hangatnya!",
      desc: "Kudapan manis berbahan singkong pilihan dan gula kelapa alami asli Sokaraja yang digoreng hingga legit dan renyah di luar, empuk di dalam.",
      icon: "🍠",
      color: "#B45309"
    },
    {
      id: "batik-banyumasan",
      name: "Batik Banyumasan",
      category: "Seni Kriya & Tekstil",
      tagline: "Goresan Lugas Jahe Puger, Warna Soga Luhur!",
      desc: "Batik motif khas Banyumas seperti Jahe Puger, Lumbon, dan Pring Sedapur dengan warna dominan cokelat soga hangat yang mencerminkan watak cablaka (jujur, apa adanya, dan teguh).",
      icon: "🎨",
      color: "#5C3A21"
    },
    {
      id: "lengger-calung",
      name: "Lengger & Calung",
      category: "Seni Pertunjukan",
      tagline: "Alunan Bambu Rancak, Goyang Semarak Banyumasan!",
      desc: "Perpaduan tari tradisional Lengger yang lincah bersahaja dengan iringan musik bambu calung wulung yang rancak, gembira, dan berakar kuat di pedesaan Banyumas.",
      icon: "🎋",
      color: "#166534"
    },
    {
      id: "baturraden",
      name: "Baturraden & Gunung Slamet",
      category: "Wisata Alam",
      tagline: "Hawa Sejuk Lereng Slamet, Panorama Alami Banyumas!",
      desc: "Destinasi wisata alam di kaki Gunung Slamet dengan air terjun alami, sumber air panas belerang, hutan pinus, dan udara segar pegunungan.",
      icon: "⛰️",
      color: "#2563EB"
    }
  ],

  // Tujuan Pembelajaran & Alur PjBL (Untuk Guru & Tampilan Ringkasan Siswa)
  pedagogy: {
    tujuanPembelajaran: [
      {
        no: 1,
        teks: "Menjelaskan pengertian, tujuan komunikasi, serta karakteristik unik slogan, iklan, dan poster.",
        fokus: "Konseptual"
      },
      {
        no: 2,
        teks: "Mengidentifikasi kaidah kebahasaan (kalimat persuasif, kalimat imperatif, diksi puitis/menarik, rima, dan majas) pada media promosi.",
        fokus: "Analitis"
      },
      {
        no: 3,
        teks: "Menganalisis kelebihan, kelemahan, dan daya tarik sebuah iklan atau poster secara kritis berbasis konteks kearifan lokal.",
        fokus: "Kritis"
      },
      {
        no: 4,
        teks: "Merancang karya slogan dan poster persuasif bernuansa kearifan lokal Banyumas menggunakan prinsip tata letak dan bahasa yang menarik.",
        fokus: "Kreatif & Aplikatif (PjBL)"
      }
    ],
    alurPjBL: [
      { tahap: "1. Menentukan Pertanyaan Mendasar", aksi: "Bagaimana cara mempromosikan produk/wisata khas Banyumas agar diminati generasi muda?" },
      { tahap: "2. Mendesain Perencanaan Proyek", aksi: "Memilih objek lokal, menganalisis target audiens, dan menentukan jenis media (slogan/poster)." },
      { tahap: "3. Menyusun Jadwal & Riset Singkat", aksi: "Menemukan keunikan produk (USP), menyusun kata kunci pemantik, dan membuat kerangka kalimat." },
      { tahap: "4. Memonitor & Mengembangkan Karya", aksi: "Membuat slogan persuasif dan mendesain poster interaktif di Canvas Poster Maker." },
      { tahap: "5. Menguji Hasil & Menilai Karya", aksi: "Mengisi rubrik penilaian diri dan teman sebaya berbasis 4 kriteria asesmen." },
      { tahap: "6. Mengevaluasi Pengalaman (Refleksi)", aksi: "Menuliskan refleksi belajar, mengunduh karya PNG, dan mencetak sertifikat petualangan." }
    ],
    prinsipCRT: [
      {
        prinsip: "Validasi Budaya Lokal",
        deskripsi: "Siswa melihat kuliner, kesenian, dan tempat wisata daerahnya sendiri sebagai teks bernilai tinggi, bukan sekadar pelengkap."
      },
      {
        prinsip: "Pemberdayaan Identitas (Agentic)",
        deskripsi: "Siswa berperan aktif sebagai 'Duta Promosi Banyumas' yang membantu mengangkat citra UMKM dan budaya daerahnya."
      },
      {
        prinsip: "Penerjemahan Kontekstual",
        deskripsi: "Kaidah kebahasaan abstrak dihubungkan langsung dengan sensasi konkret (gurihnya mendoan, hangatnya soto, semaraknya calung)."
      }
    ]
  },

  // 5 Misi Petualangan Siswa
  missions: [
    {
      id: "misi-1",
      number: 1,
      title: "Kenali",
      subtitle: "Misteri Tiga Sahabat Promosi",
      desc: "Pahami perbedaan hakiki antara Slogan, Iklan, dan Poster melalui kartu interaktif & contoh khas Banyumas.",
      badge: "Detektif Pemula",
      icon: "🔍",
      xpReward: 100,
      status: "unlocked", // Misi 1 siap dibuka
      route: "misi1"
    },
    {
      id: "misi-2",
      number: 2,
      title: "Bedah",
      subtitle: "Laboratorium Bahasa Promosi",
      desc: "Uji kejelianmu mengklik kalimat persuasif, imperatif, rima, dan majas pada galeri iklan UMKM Banyumas.",
      badge: "Pembedah Kata",
      icon: "🔬",
      xpReward: 150,
      status: "locked",
      route: "misi2"
    },
    {
      id: "misi-3",
      number: 3,
      title: "Latihan",
      subtitle: "Arena Kuis & Tantangan Seru",
      desc: "Susun kata slogan, taklukkan kuis 10 soal acak, uji deteksi Iklan Jujur vs Hoaks, dan cocokkan cirinya!",
      badge: "Pendekar Promosi",
      icon: "🎯",
      xpReward: 200,
      status: "locked",
      route: "misi3"
    },
    {
      id: "misi-4",
      number: 4,
      title: "Cipta",
      subtitle: "Studio Poster & Slogan UMKM",
      desc: "Gunakan Slogan Generator Pemantik dan Poster Maker Canvas untuk merancang media promosi Banyumas karyamu sendiri!",
      badge: "Kreator Banyumasan",
      icon: "🎨",
      xpReward: 250,
      status: "locked",
      route: "misi4"
    },
    {
      id: "misi-5",
      number: 5,
      title: "Refleksi",
      subtitle: "Asesmen & Sertifikat Duta",
      desc: "Isi rubrik penilaian diri & teman, tuliskan kesan belajarmu, dan unduh Sertifikat Duta Promosi Banyumas!",
      badge: "Duta Promosi Banyumas",
      icon: "🏆",
      xpReward: 100,
      status: "locked",
      route: "misi5"
    }
  ],

  // Tingkatan Gelar Petualang berdasarkan Total XP
  levels: [
    { minXp: 0, title: "Santri Sinau Banyumas", rank: "Level 1", icon: "🌱" },
    { minXp: 100, title: "Sahabat Kang Mendhoan", rank: "Level 2", icon: "🥟" },
    { minXp: 250, title: "Jawara Kata Sokaraja", rank: "Level 3", icon: "✨" },
    { minXp: 450, title: "Juragan Iklan Serayu", rank: "Level 4", icon: "🚀" },
    { minXp: 700, title: "Duta Promosi Budaya Banyumas", rank: "Level 5", icon: "👑" }
  ],

  // =========================================================================
  // DATA MISI 1 – KENALI: MATERI LENGKAP BAB 2 BAHASA INDONESIA KELAS 8
  // =========================================================================
  misi1: {
    overview: {
      title: "Misi 1: Kenali Tiga Serangkai Promosi",
      subtitle: "Pahami Hakikat Slogan, Iklan, dan Poster Lewat Kacamata Budaya Banyumas",
      intro: "Sugeng rawuh neng Misi 1! Sadurunge gawe iklan sing kondhang, rika kudu mangerteni bedane Slogan, Iklan, lan Poster. Katelu media kiye nduwe watak, tujuan, lan struktur dhewek-dhewek!"
    },
    
    // Tiga Konsep Utama
    concepts: [
      {
        id: "slogan",
        name: "Slogan",
        tag: "Motto & Semboyan",
        icon: "🗣️",
        color: "#D97706",
        pengertian: "Slogan adalah kalimat pendek, padat, menarik, dan mudah diingat yang digunakan untuk menyampaikan visi, prinsip, atau motivasi tertentu.",
        tujuan: "Membangun kesadaran publik, menanamkan semangat, serta mengingatkan masyarakat akan suatu nilai moral atau komitmen produk/komunitas.",
        ciri: [
          "Berupa kalimat ringkas, frasa pendek, atau klausa tunggal.",
          "Mengutamakan kepadatan makna dan keindahan bunyi (rima/aliterasi).",
          "Mudah dihafal dan menempel lama di ingatan pendengar.",
          "Tidak wajib disertai gambar atau visual pelengkap."
        ],
        struktur: [
          "Kata Kunci / Frasa Utama (Inti pesan yang ingin ditekankan)",
          "Kata Penjelas / Penegas Rima (Penguat bunyi dan makna)"
        ],
        contohBanyumas: {
          teks: "Anget Mendoane, Guyub Wargane!",
          makna: "Slogan ini mengaitkan kehangatan tempe mendoan dengan nilai kerukunan gotong-royong warga Banyumas yang guyub dan bersahaja."
        }
      },
      {
        id: "iklan",
        name: "Iklan",
        tag: "Pesan Bujukan Multidimensi",
        icon: "📢",
        color: "#2563EB",
        pengertian: "Iklan adalah teks persuasif yang memadukan gambar, teks, gerak, dan suara untuk mempromosikan barang, jasa, atau gagasan kepada khalayak ramai.",
        tujuan: "Membujuk, memengaruhi, dan meyakinkan konsumen agar tertarik dan mengambil keputusan untuk membeli barang atau menggunakan jasa yang ditawarkan.",
        ciri: [
          "Memadukan berbagai unsur: kata-kata, gambar bergerak/statis, suara, dan tipografi.",
          "Bersifat komersial (menjual produk) atau nonkomersial (Iklan Layanan Masyarakat).",
          "Memuat informasi keunggulan (USP - Unique Selling Proposition).",
          "Mencantumkan ajakan bertindak (Call to Action) dan kontak pemesanan."
        ],
        struktur: [
          "1. Judul (Headline): Bagian penarik atensi di bagian atas iklan.",
          "2. Nama Produk / Jasa: Identitas yang sedang dipromosikan.",
          "3. Penjelasan (Body Copy): Uraian keunggulan, bahan, dan manfaat produk.",
          "4. Kontak / Ajakan Bertindak: Alamat toko, WhatsApp, tautan medsos."
        ],
        contohBanyumas: {
          teks: "Soto Sokaraja Warisan Eyang: Kuah sambal kacang lembut, ketupat pulen gurih! Pesan di Jl. Suparjo No. 10 atau WA 0812-BANYUMAS.",
          makna: "Memadukan nama produk kuliner khas Banyumas, penjelasan keunggulan cita rasa lokal, dan saluran pembelian yang jelas."
        }
      },
      {
        id: "poster",
        name: "Poster",
        tag: "Plakat Visual Ruang Publik",
        icon: "🖼️",
        color: "#166534",
        pengertian: "Poster adalah lembaran plakat berisi paduan gambar ilustrasi mencolok dan kata-kata ringkas yang dipasang di tempat-tempat umum yang strategis.",
        tujuan: "Menyampaikan pengumuman, ajakan, peringatan, atau seruan penting dengan cepat kepada masyarakat yang melintas di ruang publik.",
        ciri: [
          "Mengutamakan kekuatan visual: ilustrasi berukuran besar dan warna mencolok.",
          "Kata-katanya sangat ringkas, padat, dan terbaca jelas dari jarak pandang 2–3 meter.",
          "Tata letak (layout) seimbang antara gambar dan teks.",
          "Dipasang pada dinding fasilitas umum, halte, alun-alun, atau mading sekolah."
        ],
        struktur: [
          "1. Judul Utama (Mencolok dan berukuran paling besar)",
          "2. Gambar Ilustrasi Utama (Fokus mata audiens)",
          "3. Slogan / Kalimat Seruan (Persuasif dan singkat)",
          "4. Keterangan Waktu/Tempat/Penyelenggara (Khusus poster acara/kegiatan)"
        ],
        contohBanyumas: {
          teks: "GELAR TARI LENGGER BANYUMAS 2026: 100 Penari Rancak di Alun-Alun Purwokerto. 15 November 2026. Gratis nggo kabeh warga!",
          makna: "Poster festival seni tradisi dengan fokus visual gerak tari lengger dan informasi jadwal acara yang tegas."
        }
      }
    ],

    // Matriks Perbandingan Tiga Serangkai
    comparisonMatrix: [
      { unsur: "Kata-kata (Teks)", slogan: "Sangat Kuat (Inti)", iklan: "Lengkap & Persuasif", poster: "Ringkas & Padat" },
      { unsur: "Gambar / Visual", slogan: "Tidak Wajib (Opsional)", iklan: "Sangat Penting", poster: "Sangat Menonjol (Fokus Utama)" },
      { unsur: "Suara (Audio)", slogan: "Hanya jika dilisankan", iklan: "Ada (Radio / Video / TV)", poster: "Tidak Ada (Visual Saja)" },
      { unsur: "Gerak (Animasi/Video)", slogan: "Tidak Ada", iklan: "Bisa Ada (Iklan Video/Web)", poster: "Tidak Ada (Statis)" },
      { unsur: "Media Pemasangan", slogan: "Bisa mandiri / disematkan", iklan: "Medsos, Koran, TV, Radio", poster: "Dinding, Tiang, Papan Mading Publik" }
    ],

    // 5 Kaidah Kebahasaan Teks Iklan/Slogan/Poster
    linguisticRules: [
      {
        id: "persuasif",
        title: "1. Kalimat Persuasif",
        badge: "Bujukan",
        color: "#2563EB",
        pengertian: "Kalimat yang bertujuan meyakinkan, membujuk, atau memengaruhi pembaca agar percaya dan tergerak mengikuti saran penulis.",
        contoh: "Rasakan kelembutan getuk goreng asli Sokaraja yang meleleh manis di lidah rika!"
      },
      {
        id: "imperatif",
        title: "2. Kalimat Imperatif",
        badge: "Ajakan / Perintah",
        color: "#DC2626",
        pengertian: "Kalimat perintah, ajakan, atau permohonan yang menuntut respon tindakan nyata dari pembaca (sering memakai kata 'ayo', 'mari', partikel '-lah').",
        contoh: "Mayuh borong batik motif jahe puger dina kiye juga! / Kunjungi stand kami di Alun-Alun!"
      },
      {
        id: "diksi",
        title: "3. Diksi Menarik & Puitis",
        badge: "Pilihan Kata",
        color: "#D97706",
        pengertian: "Pemilihan kata yang segar, berkonotasi positif, sensoris (menggugah panca indra), dan khas kearifan lokal.",
        contoh: "Gurih hangat meresap, aroma daun pisang alami, renyah tanpa tara."
      },
      {
        id: "rima",
        title: "4. Rima & Keindahan Irama",
        badge: "Harmoni Bunyi",
        color: "#7C3AED",
        pengertian: "Pengulangan bunyi vokal atau konsonan pada akhir kata/frasa yang menjadikan slogan atau judul mudah dinyanyikan dan dihafal.",
        contoh: "Mendoan hangat, seduluran makin erat! (Rima -at / -at)"
      },
      {
        id: "majas",
        title: "5. Majas (Gaya Bahasa)",
        badge: "Gaya Kiasan",
        color: "#059669",
        pengertian: "Penggunaan ungkapan kiasan seperti personifikasi (benda bertingkah seperti manusia) atau hiperbola (melebih-lebihkan) untuk efek estetis.",
        contoh: "Air sejuk Curug Cipendok berbisik memeluk jiwamu yang lelah. (Majas personifikasi)"
      }
    ],

    // Flip Cards Pembelajaran Mandiri
    flipCards: [
      {
        frontTitle: "Slogan vs Semboyan",
        frontDesc: "Apakah slogan sama persis dengan semboyan?",
        backTitle: "Saling Berkaitan!",
        backDesc: "Slogan sering disebut moto atau semboyan. Bedanya, semboyan umumnya mencerminkan ideologi hidup abadi (misal: Bhinneka Tunggal Ika), sedangkan slogan sering dipakai juga untuk kampanye program atau produk spesifik."
      },
      {
        frontTitle: "Iklan Komersial vs Layanan Masyarakat",
        frontDesc: "Apa perbedaan paling mendasar di antara keduanya?",
        backTitle: "Tujuan & Keuntungan!",
        backDesc: "Iklan Komersial bertujuan mencari keuntungan finansial (menjual mendoan, batik). Iklan Layanan Masyarakat (ILM) bertujuan sosial nirlaba (misal: ajakan membuang sampah di Sungai Serayu, hemat air bersih lereng Slamet)."
      },
      {
        frontTitle: "Rahasia Kekuatan Poster",
        frontDesc: "Mengapa teks dalam poster tidak boleh terlalu panjang?",
        backTitle: "Waktu Baca Sangat Cepat!",
        backDesc: "Orang yang melintasi poster di jalan hanya punya waktu 3–5 detik untuk menangkap pesan. Jika teks terlalu penuh seperti paragraf buku, pembaca akan melewatkannya!"
      },
      {
        frontTitle: "Bahasa Persuasif vs Imperatif",
        frontDesc: "Bagaimana cara membedakannya dengan cepat?",
        backTitle: "Bujukan vs Instruksi!",
        backDesc: "Kalimat persuasif fokus 'meyakinkan hati' dengan alasan/manfaat indah. Kalimat imperatif fokus 'menginstruksikan langkah' aksi (Ayo datang, hubungi kami, daftarkan diri!). Keduanya sering dipadukan!"
      }
    ],

    // Mini-Cek Pemahaman (3 Soal Interaktif Misi 1)
    miniQuiz: [
      {
        id: "mc-1",
        question: "Perhatikan teks promosi khas Banyumas berikut:\n'Anget Mendoane, Guyub Wargane!'\nBerdasarkan karakteristiknya, teks singkat yang mengutamakan kepadatan makna dan rima bunyi di atas merupakan...",
        options: [
          { text: "A. Slogan", isCorrect: true, feedback: "Bener pisan! Teks tersebut pendek, padat makna, berima harmonis (-e), dan berfungsi sebagai semboyan penyemangat." },
          { text: "B. Iklan Baris", isCorrect: false, feedback: "Kurang tepat. Iklan baris memuat singkatan spesifik harga dan kontak penjualan." },
          { text: "C. Poster Acara", isCorrect: false, feedback: "Belum tepat. Poster mengutamakan gambar ukuran besar dan informasi tempat/waktu." },
          { text: "D. Surat Pembaca", isCorrect: false, feedback: "Keliru. Surat pembaca berisi opini panjang pembaca di media massa." }
        ]
      },
      {
        id: "mc-2",
        question: "Unsur manakah yang PALING dominan dan menjadi daya tarik utama pada media POSTER?",
        options: [
          { text: "A. Narasi paragraf panjang yang mendetail", isCorrect: false, feedback: "Kurang tepat. Paragraf panjang justru membuat poster sulit dibaca cepat di ruang publik." },
          { text: "B. Kekuatan gambar ilustrasi berukuran besar dan warna mencolok", isCorrect: true, feedback: "Wis bener! Poster mengandalkan daya pikat visual yang kuat agar memikat mata orang yang melintas dari kejauhan." },
          { text: "C. Efek suara latar musik calung", isCorrect: false, feedback: "Keliru. Poster adalah media cetak/visual statis yang tidak menghasilkan audio fisik." },
          { text: "D. Video gerak tari penari lengger", isCorrect: false, feedback: "Belum tepat. Gerak video merupakan ciri khas iklan audio-visual digital." }
        ]
      },
      {
        id: "mc-3",
        question: "Kalimat berikut yang termasuk contoh KALIMAT IMPERATIF dalam iklan wisata Banyumas adalah...",
        options: [
          { text: "A. Udara di lereng Gunung Slamet terasa sejuk dan damai.", isCorrect: false, feedback: "Ini adalah kalimat deklaratif (pernyataan fakta/keadaan)." },
          { text: "B. Siapapun pasti terpesona melihat indahnya riam Curug Cipendok.", isCorrect: false, feedback: "Ini adalah kalimat persuasif deskriptif." },
          { text: "C. Kunjungi Baturraden akhir pekan ini dan rasakan kesegarannya!", isCorrect: true, feedback: "Mantep! Kata 'Kunjungi' dan 'rasakan' adalah kata kerja imperatif yang meminta tindakan nyata." },
          { text: "D. Wisata alam Banyumas merupakan anugerah yang patut disyukuri.", isCorrect: false, feedback: "Ini adalah kalimat pernyataan reflektif." }
        ]
      }
    ]
  },

  // =========================================================================
  // DATA MISI 2 – BEDAH: LABORATORIUM KAIDAH KEBAHASAAN BANYUMAS
  // (Minimal 4 Slogan, 3 Iklan, 3 Poster dengan Fitur Klik-untuk-Menandai)
  // =========================================================================
  misi2: {
    overview: {
      title: "Misi 2: Bedah Kaidah Bahasa Promosi",
      subtitle: "Jadilah Detektif Bahasa: Klik Bagian Teks untuk Menemukan Kaidah Kebahasaannya!",
      intro: "Sugeng rawuh neng Laboratorium Bahasa! Neng kene ana 10 karya promosi fiktif UMKM lan potensi Banyumas. Klik saben ukara (kalimat) utawa tembung kanggo mbukak rahasia kaidah kebahasaane!"
    },

    // 10 Contoh Fiktif Banyumas (4 Slogan, 3 Iklan, 3 Poster)
    examples: [
      // --- SLOGAN 1 ---
      {
        id: "slogan-1",
        type: "slogan",
        title: "Slogan Kuliner: Tempe Mendoan Yu Karni",
        entityName: "Tempe Mendoan Yu Karni Kalibogor",
        categoryLabel: "Slogan Kuliner",
        badgeColor: "#D97706",
        culturalTag: "Warisan Budaya Mendoan",
        fullText: "Anget Mendoane, Guyub Wargane!",
        contextDesc: "Slogan kedai mendoan fiktif di tepi jalan Kalibogor yang selalu ramai saat petang tiba.",
        segments: [
          {
            id: "s1-seg-1",
            text: "Anget Mendoane, Guyub Wargane!",
            isLinguisticElement: true,
            ruleType: "rima",
            ruleLabel: "Rima & Keindahan Irama",
            explanation: "Pengulangan bunyi akhir -e ('Mendoane' dan 'Wargane') menciptakan irama yang berirama harmonis, mudah dihafal oleh konsumen, dan nyaman didengar.",
            crtInsight: "Mencerminkan filosofi hidup guyub rukun khas masyarakat Banyumas saat berkumpul menikmati mendoan hangat bersama di teras rumah."
          }
        ]
      },

      // --- SLOGAN 2 ---
      {
        id: "slogan-2",
        type: "slogan",
        title: "Slogan Kriya: Batik Banyumasan Pring Mas",
        entityName: "Batik Tulis Pring Mas Sokaraja",
        categoryLabel: "Slogan Seni Kriya",
        badgeColor: "#5C3A21",
        culturalTag: "Motif Jahe Puger & Soga",
        fullText: "Goresan Tradisi, Pesona Abadi Sepanjang Serayu.",
        contextDesc: "Slogan rumah produksi batik tulis motif jahe puger dan pring sedapur khas tepian Sungai Serayu.",
        segments: [
          {
            id: "s2-seg-1",
            text: "Goresan Tradisi, Pesona Abadi",
            isLinguisticElement: true,
            ruleType: "rima",
            ruleLabel: "Rima Akhir & Diksi Estetis",
            explanation: "Rima bunyi vokal akhir -i ('Tradisi' dan 'Abadi') berpadu dengan diksi anggun yang menonjolkan mutu karya seni warisan leluhur.",
            crtInsight: "Batik Banyumasan dikenal dengan warna soganya yang teduh, melambangkan kebersahajaan dan keteguhan jiwa orang Banyumas."
          },
          {
            id: "s2-seg-2",
            text: "Sepanjang Serayu.",
            isLinguisticElement: true,
            ruleType: "diksi",
            ruleLabel: "Diksi Simbolis Geografis",
            explanation: "Pemilihan kata 'Sepanjang Serayu' berfungsi sebagai metafora keabadian waktu sekaligus mempertegas asal-usul kearifan lokal Sungai Serayu.",
            crtInsight: "Sungai Serayu adalah nadi kehidupan agraris dan inspirasi seni budaya masyarakat Banyumas sejak berabad-abad lampau."
          }
        ]
      },

      // --- SLOGAN 3 ---
      {
        id: "slogan-3",
        type: "slogan",
        title: "Slogan Wisata: Pesona Curug Cipendok",
        entityName: "Kawasan Ekowisata Curug Cipendok Cilongok",
        categoryLabel: "Slogan Wisata Alam",
        badgeColor: "#166534",
        culturalTag: "Alam Lereng Slamet",
        fullText: "Sejuk Airnya Menyapa Jiwa, Lepaskan Penat Seketika!",
        contextDesc: "Slogan promosi air terjun alami setinggi 92 meter di lereng barat daya Gunung Slamet.",
        segments: [
          {
            id: "s3-seg-1",
            text: "Sejuk Airnya Menyapa Jiwa,",
            isLinguisticElement: true,
            ruleType: "majas",
            ruleLabel: "Majas Personifikasi",
            explanation: "Air curug diibaratkan memiliki perilaku seperti manusia yang bisa 'menyapa jiwa', memberikan kesan keakraban mendalam antara alam dan pengunjung.",
            crtInsight: "Udara pegunungan Banyumas yang asri menjadi tempat pemulihan batin (healing) alami bagi warga kota."
          },
          {
            id: "s3-seg-2",
            text: "Lepaskan Penat Seketika!",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif (Ajakan)",
            explanation: "Kata kerja 'Lepaskan' adalah bentuk imperatif yang mengajak wisatawan untuk segera melupakan kelelahan rutinitas harian.",
            crtInsight: "Menonjolkan nilai keramahan Banyumas yang selalu siap menyambut siapa saja yang ingin mencari ketenangan."
          }
        ]
      },

      // --- SLOGAN 4 ---
      {
        id: "slogan-4",
        type: "slogan",
        title: "Slogan Oleh-Oleh: Getuk Goreng Sari Raos",
        entityName: "Getuk Goreng Asli Sokaraja Sari Raos",
        categoryLabel: "Slogan Kuliner Oleh-Oleh",
        badgeColor: "#B45309",
        culturalTag: "Kudapan Tradisional Sokaraja",
        fullText: "Legit Manisnya Asli, Bikin Rindu Bersemi Kembali.",
        contextDesc: "Slogan toko oleh-oleh khas Sokaraja yang memproduksi getuk singkong goreng dengan gula kelapa murni.",
        segments: [
          {
            id: "s4-seg-1",
            text: "Legit Manisnya Asli,",
            isLinguisticElement: true,
            ruleType: "persuasif",
            ruleLabel: "Kalimat Persuasif Sensoris",
            explanation: "Kata 'Legit' dan 'Asli' meyakinkan pembaca akan mutu bahan singkong dan gula nira kelapa murni tanpa pemanis buatan.",
            crtInsight: "Sokaraja adalah sentra getuk goreng legendaris yang manisnya berasal dari gula kelapa perajin penderes Banyumas."
          },
          {
            id: "s4-seg-2",
            text: "Bikin Rindu Bersemi Kembali.",
            isLinguisticElement: true,
            ruleType: "majas",
            ruleLabel: "Majas Metafora Emotif",
            explanation: "Rasa rindu digambarkan 'bersemi' seperti tunas tanaman, menciptakan ikatan emosional agar perantau selalu ingin pulang ke kampung halaman.",
            crtInsight: "Getuk goreng kerap menjadi tali pengikat rasa rindu para perantau asal Banyumas di tanah rantau."
          }
        ]
      },

      // --- IKLAN 1 ---
      {
        id: "iklan-1",
        type: "iklan",
        title: "Iklan Produk: Minyak Atsiri Lembah Slamet",
        entityName: "Kelompok Tani Hutan Organik Baturraden",
        categoryLabel: "Iklan Produk UMKM Herbal",
        badgeColor: "#059669",
        culturalTag: "Potensi Lereng Gunung Slamet",
        fullText: "Minyak Atsiri Sereh Wangi Lembah Slamet: Wangi Alami dari Pelukan Lereng Gunung! Rasakan kehangatan murni yang mengusir lelah dan menenangkan pikiran rika. Pesan sekarang melalui WhatsApp 0812-BANYUMAS-01 dan nikmati gratis ongkir se-Banyumas Raya!",
        contextDesc: "Iklan media sosial produk minyak atsiri sereh wangi hasil budidaya petani lokal lereng Gunung Slamet.",
        segments: [
          {
            id: "ik1-seg-1",
            text: "Minyak Atsiri Sereh Wangi Lembah Slamet: Wangi Alami dari Pelukan Lereng Gunung!",
            isLinguisticElement: true,
            ruleType: "majas",
            ruleLabel: "Majas Personifikasi & Judul Pemikat",
            explanation: "Frasa 'Pelukan Lereng Gunung' mengibaratkan lereng Gunung Slamet seperti sosok pelindung hangat yang menghasilkan tanaman sereh berkhasiat.",
            crtInsight: "Tanah vulkanik Gunung Slamet yang subur kaya akan tanaman herbal dan rempah berkhasiat tinggi."
          },
          {
            id: "ik1-seg-2",
            text: "Rasakan kehangatan murni yang mengusir lelah dan menenangkan pikiran rika.",
            isLinguisticElement: true,
            ruleType: "persuasif",
            ruleLabel: "Kalimat Persuasif Manfaat",
            explanation: "Kalimat ini membujuk pembaca dengan menjanjikan manfaat nyata (mengusir lelah, pikiran tenang) sehingga timbul keinginan kuat untuk mencoba.",
            crtInsight: "Penggunaan kata sapaan 'rika' mendekatkan emosi komunikasi dengan cita rasa bahasa lokal yang bersahabat."
          },
          {
            id: "ik1-seg-3",
            text: "Pesan sekarang melalui WhatsApp 0812-BANYUMAS-01 dan nikmati gratis ongkir se-Banyumas Raya!",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif (Call to Action)",
            explanation: "Kata perintah 'Pesan sekarang' dan 'nikmati' diperkuat dengan penawaran insentif gratis ongkir untuk memicu tindakan pembelian saat itu juga.",
            crtInsight: "Menunjukkan pemanfaatan teknologi digital oleh UMKM perdesaan Banyumas untuk menjangkau pasar luas."
          }
        ]
      },

      // --- IKLAN 2 ---
      {
        id: "iklan-2",
        type: "iklan",
        title: "Iklan Kuliner: Warung Soto Sokaraja Dua Sahabat",
        entityName: "Warung Soto Sokaraja Dua Sahabat",
        categoryLabel: "Iklan Kuliner Tradisional",
        badgeColor: "#EA580C",
        culturalTag: "Kuliner Khas & Sambal Kacang",
        fullText: "Soto Sokaraja Dua Sahabat: Gurih Sambal Kacangnya Tiada Tara! Kuah kental beraroma rempah pilihan berpadu dengan ketupat pulen asli Sokaraja. Taburan krupuk canthir kriuk membuat setiap suapan bergoyang nikmat. Ayo mampir ke Jalan Suparjo No. 12 hari ini juga, buktikan kelezatannya!",
        contextDesc: "Brosur promosi warung makan soto sokaraja legendaris dengan resep kuah kaldu rempah turun-temurun.",
        segments: [
          {
            id: "ik2-seg-1",
            text: "Soto Sokaraja Dua Sahabat: Gurih Sambal Kacangnya Tiada Tara!",
            isLinguisticElement: true,
            ruleType: "majas",
            ruleLabel: "Majas Hiperbola Promotif",
            explanation: "Ungkapan 'Tiada Tara' melebih-lebihkan tingkat kegurihan sambal kacang untuk menegaskan keunggulan komparatif dibanding kuliner soto daerah lain.",
            crtInsight: "Keunikan soto Banyumas terletak pada sambal kacang lembutnya, berbeda dengan soto Jawa Tengah lainnya yang memakai kuah bening."
          },
          {
            id: "ik2-seg-2",
            text: "Kuah kental beraroma rempah pilihan berpadu dengan ketupat pulen asli Sokaraja. Taburan krupuk canthir kriuk membuat setiap suapan bergoyang nikmat.",
            isLinguisticElement: true,
            ruleType: "diksi",
            ruleLabel: "Diksi Sensoris & Diksi Khas Budaya",
            explanation: "Kata 'beraroma rempah', 'pulen', dan onomatope 'kriuk' merangsang indra pengecap dan pendengaran pembaca secara hidup.",
            crtInsight: "Krupuk canthir terbuat dari ampas ketela pohon dengan warna-warni merah ceria yang menjadi ciri otentik sajian soto Sokaraja."
          },
          {
            id: "ik2-seg-3",
            text: "Ayo mampir ke Jalan Suparjo No. 12 hari ini juga, buktikan kelezatannya!",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif Ajakan Tegas",
            explanation: "Kata seru 'Ayo' dan kata kerja perintah 'mampir' serta 'buktikan' memandu konsumen langsung menuju lokasi kedai.",
            crtInsight: "Sikap ramah mengajak orang lain mampir (nyinggahi) mencerminkan budaya keterbukaan masyarakat Banyumasan."
          }
        ]
      },

      // --- IKLAN 3 ---
      {
        id: "iklan-3",
        type: "iklan",
        title: "Iklan Jasa Sanggar: Pelatihan Calung & Lengger Sekar Arum",
        entityName: "Sanggar Seni Budaya Sekar Arum Banyumas",
        categoryLabel: "Iklan Kursus Seni Tradisi",
        badgeColor: "#9333EA",
        culturalTag: "Kesenian Tari Lengger & Musik Calung",
        fullText: "Rancak Irama Calung, Semarak Lentik Lengger! Kembangkan bakat seni tradisimu bersama maestro tari Banyumas. Jadilah generasi muda pelindung warisan leluhur yang percaya diri. Daftarkan dirimu sebelum 20 Oktober di Balai Budaya Banyumas!",
        contextDesc: "Iklan ajakan bagi remaja SMP untuk bergabung dalam kelas ekstrakurikuler musik calung bambu dan tari lengger.",
        segments: [
          {
            id: "ik3-seg-1",
            text: "Rancak Irama Calung, Semarak Lentik Lengger!",
            isLinguisticElement: true,
            ruleType: "rima",
            ruleLabel: "Rima Aliterasi & Irama Mengalun",
            explanation: "Perpaduan kata 'Rancak' dan 'Semarak' dengan pengulangan struktur frasa menghasilkan nada kalimat yang dinamis sesuai tabuhan calung.",
            crtInsight: "Calung Banyumasan dibuat dari bambu wulung pilihan yang menghasilkan nada gembira dan menggugah semangat kebersamaan."
          },
          {
            id: "ik3-seg-2",
            text: "Kembangkan bakat seni tradisimu bersama maestro tari Banyumas. Jadilah generasi muda pelindung warisan leluhur yang percaya diri.",
            isLinguisticElement: true,
            ruleType: "persuasif",
            ruleLabel: "Kalimat Persuasif Penanaman Karakter",
            explanation: "Membujuk siswa melalui dorongan rasa bangga dan tanggung jawab moral sebagai penerus identitas budaya daerah.",
            crtInsight: "Prinsip CRT: siswa diposisikan sebagai subjek aktif pelestari budaya agung daerahnya, bukan sekadar konsumen seni luar."
          },
          {
            id: "ik3-seg-3",
            text: "Daftarkan dirimu sebelum 20 Oktober di Balai Budaya Banyumas!",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif Berbatas Waktu",
            explanation: "Menyertakan tenggat waktu ('sebelum 20 Oktober') pada kalimat perintah agar pendaftar tidak menunda-nunda aksinya.",
            crtInsight: "Balai Budaya Banyumas adalah simbol pusat kreativitas para seniman rakyat di kota lama Banyumas."
          }
        ]
      },

      // --- POSTER 1 ---
      {
        id: "poster-1",
        type: "poster",
        title: "Poster Festival: Gelar Seni Budaya Serayu 2026",
        entityName: "Dinas Kepemudaan, Olahraga, Kebudayaan dan Pariwisata Banyumas",
        categoryLabel: "Poster Festival Seni Publik",
        badgeColor: "#2563EB",
        culturalTag: "Pentas Budaya & Sungai Serayu",
        fullText: "GELAR BUDAYA SUNGAI SERAYU 2026! Gemuruh Calung Berpadu, Lestari Budayaku! Saksikan parade 100 penari lengger, karnaval perahu hias, dan bazar kuliner mendoan akbar. Tanggal 14–16 November 2026 di Taman Rekreasi Kaliserayu Rawalo. Hadirilah bersama keluargamu! Terbuka gratis untuk seluruh warga!",
        contextDesc: "Poster publik ukuran besar yang dipasang di papan informasi kecamatan dan alun-alun menyambut pesta rakyat tahunan.",
        segments: [
          {
            id: "pos1-seg-1",
            text: "GELAR BUDAYA SUNGAI SERAYU 2026! Gemuruh Calung Berpadu, Lestari Budayaku!",
            isLinguisticElement: true,
            ruleType: "rima",
            ruleLabel: "Slogan Berima & Judul Mencolok",
            explanation: "Rima akhir vokal /u/ ('Berpadu' dan 'Budayaku') pada sub-judul poster memberi efek kemegahan dan mudah diulang-ulang oleh penonton.",
            crtInsight: "Festival Serayu adalah simbol rasa syukur masyarakat Banyumas atas limpahan berkah air dan tanah subur."
          },
          {
            id: "pos1-seg-2",
            text: "Saksikan parade 100 penari lengger, karnaval perahu hias, dan bazar kuliner mendoan akbar. Tanggal 14–16 November 2026 di Taman Rekreasi Kaliserayu Rawalo.",
            isLinguisticElement: true,
            ruleType: "diksi",
            ruleLabel: "Diksi Informasi Acara (Body Copy Ringkas)",
            explanation: "Pilihan kata yang jelas dan padat menyampaikan jenis pertunjukan, waktu, dan tempat tanpa bertele-tele.",
            crtInsight: "Mendoan dan perahu hias disatukan sebagai ikon budaya kuliner dan budaya maritim sungai khas Banyumasan."
          },
          {
            id: "pos1-seg-3",
            text: "Hadirilah bersama keluargamu! Terbuka gratis untuk seluruh warga!",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif Persuasif Terbuka",
            explanation: "Kata 'Hadirilah' (bentuk halus partikel -lah) digabung dengan daya tarik kata 'gratis' menciptakan dorongan kuat masyarakat untuk berbondong-bondong datang.",
            crtInsight: "Menghidupkan kembali tradisi 'nonton bareng' yang mempererat kerukunan antarwarga lintas generasi."
          }
        ]
      },

      // --- POSTER 2 ---
      {
        id: "poster-2",
        type: "poster",
        title: "Poster Lingkungan: Jaga Hutan Lereng Gunung Slamet",
        entityName: "Forum Peduli Mata Air Banyumas",
        categoryLabel: "Poster Layanan Masyarakat (Lingkungan)",
        badgeColor: "#15803D",
        culturalTag: "Konservasi Air & Alam Slamet",
        fullText: "HUTAN SLAMET LESTARI, MATA AIR BANYUMAS TAK MATI! Satu pohon yang kita jaga hari ini adalah aliran nafas dan air bersih bagi anak cucu kita esok hari. Satukan langkah, cegah penebangan liar di lereng Slamet! Aksi tanam pohon bersama pelajar Banyumas di Curug Gomblang Baturraden.",
        contextDesc: "Poster kampanye peduli lingkungan yang dipasang di majalah dinding sekolah-sekolah se-Kabupaten Banyumas.",
        segments: [
          {
            id: "pos2-seg-1",
            text: "HUTAN SLAMET LESTARI, MATA AIR BANYUMAS TAK MATI!",
            isLinguisticElement: true,
            ruleType: "rima",
            ruleLabel: "Rima Penegas Komitmen Semboyan",
            explanation: "Rima akhir vokal -i ('Lestari' dan 'Mati') memberikan ketegasan tekad yang membakar kepedulian pembaca dalam sekali pandang.",
            crtInsight: "Gunung Slamet merupakan menara air utama (water tower) yang menghidupi jutaan penduduk di Banyumas, Purbalingga, Cilacap, dan sekitarnya."
          },
          {
            id: "pos2-seg-2",
            text: "Satu pohon yang kita jaga hari ini adalah aliran nafas dan air bersih bagi anak cucu kita esok hari.",
            isLinguisticElement: true,
            ruleType: "majas",
            ruleLabel: "Majas Metafora Kemanusiaan",
            explanation: "Pohon dimetaforakan sebagai 'aliran nafas', menyadarkan pembaca bahwa menjaga hutan sama artinya dengan menjaga nyawa generasi penerus.",
            crtInsight: "Kearifan lokal masyarakat lereng Slamet memandang hutan sebagai 'ibu bumi' yang wajib dijaga kesucian dan kelestariannya."
          },
          {
            id: "pos2-seg-3",
            text: "Satukan langkah, cegah penebangan liar di lereng Slamet! Aksi tanam pohon bersama pelajar Banyumas di Curug Gomblang Baturraden.",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif Gerakan Kolaboratif",
            explanation: "Frasa 'Satukan langkah' dan 'cegah' mengobarkan ajakan aksi nyata secara kolektif kepada generasi muda pelajar.",
            crtInsight: "Mendorong kepemimpinan ekologis siswa SMP berbasis cinta daerah tumpah darahnya sendiri."
          }
        ]
      },

      // --- POSTER 3 ---
      {
        id: "poster-3",
        type: "poster",
        title: "Poster UMKM Kriya: Pameran Batik Banyumasan Jahe Puger",
        entityName: "Paguyuban Pengrajin Batik Sokaraja & Banyumas Lama",
        categoryLabel: "Poster Promosi Pameran Kriya",
        badgeColor: "#854D0E",
        culturalTag: "Filosofi Motif Jahe Puger",
        fullText: "BANGGA PAKAI BATIK BANYUMASAN! Pesona Cokelat Soga, Cermin Jiwa Luhur dan Kesatria! Pameran kriya motif Jahe Puger, Lumbon, dan Pring Sedapur karya pengrajin muda lokal. Dapatkan potongan harga 30% khusus pelajar bertanda kartu OSIS. Kunjungi Gedung Soetedja Purwokerto akhir pekan ini!",
        contextDesc: "Poster promosi pameran batik khas Banyumas untuk mengenalkan nilai filosofi motif lokal kepada generasi Z dan remaja SMP.",
        segments: [
          {
            id: "pos3-seg-1",
            text: "BANGGA PAKAI BATIK BANYUMASAN! Pesona Cokelat Soga, Cermin Jiwa Luhur dan Kesatria!",
            isLinguisticElement: true,
            ruleType: "persuasif",
            ruleLabel: "Kalimat Persuasif Identitas & Diksi Luhur",
            explanation: "Menghubungkan warna khas batik (cokelat soga) dengan watak kepribadian ksatria yang luhur guna membujuk remaja agar merasa bangga mengenakannya.",
            crtInsight: "Motif Jahe Puger melambangkan ketahanan dan obat penyejuk, sedangkan warna soga Banyumas berbeda dengan soga Solo/Yogya karena lebih gelap tegas (cablaka)."
          },
          {
            id: "pos3-seg-2",
            text: "Pameran kriya motif Jahe Puger, Lumbon, dan Pring Sedapur karya pengrajin muda lokal. Dapatkan potongan harga 30% khusus pelajar bertanda kartu OSIS.",
            isLinguisticElement: true,
            ruleType: "diksi",
            ruleLabel: "Diksi Penarik Minat (Insentif Khusus)",
            explanation: "Penyebutan nama-nama motif otentik dipadukan dengan kata 'potongan harga 30% khusus pelajar' langsung menyasar target audiens remaja.",
            crtInsight: "Motif Pring Sedapur menyiratkan pesan persatuan bahwa serumpun bambu tidak akan mudah roboh diterpa angin kencang."
          },
          {
            id: "pos3-seg-3",
            text: "Kunjungi Gedung Soetedja Purwokerto akhir pekan ini!",
            isLinguisticElement: true,
            ruleType: "imperatif",
            ruleLabel: "Kalimat Imperatif Petunjuk Lokasi",
            explanation: "Kata kerja 'Kunjungi' secara lugas mengarahkan pembaca poster ke lokasi gedung kesenian kebanggaan warga Banyumas.",
            crtInsight: "Gedung Kesenian Soetedja dinamai dari seniman legendaris Banyumas, Soetedja, pencipta lagu-lagu keroncong dan calung termasyhur."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // DATA MISI 3 – LATIHAN: ARENA GAME, KUIS ACAK, DETEKSI HOAKS & MATCHING
  // =========================================================================
  misi3: {
    overview: {
      title: "Misi 3: Arena Juara Ngiklan Banyumas",
      subtitle: "Asah Ketangkasan, Taklukkan Kuis, dan Uji Literasi Kritis Periklanan!",
      intro: "Sugeng rawuh neng Arena Latihan! Wektune mbuktikna kaprigelanmu. Rampungna 4 tantangan seru: Susun Slogan, Kuis 10 Soal Acak, Detektif Iklan Jujur vs Hoaks, lan Jodohna Ciri Teks!"
    },

    // Lencana Prestasi Khusus Misi 3
    badges: [
      { id: "badge-slogan-master", title: "Penyusun Slogan Ulung", icon: "🧩", desc: "Berhasil menyusun 3 slogan Banyumas dengan susunan kata yang tepat." },
      { id: "badge-quiz-champion", title: "Jawara Cerdas Bab 2", icon: "🎖️", desc: "Meraih nilai minimal 80 pada Kuis 10 Soal Acak." },
      { id: "badge-anti-hoax", title: "Detektif Anti-Hoaks", icon: "🛡️", desc: "Menebak 100% benar seluruh tantangan Iklan Jujur vs Hoaks Promosi." },
      { id: "badge-matching-ace", title: "Master Tiga Serangkai", icon: "🎯", desc: "Tepat menjodohkan semua karakteristik Slogan, Iklan, dan Poster." }
    ],

    // 1. TANTANGAN DRAG & DROP / KLIK SUSUN KATA SLOGAN
    dragDropSlogans: [
      {
        id: "dd-1",
        title: "Tantangan 1: Slogan Kuliner Mendoan",
        clue: "Susun kata-kata ini menjadi slogan yang mengaitkan hangatnya mendoan dengan kerukunan hidup warga Banyumas!",
        targetWords: ["Anget", "Mendoane,", "Guyub", "Wargane!"],
        scrambledWords: ["Guyub", "Anget", "Wargane!", "Mendoane,"],
        explanation: "Slogan yang tepat: 'Anget Mendoane, Guyub Wargane!'. Memanfaatkan rima akhir vokal -e yang harmonis dan diksi 'guyub' (rukun bersatu) khas Banyumasan.",
        xpReward: 30
      },
      {
        id: "dd-2",
        title: "Tantangan 2: Slogan Seni Batik Serayu",
        clue: "Susun slogan tentang pesona abadi batik motif Jahe Puger yang mengalir sepanjang Sungai Serayu!",
        targetWords: ["Goresan", "Tradisi,", "Pesona", "Abadi", "Sepanjang", "Serayu."],
        scrambledWords: ["Pesona", "Sepanjang", "Goresan", "Abadi", "Serayu.", "Tradisi,"],
        explanation: "Slogan yang tepat: 'Goresan Tradisi, Pesona Abadi Sepanjang Serayu.'. Menonjolkan rima vokal i-i ('Tradisi' & 'Abadi') dan metafora keabadian Sungai Serayu.",
        xpReward: 35
      },
      {
        id: "dd-3",
        title: "Tantangan 3: Semboyan Konservasi Gunung Slamet",
        clue: "Susun semboyan lingkungan hidup yang mengajak warga menjaga kelestarian mata air lereng Slamet!",
        targetWords: ["Hutan", "Slamet", "Lestari,", "Mata", "Air", "Banyumas", "Tak", "Mati!"],
        scrambledWords: ["Mata", "Lestari,", "Tak", "Slamet", "Hutan", "Mati!", "Air", "Banyumas"],
        explanation: "Semboyan yang tepat: 'Hutan Slamet Lestari, Mata Air Banyumas Tak Mati!'. Berima tegas i-i dengan pesan kritis konservasi alam sebagai sumber kehidupan.",
        xpReward: 40
      }
    ],

    // 2. KUMPULAN SOAL KUIS PILIHAN GANDA (12 SOAL DENGAN BERAGAM TINGKAT KESULITAN)
    // Sistem akan mengacak 10 soal untuk setiap sesi kuis siswa
    quizPool: [
      {
        id: "q-1",
        difficulty: "Mudah",
        difficultyBadge: "Level Mudah",
        badgeColor: "#166534",
        scenario: "Sebuah kedai getuk goreng di Sokaraja ingin memasang media promosi di majalah dinding sekolah dan halte bus kota.",
        question: "Media manakah yang PALING tepat digunakan jika tujuannya agar pesan dapat terbaca jelas oleh pejalan kaki yang melintas dalam waktu 3–5 detik?",
        options: [
          { text: "A. Buku panduan resep 15 halaman", isCorrect: false, feedback: "Buku resep terlalu tebal dan tidak bisa dibaca sekilas saat melintas di jalan." },
          { text: "B. Poster dengan gambar getuk mencolok dan teks ringkas", isCorrect: true, feedback: "Tepat sekali! Poster dirancang khusus untuk ruang publik dengan ilustrasi besar dan kata ringkas terbaca cepat." },
          { text: "C. Surat penawaran dinas resmi", isCorrect: false, feedback: "Surat dinas ditujukan antarinstitusi, bukan untuk umum di halte bus." },
          { text: "D. Artikel opini surat kabar tanpa ilustrasi", isCorrect: false, feedback: "Artikel opini membutuhkan waktu membaca yang lama dan tidak menarik di ruang publik." }
        ],
        explanation: "Poster adalah plakat ruang publik yang mengandalkan daya visual mencolok dan keterbacaan instan dari jarak pandang beberapa meter."
      },
      {
        id: "q-2",
        difficulty: "Mudah",
        difficultyBadge: "Level Mudah",
        badgeColor: "#166534",
        scenario: "Perhatikan teks berikut: 'Mayuh padha nguri-uri calung, amrih Banyumas tansah agung!' (Ayo lestarikan calung, agar Banyumas tetap agung!).",
        question: "Berdasarkan fungsinya, jenis kalimat yang digunakan pada awal ungkapan di atas adalah...",
        options: [
          { text: "A. Kalimat interogatif (pertanyaan)", isCorrect: false, feedback: "Kalimat tersebut tidak meminta jawaban pertanyaan." },
          { text: "B. Kalimat berita pasif", isCorrect: false, feedback: "Kalimat tersebut bukan sekadar melaporkan kejadian yang sudah lalu." },
          { text: "C. Kalimat imperatif ajakan", isCorrect: true, feedback: "Wis bener! Kata 'Mayuh' (Ayo/Mari) adalah penanda kalimat imperatif ajakan tindakan bersama." },
          { text: "D. Kalimat penolakan halus", isCorrect: false, feedback: "Kalimat tersebut justru mengajak aktif, bukan menolak." }
        ],
        explanation: "Kalimat imperatif ditandai dengan kata ajakan seperti 'Ayo', 'Mari', atau dalam bahasa Banyumas 'Mayuh padha'."
      },
      {
        id: "q-3",
        difficulty: "Sedang",
        difficultyBadge: "Level Sedang",
        badgeColor: "#D97706",
        scenario: "Pak Bejo pemilik usaha tempe mendoan membuat slogan: 'Mendoan Pak Bejo sangat enak dan banyak orang yang suka membelinya setiap hari.' Temannya menyarankan agar slogan tersebut diubah.",
        question: "Mengapa kalimat Pak Bejo di atas dinilai KURANG efektif sebagai sebuah slogan?",
        options: [
          { text: "A. Karena menggunakan bahasa Indonesia baku", isCorrect: false, feedback: "Bahasa Indonesia baku justru baik, kelemahannya bukan pada bakunya kata." },
          { text: "B. Terlalu panjang, bertele-tele, dan tidak memiliki rima atau keindahan irama yang mudah diingat", isCorrect: true, feedback: "Mantep! Slogan menuntut kepadatan makna, keindahan rima, dan bentuk ringkas agar membekas di ingatan." },
          { text: "C. Karena tidak mencantumkan daftar harga tempe per porsi", isCorrect: false, feedback: "Slogan tidak wajib memuat rincian daftar harga." },
          { text: "D. Karena tempe mendoan bukan produk asli Banyumas", isCorrect: false, feedback: "Tempe mendoan adalah kuliner asli Banyumas." }
        ],
        explanation: "Slogan yang baik harus padat kata, memiliki irama/rima bunyi, dan tidak bertele-tele layaknya kalimat obrolan biasa."
      },
      {
        id: "q-4",
        difficulty: "Sedang",
        difficultyBadge: "Level Sedang",
        badgeColor: "#D97706",
        scenario: "Cermati kutipan iklan wisata ini: 'Air Sejuk Curug Cipendok Menyapa Jiwa Rika yang Lelah.'",
        question: "Majas (gaya bahasa) apakah yang digunakan dalam kalimat promosi di atas dan apa tujuannya?",
        options: [
          { text: "A. Majas Litotes untuk merendahkan kualitas air terjun", isCorrect: false, feedback: "Kalimat tersebut tidak bermaksud merendahkan diri." },
          { text: "B. Majas Personifikasi untuk mengibaratkan air curug seolah-olah sahabat yang mampu menyapa dan menenangkan manusia", isCorrect: true, feedback: "Bener pisan! Air adalah benda mati yang diibaratkan mampu bertindak seperti manusia ('menyapa jiwa')." },
          { text: "C. Majas Pleonasme untuk mengulang kata yang bermakna sama", isCorrect: false, feedback: "Tidak ada pengulangan kata yang mubazir di kalimat tersebut." },
          { text: "D. Majas Sarkasme untuk menyindir wisatawan kota", isCorrect: false, feedback: "Kalimat tersebut sangat ramah dan menyejukkan, bukan sindiran tajam." }
        ],
        explanation: "Personifikasi meletakkan sifat kemanusiaan pada benda alam, menciptakan kedekatan emosional antara objek wisata dan calon pengunjung."
      },
      {
        id: "q-5",
        difficulty: "Sedang",
        difficultyBadge: "Level Sedang",
        badgeColor: "#D97706",
        scenario: "Sebuah poster pameran batik di Purwokerto mencantumkan elemen: (1) Foto kain batik motif Jahe Puger, (2) Judul 'Pesona Batik Banyumasan', (3) Waktu & Tempat di Gedung Soetedja, namun TIDAK mencantumkan informasi kontak/penyelenggara.",
        question: "Apa dampak dari ketiadaan informasi kontak atau penyelenggara pada poster kegiatan publik tersebut?",
        options: [
          { text: "A. Poster menjadi lebih menarik karena tidak banyak tulisan", isCorrect: false, feedback: "Ketiadaan info esensial justru membingungkan khalayak." },
          { text: "B. Pengunjung kesulitan mencari kepastian informasi dan tingkat kepercayaan masyarakat menurun", isCorrect: true, feedback: "Tepat! Identitas penyelenggara dan saluran konfirmasi (Call to Action) sangat penting demi kejelasan dan kredibilitas." },
          { text: "C. Acara otomatis dibatalkan oleh dinas kebudayaan", isCorrect: false, feedback: "Dampak langsung bagi audiens adalah ketidakjelasan informasi, bukan pembatalan otomatis." },
          { text: "D. Poster berubah jenis menjadi slogan murni", isCorrect: false, feedback: "Poster tetap poster, namun kualitas strukturnya kurang lengkap." }
        ],
        explanation: "Struktur teks iklan dan poster yang baik harus memuat penanggung jawab atau kontak agar kredibel dan masyarakat bisa mengonfirmasi keikutsertaan."
      },
      {
        id: "q-6",
        difficulty: "Sulit",
        difficultyBadge: "Level Sulit (HOTS)",
        badgeColor: "#DC2626",
        scenario: "Dua pengrajin batik Banyumas membuat kalimat promosi yang berbeda:\nPengrajin A: 'Beli batik kami sekarang mumpung ada stok.'\nPengrajin B: 'Bangga Berkain Soga: Rawat Warisan Leluhur, Tampil Percaya Diri Bersama Batik Banyumasan!'",
        question: "Berdasarkan prinsip teks persuasif berbasis budaya (CRT), manakah yang LEBIH KUAT memengaruhi generasi muda dan mengapa?",
        options: [
          { text: "A. Pengrajin A, karena kalimatnya lebih singkat dan menghemat ruang cetak", isCorrect: false, feedback: "Singkat tanpa daya gugah persuasif dan identitas budaya tidak akan menyentuh hati audiens." },
          { text: "B. Pengrajin B, karena mengaitkan produk dengan kebanggaan identitas budaya, nilai historis (soga), dan apresiasi diri generasi muda", isCorrect: true, feedback: "Luar biasa kritis! Pengrajin B mengaktifkan motivasi nilai intrinsik dan kebanggaan budaya (Cultural Identity)." },
          { text: "C. Keduanya sama saja karena sama-sama menyuruh orang membeli batik", isCorrect: false, feedback: "Daya persuasif kedua kalimat memiliki bobot psikologis yang sangat berbeda." },
          { text: "D. Pengrajin A, karena kata 'mumpung' menciptakan kepanikan belanja", isCorrect: false, feedback: "Kata 'mumpung ada stok' terkesan biasa dan tidak menonjolkan keunikan budaya Banyumas." }
        ],
        explanation: "Iklan berbasis CRT tidak sekadar menawarkan komoditas fisik, melainkan menyentuh harga diri, sejarah leluhur, dan identitas positif siswa terhadap daerahnya."
      },
      {
        id: "q-7",
        difficulty: "Sulit",
        difficultyBadge: "Level Sulit (HOTS)",
        badgeColor: "#DC2626",
        scenario: "Di media sosial beredar iklan produk UMKM herbal lereng Slamet yang mengklaim: 'Madu Alami Slamet: Dijamin 100% Menyembuhkan Segala Macam Penyakit Berat Hanya dalam Semalam Tanpa Perlu ke Dokter!'",
        question: "Sebagai konsumen yang cerdas dan kritis, analisis kelemahan etis yang PALING fatal dari iklan tersebut adalah...",
        options: [
          { text: "A. Harganya pasti terlalu murah untuk ukuran madu asli", isCorrect: false, feedback: "Harga belum diketahui dari teks tersebut." },
          { text: "B. Menggunakan kata 'Slamet' yang merupakan nama tempat lokal", isCorrect: false, feedback: "Menyebutkan nama geografis diperbolehkan asalkan benar lokasinya." },
          { text: "C. Mengandung klaim mutlak ('dijamin 100% sembuh semalam') yang berlebihan, menyesatkan, dan melanggar kode etik periklanan serta medis", isCorrect: true, feedback: "Hebat! Iklan wajib jujur dan tidak boleh memberi janji palsu berlebihan yang membahayakan keselamatan konsumen." },
          { text: "D. Formatnya berupa teks digital di media sosial", isCorrect: false, feedback: "Media sosial adalah saluran yang sah, yang bermasalah adalah isi klaim kebohongannya." }
        ],
        explanation: "Etika Pariwara Indonesia (EPI) dan UU Perlindungan Konsumen melarang klaim penyembuhan instan absolut yang tidak terbukti secara klinis ilmiah."
      },
      {
        id: "q-8",
        difficulty: "Sedang",
        difficultyBadge: "Level Sedang",
        badgeColor: "#D97706",
        scenario: "Perhatikan pasangan kata dalam slogan festival berikut:\n'Rancak Irama Calung, Semarak Lentik Lengger.'",
        question: "Efek estetis apakah yang ditimbulkan dari pengulangan pola bunyi dan susunan kata berirama di atas?",
        options: [
          { text: "A. Memperlambat pembaca dalam memahami pesan", isCorrect: false, feedback: "Irama justru mempercepat daya tangkap dan daya ingat." },
          { text: "B. Menciptakan keselarasan bunyi yang ritmis seperti alunan musik, sehingga kalimat terasa hidup dan mudah diingat", isCorrect: true, feedback: "Mantap! Keselarasan bunyi (aliterasi dan rima) memantulkan dinamika musik calung itu sendiri." },
          { text: "C. Mengaburkan informasi utama tarian lengger", isCorrect: false, feedback: "Informasinya tetap jelas dan semakin indah disampaikan." },
          { text: "D. Menjadikan kalimat tersebut tergolong kalimat tanya", isCorrect: false, feedback: "Kalimat di atas adalah deklaratif estetis bernada puitis." }
        ],
        explanation: "Rima dan pola struktur paralel menimbulkan daya musikalitas yang memperkuat daya pikat ingatan pembaca (*stickiness*)."
      },
      {
        id: "q-9",
        difficulty: "Mudah",
        difficultyBadge: "Level Mudah",
        badgeColor: "#166534",
        scenario: "Sebuah warung Soto Sokaraja menulis di spanduknya: 'Pesan sekarang melalui WhatsApp 0812-3456-7890 dan dapatkan gratis krupuk canthir renyah!'",
        question: "Bagian teks di atas dalam struktur teks iklan berfungsi sebagai...",
        options: [
          { text: "A. Judul Utama (Headline)", isCorrect: false, feedback: "Headline berada di awal untuk memikat pandangan pertama." },
          { text: "B. Masalah Konsumen", isCorrect: false, feedback: "Teks ini bukan uraian keluhan masalah konsumen." },
          { text: "C. Ajakan Bertindak (Call to Action / CTA) dan Informasi Kontak", isCorrect: true, feedback: "Tepat sekali! 'Pesan sekarang' disertai kontak dan insentif adalah ciri utama Call to Action." },
          { text: "D. Latar belakang sejarah berdirinya warung", isCorrect: false, feedback: "Bukan latar belakang sejarah." }
        ],
        explanation: "Call to Action (CTA) memandu calon pembeli secara spesifik ke langkah aksi yang harus dilakukan untuk mendapatkan produk."
      },
      {
        id: "q-10",
        difficulty: "Sulit",
        difficultyBadge: "Level Sulit (HOTS)",
        badgeColor: "#DC2626",
        scenario: "Dinas Pariwisata ingin membuat kampanye mengajak siswa SMP mencintai cagar budaya Banyumas Kota Lama. Target audiensnya adalah remaja usia 13-15 tahun pengguna gawai aktif.",
        question: "Strategi desain pesan manakah yang PALING EFEKTIF memadukan prinsip teks iklan dan psikologi remaja?",
        options: [
          { text: "A. Brosur hitam putih berisi pasal-pasal undang-undang cagar budaya setebal 4 lembar", isCorrect: false, feedback: "Remaja akan bosan dan tidak tertarik membaca regulasi kaku." },
          { text: "B. Iklan video pendek vertikal dan poster grafis berwarna dinamis dengan slogan pemantik 'Jelajah Jejak Sejarah, Bikin Kontenmu Makin Berfaedah!'", isCorrect: true, feedback: "Sangat brilian! Format vertikal ramah gawai, bahasa akrab remaja, memadukan hobi konten kreatif dengan cinta sejarah lokal." },
          { text: "C. Pengumuman lewat pengeras suara keliling balai desa pada jam sekolah", isCorrect: false, feedback: "Remaja saat jam sekolah tidak berada di balai desa." },
          { text: "D. Spanduk kain polos bertuliskan 'Wajib Mengunjungi Museum' tanpa gambar", isCorrect: false, feedback: "Instruksi sepihak yang kering visual tidak memancing antusiasme generasi muda." }
        ],
        explanation: "Iklan yang efektif harus menyelaraskan bahasa, media, dan minat dunia audiens targetnya (*relevansi kontekstual*)."
      },
      {
        id: "q-11",
        difficulty: "Sedang",
        difficultyBadge: "Level Sedang",
        badgeColor: "#D97706",
        scenario: "Cermati kalimat slogan ini: 'Kencot? Mendoan Anget Solusine!' (Lapar? Mendoan Hangat Solusinya!).",
        question: "Daya tarik utama dari slogan di atas bagi masyarakat Banyumas terletak pada...",
        options: [
          { text: "A. Panjang kalimatnya yang menyerupai cerita pendek", isCorrect: false, feedback: "Slogan di atas sangat singkat, bukan cerita pendek." },
          { text: "B. Penggunaan kosa kata lokal dialek Banyumas ('kencot') yang akrab menyentuh kebutuhan nyata keseharian", isCorrect: true, feedback: "Mantep! Kata 'kencot' memantik kedekatan kultural dan emosional langsung bagi penutur bahasa Banyumas." },
          { text: "C. Ketidakjelasan makna yang membuat orang penasaran", isCorrect: false, feedback: "Maknanya justru sangat terang benderang dan lugas." },
          { text: "D. Menggunakan istilah ilmiah kedokteran", isCorrect: false, feedback: "Tidak ada istilah kedokteran di dalamnya." }
        ],
        explanation: "Pendekatan CRT mengajarkan bahwa diksi lokal yang hidup di masyarakat memiliki daya rekat emosional yang tinggi bila ditempatkan secara tepat."
      },
      {
        id: "q-12",
        difficulty: "Sulit",
        difficultyBadge: "Level Sulit (HOTS)",
        badgeColor: "#DC2626",
        scenario: "Seorang siswa membuat poster lingkungan bertema pelestarian Sungai Serayu dengan memuat foto sungai penuh sampah tanpa kalimat solusi atau ajakan.",
        question: "Kritik konstruktif yang PALING TEPAT untuk menyempurnakan fungsi persuasif poster tersebut adalah...",
        options: [
          { text: "A. Poster harus dicetak di atas kertas emas agar berkilau", isCorrect: false, feedback: "Bahan cetak mahal tidak memperbaiki kekurangan pesan persuasif." },
          { text: "B. Perlu ditambahkan slogan penegas dan kalimat imperatif ajakan konkret (misal: 'Serayu Resik, Urip Asri: Ayo Pilah Sampah Sekang Omah!') agar menggerakkan tindakan nyata", isCorrect: true, feedback: "Luar biasa! Poster persuasif tidak sekadar memotret keprihatinan, tetapi harus mengarahkan aksi solusi." },
          { text: "C. Hapus fotonya dan ganti dengan teks undang-undang lingkungan hidup", isCorrect: false, feedback: "Menghapus foto justru menghilangkan daya tarik visual utama poster." },
          { text: "D. Ganti tema sungai dengan tema penjualan produk makanan", isCorrect: false, feedback: "Kritik yang baik menyempurnakan tujuan tema awal, bukan mengganti topik." }
        ],
        explanation: "Poster kampanye sosial harus memadukan potret realitas visual dengan seruan ajakan (*Call to Action*) yang terarah dan memberi harapan solusi."
      }
    ],

    // 3. TANTANGAN BENAR / SALAH: IKLAN BENERAN VS HOAKS PROMOSI (LITERASI KRITIS)
    hoaxVsReal: [
      {
        id: "hvr-1",
        title: "Kasus 1: Minyak Atsiri Lereng Slamet",
        klaim: "Beredar pesan di grup WhatsApp: 'Minyak Sereh lereng Slamet terbukti 100% melenyapkan kanker, diabetes, dan stroke dalam waktu 2 hari tanpa obat dokter. Beli sekarang mumpung persediaan ada!'",
        verdict: "hoaks",
        verdictLabel: "HOAKS PROMOSI / KLAIM MENYESATKAN",
        alasan: "Iklan obat tradisional dan herbal TIDAK BOLEH mengklaim kesembuhan mutlak penyakit kronis berat dalam waktu instan. Klaim semacam ini melanggar Pedoman BPOM dan membahayakan keselamatan pasien yang menghentikan terapi medis.",
        tipsKritis: "Waspadai kata 'dijamin 100% sembuh instan tanpa dokter' pada produk kesehatan!"
      },
      {
        id: "hvr-2",
        title: "Kasus 2: Brosur Resmi Getuk Goreng Asli Sokaraja",
        klaim: "Brosur resmi toko oleh-oleh: 'Dibuat dari singkong pilihan dan gula kelapa murni tanpa bahan pengawet sintesis. Terdaftar resmi di Dinkes P-IRT No. 2063302010123-26 dan bersertifikat Halal Indonesia.'",
        verdict: "beneran",
        verdictLabel: "IKLAN BENERAN & ETIS",
        alasan: "Informasi transparan, mencantumkan bahan baku faktual, dan memiliki nomor izin edar resmi yang dapat diverifikasi keasliannya.",
        tipsKritis: "Iklan yang baik selalu berani mencantumkan legalitas perizinan dan izin edar resmi."
      },
      {
        id: "hvr-3",
        title: "Kasus 3: Tiket Gratis Baturraden Seumur Hidup",
        klaim: "Tautan broadcast: 'Dalam rangka ulang tahun Banyumas, Wisata Baturraden bagikan 10.000 tiket masuk gratis seumur hidup! Cukup klik link baturraden-gratis-2026.xyz dan teruskan ke 20 kontak temanmu!'",
        verdict: "hoaks",
        verdictLabel: "HOAKS PROMOSI & PHISHING BERBAHAYA",
        alasan: "Ini adalah modus penipuan daring (phishing) untuk mencuri data pribadi nomor WhatsApp dan akun medsos. Destinasi resmi tidak pernah membagikan tiket gratis seumur hidup dengan syarat membagikan broadcast berantai ke situs mencurigakan.",
        tipsKritis: "Jangan pernah mengeklik link mencurigakan yang meminta disebarkan berantai ke banyak orang!"
      },
      {
        id: "hvr-4",
        title: "Kasus 4: Diskon Siswa Berbusana Batik di Warung Soto",
        klaim: "Postingan akun resmi warung Soto Sokaraja: 'Semarak Hari Batik! Dapatkan potongan 20% bagi pelajar yang mampir memakai seragam batik sekolah di hari Jumat. Tunjukkan kartu pelajar rika. Syarat & Ketentuan berlaku.'",
        verdict: "beneran",
        verdictLabel: "IKLAN BENERAN & KREATIF",
        alasan: "Promosi wajar dan mendidik yang mendukung budaya lokal, mencantumkan syarat yang masuk akal, serta batas ketentuan yang jelas.",
        tipsKritis: "Promosi yang mencantumkan 'S&K berlaku' dan syarat yang wajar menunjukkan iktikad promosi yang bertanggung jawab."
      },
      {
        id: "hvr-5",
        title: "Kasus 5: Konser Calung Berhadiah Mobil Mewah Tanpa Syarat",
        klaim: "Selebaran di tiang listrik: 'Hadirilah Festival Calung Akbar di lapangan desa malam ini! Setiap penonton yang datang PASTI langsung pulang membawa mobil baru tanpa diundi dan tanpa syarat apa pun!'",
        verdict: "hoaks",
        verdictLabel: "HOAKS PROMOSI / PENIPUAN PUBLIK",
        alasan: "Klaim janji hadiah yang tidak masuk akal secara finansial dan logika. Sering digunakan oknum tidak bertanggung jawab untuk mengumpulkan massa atau memancing biaya registrasi tersembunyi.",
        tipsKritis: "Jika suatu tawaran terdengar terlalu muluk dan tidak masuk akal, hampir dipastikan itu adalah penipuan!"
      },
      {
        id: "hvr-6",
        title: "Kasus 6: Spanduk Jujur Kedai Tempe Mendoan",
        klaim: "Spanduk di depan kedai: 'Mendoan Anget Asli Banyumas. Digoreng dadakan saat rika pesan menggunakan minyak goreng bermutu. Sambal kecap pedas cabai rawit asli petani Sumbang. Buka pukul 14.00 - 21.00 WIB.'",
        verdict: "beneran",
        verdictLabel: "IKLAN BENERAN & JUJUR",
        alasan: "Pernyataan faktual mengenai cara pengolahan, bahan yang digunakan, serta waktu operasional yang jelas tanpa melebih-lebihkan janji khayalan.",
        tipsKritis: "Kejujuran fakta rasa dan mutu bahan adalah fondasi utama kepercayaan pelanggan UMKM."
      }
    ],

    // 4. GAME MATCHING / MENJODOHKAN KARAKTERISTIK DENGAN JENIS TEKS
    matchingItems: [
      {
        id: "m-1",
        deskripsi: "Kalimat pendek, padat, berirama harmonis, dijadikan pegangan komitmen atau semboyan moral.",
        correctCategory: "slogan",
        categoryName: "Slogan"
      },
      {
        id: "m-2",
        deskripsi: "Plakat visual ruang publik di halte/mading yang menitikberatkan ilustrasi besar dan kata ringkas terbaca 3–5 detik.",
        correctCategory: "poster",
        categoryName: "Poster"
      },
      {
        id: "m-3",
        deskripsi: "Teks promosi komersial memadukan gambar, video gerak, audio lagu calung, uraian keunggulan, dan tombol kontak WhatsApp.",
        correctCategory: "iklan",
        categoryName: "Iklan"
      },
      {
        id: "m-4",
        deskripsi: "Contoh: 'Anget Mendoane, Guyub Wargane!' atau 'Bhinneka Tunggal Ika'.",
        correctCategory: "slogan",
        categoryName: "Slogan"
      },
      {
        id: "m-5",
        deskripsi: "Lembaran pengumuman aksi sosial 'HUTAN SLAMET LESTARI, MATA AIR BANYUMAS TAK MATI!' yang ditempel di dinding sekolah.",
        correctCategory: "poster",
        categoryName: "Poster"
      },
      {
        id: "m-6",
        deskripsi: "Brosur promosi diskon 30% batik tulis Jahe Puger yang mencantumkan jam buka toko dan tautan belanja medsos.",
        correctCategory: "iklan",
        categoryName: "Iklan"
      }
    ]
  },

  // =========================================================================
  // DATA MISI 4 – CIPTA: PROYEK PjBL, SLOGAN GENERATOR & CANVAS POSTER MAKER
  // =========================================================================
  misi4: {
    overview: {
      title: "Misi 4: Studio Cipta Poster & Slogan Banyumas",
      subtitle: "Proyek Nyata (PjBL): Dari Ide Budaya Lokal Jadi Karya Promosi Digital!",
      intro: "Sugeng rawuh neng Studio Kreatif! Wektune rika dadi kreator promosi sejati. Gunakna Slogan Generator Bantu nggo mancing ide kreatif, banjur rancang poster digitalmu neng Canvas Poster Maker kanthi latar motif batik lan ikon khas Banyumas!"
    },

    // 1. Panduan 5 Langkah Proyek PjBL
    pjblSteps: [
      {
        step: 1,
        title: "Pilih Produk / Wisata Banyumas",
        desc: "Tentukan objek kearifan lokal yang ingin rika angkat (misal: Tempe Mendoan, Soto Sokaraja, Batik Jahe Puger, Calung Lengger, atau Curug Cipendok).",
        icon: "🏺"
      },
      {
        step: 2,
        title: "Tentukan Target Audiens & Keunggulan",
        desc: "Kenali siapa pembacamu (remaja seusiamu, wisatawan luar kota, atau pecinta kuliner) dan apa nilai unik (USP) yang membuat produk ini istimewa.",
        icon: "🎯"
      },
      {
        step: 3,
        title: "Gagas Slogan dengan Generator Bantu",
        desc: "Gunakan Slogan Generator Pemantik untuk memicu ide diksi, rima, dan kerangka kalimat persuasif. Kembangkan menjadi slogan orisinal buatanmu sendiri!",
        icon: "💡"
      },
      {
        step: 4,
        title: "Rancang Poster di Canvas Poster Maker",
        desc: "Pilih 1 dari 6 latar bertema batik/alam Banyumas, tambahkan ikon budaya SVG, atur ukuran judul, slogan, deskripsi, kontak, dan warna teks.",
        icon: "🎨"
      },
      {
        step: 5,
        title: "Verifikasi Checklist & Unduh PNG",
        desc: "Periksa kelengkapan 5 elemen poster melalui checklist mandiri, lalu unduh poster dalam format gambar PNG resolusi tinggi siap pamer!",
        icon: "📥"
      }
    ],

    // 2. Data Slogan Generator Bantu (Scaffolding Kreatif)
    sloganGenerator: {
      products: [
        {
          id: "mendoan",
          name: "Tempe Mendoan Hangat",
          icon: "🥟",
          keywords: ["anget", "gurih", "kriuk", "cocol kecap", "daun bawang", "guyub", "renyah", "cablaka"],
          usp: "Digoreng setengah matang berbalut adonan daun bawang, nikmat disantap hangat bersama cabai rawit.",
          hooks: ["Kencot ora?", "Anget neng ilat, guyub neng ati", "Gurih sejati khas Banyumasan"]
        },
        {
          id: "soto",
          name: "Soto Sokaraja Sambal Kacang",
          icon: "🍲",
          keywords: ["sambal kacang", "ketupat pulen", "kuah kental", "krupuk canthir", "tiada tara", "rempah asli"],
          usp: "Kuah kaldu rempah berpadu saus sambal kacang lembut dan renyahnya kerupuk canthir warna-warni.",
          hooks: ["Semangkuk kehangatan tradisi", "Gurih kacang nendang", "Rasa otentik tanah Sokaraja"]
        },
        {
          id: "getuk",
          name: "Getuk Goreng Asli Sokaraja",
          icon: "🍠",
          keywords: ["legit", "gula kelapa murni", "singkong empuk", "manis asli", "rindu pulang", "oleh-oleh"],
          usp: "Manis alami gula kelapa nira tanpa pengawet sintesis, renyah di luar dan lumer legit di dalam.",
          hooks: ["Manis legit bikin rindu", "Oleh-oleh cinta Banyumas", "Gula kelapa alami tiada dua"]
        },
        {
          id: "batik",
          name: "Batik Banyumasan (Jahe Puger & Soga)",
          icon: "🎨",
          keywords: ["cokelat soga", "jahe puger", "luhur", "kesatria", "goresan tradisi", "pring sedapur", "bangga berkain"],
          usp: "Warna cokelat soga khas dan motif lugas yang melambangkan kejujuran (cablaka) dan watak kesatria.",
          hooks: ["Pesona adiluhung budaya Serayu", "Goresan jiwa kesatria", "Bangga pakai batik lokal kita"]
        },
        {
          id: "calung",
          name: "Seni Musik Calung & Tari Lengger",
          icon: "🎋",
          keywords: ["rancak", "semarak", "bambu wulung", "lentik gemulai", "gembira", "lestari", "seni tradisi"],
          usp: "Alunan bilah bambu calung yang lincah bersahaja dipadu liukan tari rakyat yang penuh kegembiraan.",
          hooks: ["Alunan bambu merdu memanggil", "Goyang semarak bumi Banyumas", "Generasi muda penjaga warisan"]
        },
        {
          id: "wisata",
          name: "Wisata Alam Baturraden & Lereng Slamet",
          icon: "⛰️",
          keywords: ["sejuk", "lereng slamet", "hawa pegunungan", "curug cipendok", "air jernih", "pelepas penat"],
          usp: "Panorama hijau kaki gunung berhawa sejuk dengan gemericik air terjun alami peredam stres harian.",
          hooks: ["Sejuk airnya menyapa jiwa", "Pelukan damai lereng Slamet", "Pelepas penat di pangkuan alam"]
        }
      ],

      audiences: [
        { id: "remaja", label: "Remaja & Pelajar SMP/SMA", tip: "Gunakan bahasa santai, relevan dengan gaya hidup gawai, dan sentuh rasa bangga identitas daerah." },
        { id: "wisatawan", label: "Wisatawan Luar Kota / Perantau", tip: "Tonjolkan keaslian (orisinil), kemudahan lokasi, dan sensasi rindu kampung halaman." },
        { id: "kuliner", label: "Pecinta Kuliner Tradisional", tip: "Gunakan diksi sensoris yang merangsang nafsu makan (gurih, legit, renyah, kuah kental beraroma rempah)." },
        { id: "budaya", label: "Pecinta Seni & Pemerhati Budaya", tip: "Tekankan nilai filosofis leluhur, orisinalitas karya, dan tanggung jawab moral pelestarian." }
      ],

      tones: [
        { id: "santai", label: "Santai & Ceria (Ngapak Friendly)", hint: "Sisipkan sapaan akrab seperti 'Mayuh', 'Lur', 'Kencot', berirama lincah." },
        { id: "puitis", label: "Puitis, Anggun & Berima Indah", hint: "Gunakan rima akhir vokal yang harmonis (a-a, i-i, e-e) dan majas personifikasi/metafora." },
        { id: "tegas", label: "Tegas, Inspiratif & Menggugah Aksi", hint: "Gunakan kalimat imperatif langsung, kata kerja ajakan, dan seruan kebanggaan bersama." }
      ]
    },

    // 3. Preset Poster Maker: 6 Pilihan Latar Bertema Banyumas
    backgrounds: [
      {
        id: "soga-batik",
        name: "Batik Soga Jahe Puger",
        category: "Batik Klasik",
        bgColor: "#4A2810",
        patternType: "batik-jahe",
        textColor: "#FFFFFF",
        accentColor: "#F59E0B",
        desc: "Cokelat soga hangat berpadu motif ornamen Jahe Puger geometris yang elegan."
      },
      {
        id: "mendoan-gold",
        name: "Kuning Keemasan Mendoan",
        category: "Kuliner Ceria",
        bgColor: "#D97706",
        patternType: "dots-mendoan",
        textColor: "#FFFFFF",
        accentColor: "#FEF3C7",
        desc: "Nuansa kuning keemasan tempe mendoan hangat dengan aksen daun bawang segar."
      },
      {
        id: "pring-sedapur",
        name: "Hijau Bambu Pring Sedapur",
        category: "Harmoni Alam",
        bgColor: "#14532D",
        patternType: "bambu-lines",
        textColor: "#FFFFFF",
        accentColor: "#86EFAC",
        desc: "Warna hijau daun pisang dan rumpun bambu pring sedapur lereng Gunung Slamet."
      },
      {
        id: "batik-lumbon",
        name: "Batik Lumbon Terakota",
        category: "Kriya Tradisi",
        bgColor: "#78350F",
        patternType: "lumbon-leaves",
        textColor: "#FFFFFF",
        accentColor: "#FCD34D",
        desc: "Kombinasi cokelat kayu manis dengan motif lengkung daun lumbon khas Banyumasan."
      },
      {
        id: "serayu-blue",
        name: "Biru Sejuk Sungai Serayu",
        category: "Wisata Air",
        bgColor: "#1E3A8A",
        patternType: "river-waves",
        textColor: "#FFFFFF",
        accentColor: "#93C5FD",
        desc: "Biru anggun aliran Sungai Serayu dan sejuknya embun Curug Cipendok."
      },
      {
        id: "krem-banyumas",
        name: "Krem Klasik Bersahaja (Cablaka)",
        category: "Minimalis Terang",
        bgColor: "#FFFDF9",
        patternType: "subtle-border",
        textColor: "#241408",
        accentColor: "#5C3A21",
        desc: "Latar broken white terang dengan bingkai ornamen batik cokelat soga kontras tinggi."
      }
    ],

    // 4. Koleksi 8 Ikon Budaya SVG Orisinal Banyumas
    svgIcons: [
      {
        id: "icon-mendoan",
        name: "Tempe Mendoan",
        svgPath: "M 20 40 C 20 28, 80 28, 80 40 L 80 75 C 80 88, 20 88, 20 75 Z",
        category: "Kuliner",
        symbol: "🥟",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Mendoan Body
          ctx.fillStyle = "#F59E0B";
          ctx.strokeStyle = "#B45309";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.roundRect(-40, -45, 80, 90, 16);
          ctx.fill();
          ctx.stroke();
          // Scallion flecks
          ctx.fillStyle = "#166534";
          ctx.fillRect(-20, -25, 12, 4);
          ctx.fillRect(10, -10, 14, 4);
          ctx.fillRect(-15, 15, 14, 4);
          ctx.fillRect(5, 30, 12, 4);
          ctx.restore();
        }
      },
      {
        id: "icon-soto",
        name: "Soto Sokaraja",
        category: "Kuliner",
        symbol: "🍲",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Mangkuk
          ctx.fillStyle = "#FFFFFF";
          ctx.strokeStyle = "#D97706";
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(0, 5, 45, 0, Math.PI);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Kuah & Ketupat
          ctx.fillStyle = "#EA580C";
          ctx.beginPath();
          ctx.arc(0, 5, 38, 0, Math.PI);
          ctx.fill();
          // Krupuk canthir merah
          ctx.fillStyle = "#EF4444";
          ctx.beginPath();
          ctx.arc(-15, -5, 12, 0, Math.PI * 2);
          ctx.fill();
          // Uap kuah hangat
          ctx.strokeStyle = "#FDE68A";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(-10, -15); ctx.quadraticCurveTo(-15, -30, -5, -45);
          ctx.moveTo(10, -15); ctx.quadraticCurveTo(5, -30, 15, -45);
          ctx.stroke();
          ctx.restore();
        }
      },
      {
        id: "icon-getuk",
        name: "Getuk Goreng",
        category: "Oleh-oleh",
        symbol: "🍠",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Besek Bambu
          ctx.fillStyle = "#D97706";
          ctx.strokeStyle = "#78350F";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.roundRect(-42, -10, 84, 50, 8);
          ctx.fill();
          ctx.stroke();
          // Motif anyaman besek
          ctx.strokeStyle = "#92400E";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-42, 10); ctx.lineTo(42, 10);
          ctx.moveTo(-42, 25); ctx.lineTo(42, 25);
          ctx.stroke();
          // Tumpukan Getuk Manis
          ctx.fillStyle = "#B45309";
          ctx.beginPath();
          ctx.arc(-18, -12, 18, 0, Math.PI * 2);
          ctx.arc(18, -12, 18, 0, Math.PI * 2);
          ctx.arc(0, -28, 16, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      },
      {
        id: "icon-canting",
        name: "Canting & Batik Jahe",
        category: "Kriya",
        symbol: "🎨",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Gagang kayu canting
          ctx.strokeStyle = "#78350F";
          ctx.lineWidth = 6;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(35, 35); ctx.lineTo(0, 0);
          ctx.stroke();
          // Nyamplung tembaga
          ctx.fillStyle = "#F59E0B";
          ctx.beginPath();
          ctx.ellipse(-5, -5, 18, 14, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
          // Cucuk canting
          ctx.strokeStyle = "#B45309";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(-18, -18); ctx.quadraticCurveTo(-30, -20, -35, -35);
          ctx.stroke();
          // Tetesan lilin malam
          ctx.fillStyle = "#FCD34D";
          ctx.beginPath();
          ctx.arc(-35, -42, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      },
      {
        id: "icon-calung",
        name: "Calung Bambu",
        category: "Musik",
        symbol: "🎋",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // 4 Bilah Bambu Wulung
          const heights = [70, 60, 50, 40];
          const xOffsets = [-32, -10, 12, 34];
          ctx.fillStyle = "#382110";
          ctx.strokeStyle = "#D97706";
          ctx.lineWidth = 2.5;
          for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.roundRect(xOffsets[i] - 7, 35 - heights[i], 14, heights[i], 4);
            ctx.fill();
            ctx.stroke();
            // Ruas bambu
            ctx.beginPath();
            ctx.moveTo(xOffsets[i] - 7, 35 - heights[i] / 2);
            ctx.lineTo(xOffsets[i] + 7, 35 - heights[i] / 2);
            ctx.stroke();
          }
          // Tabuh calung bersilang
          ctx.strokeStyle = "#F59E0B";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(-25, 40); ctx.lineTo(25, -45);
          ctx.stroke();
          ctx.fillStyle = "#EF4444";
          ctx.beginPath();
          ctx.arc(25, -45, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      },
      {
        id: "icon-lengger",
        name: "Penari Lengger",
        category: "Tari",
        symbol: "💃",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Mahkota kepala cunduk menthul
          ctx.fillStyle = "#F59E0B";
          ctx.beginPath();
          ctx.arc(0, -32, 10, 0, Math.PI * 2);
          ctx.fill();
          // Bunga hias
          ctx.fillStyle = "#EF4444";
          ctx.beginPath();
          ctx.arc(-8, -42, 5, 0, Math.PI * 2);
          ctx.arc(8, -42, 5, 0, Math.PI * 2);
          ctx.arc(0, -48, 6, 0, Math.PI * 2);
          ctx.fill();
          // Selendang sampur melambai
          ctx.strokeStyle = "#FCD34D";
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(-35, 10);
          ctx.quadraticCurveTo(-15, -15, 0, -10);
          ctx.quadraticCurveTo(15, -5, 35, 20);
          ctx.stroke();
          // Badan / Kemben batik soga
          ctx.fillStyle = "#78350F";
          ctx.beginPath();
          ctx.moveTo(-12, -15);
          ctx.lineTo(12, -15);
          ctx.lineTo(20, 35);
          ctx.lineTo(-20, 35);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      },
      {
        id: "icon-slamet",
        name: "Gunung Slamet & Curug",
        category: "Wisata",
        symbol: "⛰️",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Gunung Slamet Utama
          ctx.fillStyle = "#1E3A8A";
          ctx.beginPath();
          ctx.moveTo(0, -45);
          ctx.lineTo(45, 35);
          ctx.lineTo(-45, 35);
          ctx.closePath();
          ctx.fill();
          // Puncak bersalju/kabut putih
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.moveTo(0, -45);
          ctx.lineTo(14, -20);
          ctx.lineTo(6, -24);
          ctx.lineTo(0, -20);
          ctx.lineTo(-8, -26);
          ctx.lineTo(-14, -20);
          ctx.closePath();
          ctx.fill();
          // Aliran Air Terjun Curug Cipendok
          ctx.fillStyle = "#60A5FA";
          ctx.beginPath();
          ctx.moveTo(-4, -10);
          ctx.lineTo(4, -10);
          ctx.lineTo(7, 35);
          ctx.lineTo(-7, 35);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      },
      {
        id: "icon-blangkon",
        name: "Blangkon Banyumasan",
        category: "Busana",
        symbol: "👑",
        render: (ctx, x, y, size, color) => {
          ctx.save();
          ctx.translate(x, y);
          const s = size / 100;
          ctx.scale(s, s);
          // Mahkota blangkon soga
          ctx.fillStyle = "#451A03";
          ctx.strokeStyle = "#1C0D02";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(-40, 15);
          ctx.quadraticCurveTo(0, -40, 40, 15);
          ctx.quadraticCurveTo(0, -10, -40, 15);
          ctx.fill();
          ctx.stroke();
          // Mondholan belakang khas pesisiran
          ctx.fillStyle = "#78350F";
          ctx.beginPath();
          ctx.ellipse(36, 12, 12, 15, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          // Garis batik keemasan
          ctx.strokeStyle = "#F59E0B";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(-25, 5);
          ctx.quadraticCurveTo(0, -22, 25, 5);
          ctx.stroke();
          ctx.restore();
        }
      }
    ],

    // 5. Checklist Kualitas Poster Mandiri
    checklistItems: [
      { id: "chk-title", label: "Judul Utama (Headline) terbaca jelas, singkat, dan mencolok dari jarak jauh" },
      { id: "chk-slogan", label: "Slogan mengandung kalimat persuasif berima atau pilihan kata yang memikat" },
      { id: "chk-visual", label: "Gambar / Ikon budaya relevan dengan produk dan mendukung pesan" },
      { id: "chk-cta", label: "Memuat informasi kontak, lokasi, atau ajakan bertindak (Call to Action)" },
      { id: "chk-layout", label: "Tata letak seimbang, tidak terlalu penuh teks, dan warna teks kontras dengan latar" }
    ]
  },

  // =========================================================================
  // DATA MISI 5 – REFLEKSI, ASESMEN DIRI/TEMAN & SERTIFIKAT DIGITAL
  // =========================================================================
  misi5: {
    overview: {
      title: "Misi 5: Asesmen, Refleksi & Sertifikat Juara",
      subtitle: "Ukur Keberhasilan Karya, Tuliskan Refleksi Belajarmu, dan Unduh Sertifikat Duta Banyumas!",
      intro: "Wis tekan pungkasaning petualangan! Neng kene rika bisa mbiji karyamu dhewek (penilaian diri) utawa karyane kancamu (penilaian teman sebaya), nulis refleksi sinau, lan ngundhuh Sertifikat Duta Promosi Banyumas!"
    },

    // Rubrik Penilaian 4 Kriteria x Skala 1-4
    rubricCriteria: [
      {
        id: "crit-theme",
        title: "1. Kesesuaian Tema & Kearifan Lokal Banyumas",
        desc: "Mengangkat produk kuliner, kriya batik, seni pertunjukan, atau wisata Banyumas secara otentik.",
        levels: [
          { score: 1, label: "Kurang (1)", text: "Karya tidak mengangkat tema atau unsur budaya Banyumas sama sekali." },
          { score: 2, label: "Cukup (2)", text: "Tema Banyumas hanya sekadar tempelan nama tanpa konteks yang jelas." },
          { score: 3, label: "Baik (3)", text: "Tema produk/budaya Banyumas diangkat secara tepat dan informatif." },
          { score: 4, label: "Sangat Baik (4)", text: "Tema kearifan Banyumas diintegrasikan secara mendalam, autentik, dan membanggakan." }
        ]
      },
      {
        id: "crit-slogan",
        title: "2. Kaidah Kebahasaan & Daya Persuasi Slogan",
        desc: "Kepadatan kata, keindahan rima/diksi sensoris, dan kekuatan membujuk audiens.",
        levels: [
          { score: 1, label: "Kurang (1)", text: "Slogan berupa kalimat biasa yang datar tanpa daya bujukan/persuasi." },
          { score: 2, label: "Cukup (2)", text: "Slogan agak panjang dan rima/pilihan kata masih kurang bertenaga." },
          { score: 3, label: "Baik (3)", text: "Slogan ringkas, jelas membujuk, dan memiliki keindahan bunyi/rima yang baik." },
          { score: 4, label: "Sangat Baik (4)", text: "Slogan sangat padat, rima harmonis, diksi sensoris memikat, dan melekat di ingatan." }
        ]
      },
      {
        id: "crit-visual",
        title: "3. Komposisi Visual & Keselarasan Ikon Budaya",
        desc: "Kesesuaian ikon budaya SVG, pemilihan motif latar batik, dan daya tarik visual.",
        levels: [
          { score: 1, label: "Kurang (1)", text: "Visual acak, tidak berhubungan dengan tema, dan mengganggu keterbacaan." },
          { score: 2, label: "Cukup (2)", text: "Ikon atau latar kurang menyatu dengan pesan yang disampaikan." },
          { score: 3, label: "Baik (3)", text: "Ikon budaya relevan dan latar motif batik mendukung suasana promosi." },
          { score: 4, label: "Sangat Baik (4)", text: "Visual ikonik, perpaduan motif batik artistik, harmonis, dan sangat memikat mata." }
        ]
      },
      {
        id: "crit-structure",
        title: "4. Kelengkapan Struktur Teks & Keterbacaan Tata Letak",
        desc: "Memuat Headline, Slogan, Deskripsi, dan CTA; kontras warna teks dengan latar belakang.",
        levels: [
          { score: 1, label: "Kurang (1)", text: "Hanya memuat 1-2 unsur teks dan teks sangat sulit dibaca." },
          { score: 2, label: "Cukup (2)", text: "Memuat beberapa unsur namun tidak ada CTA atau warna teks kurang kontras." },
          { score: 3, label: "Baik (3)", text: "Memuat lengkap 4 unsur teks utama dan tata letak terbaca dengan jelas." },
          { score: 4, label: "Sangat Baik (4)", text: "Struktur teks sangat lengkap, CTA tajam, kontras warna sempurna (WCAG AA), tata letak profesional." }
        ]
      }
    ],

    // Pertanyaan Refleksi Siswa
    reflectionQuestions: [
      {
        id: "ref-1",
        label: "1. Dina kiye inyong sinau akeh babagan (Hari ini saya belajar banyak tentang):",
        placeholder: "Tuliskan konsep atau pengetahuan baru tentang slogan, iklan, dan poster yang kamu pahami..."
      },
      {
        id: "ref-2",
        label: "2. Bagian petualangan sing paling nyenengna kanggone inyong yaiku (Bagian paling seru bagi saya):",
        placeholder: "Ceritakan aktivitas yang paling membuatmu bersemangat (misal: bedah bahasa, game susun slogan, deteksi hoaks, atau mendesain poster)..."
      },
      {
        id: "ref-3",
        label: "3. Babagan sing esih gawe inyong penasaran utawa kepengin disinauni maning (Yang masih membuat penasaran):",
        placeholder: "Tuliskan hal yang masih ingin kamu eksplorasi lebih jauh untuk memajukan UMKM daerahmu..."
      }
    ]
  },

  // =========================================================================
  // DATA KHUSUS HALAMAN PENDIDIK / GURU (PANDUAN KURIKULUM, KUNCI, CRT)
  // =========================================================================
  guruData: {
    tujuanFaseD: [
      { kode: "TP.1", materi: "Menganalisis Informasi Teks Persuasif", deskripsi: "Peserta didik mampu mengidentifikasi ide pokok, tujuan komunikasi, serta membedakan karakteristik khas slogan, iklan, dan poster dalam konteks kearifan lokal Banyumas." },
      { kode: "TP.2", materi: "Menelaah Kaidah Kebahasaan", deskripsi: "Peserta didik mampu menganalisis kalimat persuasif, kalimat imperatif, diksi sensoris, rima, dan majas pada contoh teks promosi UMKM dan budaya Banyumas." },
      { kode: "TP.3", materi: "Literasi Kritis Media Promosi", deskripsi: "Peserta didik mampu menilai kebenaran dan etika informasi promosi serta membedakan iklan jujur/akuntabel dengan hoaks promosi yang menyesatkan." },
      { kode: "TP.4", materi: "Mencipta Karya Kreatif (PjBL)", deskripsi: "Peserta didik mampu merancang slogan orisinal dan poster digital persuasif bernuansa kearifan lokal menggunakan prinsip tata letak dan keterbacaan yang efektif." },
      { kode: "TP.5", materi: "Refleksi & Asesmen Rekan Sebaya", deskripsi: "Peserta didik mampu mengevaluasi karya diri dan teman sebaya secara objektif berbasis rubrik 4 kriteria asesmen autentik." }
    ],

    alurPjBLRinci: [
      { langkah: "1. Penentuan Pertanyaan Mendasar", aktivitasGuru: "Menayangkan fenomena UMKM lokal Banyumas dan memantik pertanyaan pemantik: 'Kepriwe carane produk lokal kita dadi kondhang neng kalangan nom-noman?'", aktivitasSiswa: "Mengamati studi kasus dan mengidentifikasi potensi daerah yang perlu dipromosikan." },
      { langkah: "2. Mendesain Perencanaan Proyek", aktivitasGuru: "Membimbing siswa memilih objek budaya/kuliner dan menentukan target audiens yang relevan.", aktivitasSiswa: "Memilih produk (mendoan, soto, batik, dll.) dan memetakan nilai keunggulan unik (USP)." },
      { langkah: "3. Menyusun Jadwal & Riset Ide", aktivitasGuru: "Mengarahkan siswa menggunakan fitur Slogan Generator Bantu sebagai scaffolding kreatif.", aktivitasSiswa: "Mengumpulkan kata kunci sensoris, merangkai kerangka rumpang, dan menulis draf slogan orisinal." },
      { langkah: "4. Memonitor Pembuatan Karya", aktivitasGuru: "Mendampingi siswa dalam studio Canvas Poster Maker (pemilihan latar batik, ikon SVG, tata letak).", aktivitasSiswa: "Mendesain poster secara mandiri dan menyesuaikan proporsi tipografi serta kontras warna." },
      { langkah: "5. Menguji Hasil (Asesmen)", aktivitasGuru: "Memfasilitasi penilaian diri dan penilaian teman sebaya berbasis rubrik interaktif.", aktivitasSiswa: "Mengisi rubrik 4 kriteria asesmen dan memverifikasi kelengkapan checklist karya." },
      { langkah: "6. Evaluasi Pengalaman Belajar", aktivitasGuru: "Mengajak siswa merefleksikan proses belajar dan mengapresiasi pencapaian Duta Promosi.", aktivitasSiswa: "Menuliskan refleksi diri, mengunduh poster PNG, dan mencetak Sertifikat Duta Banyumas." }
    ],

    kunciJawabanLengkap: {
      misi1: [
        { no: 1, soal: "Karakteristik teks 'Anget Mendoane, Guyub Wargane!'", jawaban: "A. Slogan (pendek, padat makna, rima harmonis -e, semboyan gotong royong)." },
        { no: 2, soal: "Unsur paling dominan pada media Poster", jawaban: "B. Kekuatan gambar ilustrasi berukuran besar dan warna mencolok di ruang publik." },
        { no: 3, soal: "Contoh kalimat imperatif dalam wisata Banyumas", jawaban: "C. 'Kunjungi Baturraden akhir pekan ini dan rasakan kesegarannya!' (kata kerja perintah ajakan)." }
      ],
      misi3Kuis: [
        { id: "q-1", topik: "Media cepat ruang publik", kunci: "B", alasan: "Poster dirancang untuk dibaca 3–5 detik dari kejauhan." },
        { id: "q-2", topik: "Kalimat 'Mayuh padha...'", kunci: "C", alasan: "Kalimat imperatif ajakan tindakan kolektif khas Banyumas." },
        { id: "q-3", topik: "Kelemahan slogan Pak Bejo", kunci: "B", alasan: "Terlalu panjang, bertele-tele, tidak ada rima/keindahan bunyi." },
        { id: "q-4", topik: "Curug Cipendok menyapa jiwa", kunci: "B", alasan: "Majas personifikasi meletakkan sifat manusia pada air terjun." },
        { id: "q-5", topik: "Ketiadaan kontak pada poster", kunci: "B", alasan: "Masyarakat kesulitan mencari info valid dan kredibilitas turun." },
        { id: "q-6", topik: "Persuasi berbasis CRT (Batik)", kunci: "B", alasan: "Mengaktifkan kebanggaan identitas budaya dan nilai leluhur." },
        { id: "q-7", topik: "Klaim sembuh semalam", kunci: "C", alasan: "Klaim mutlak instan melanggar etika periklanan dan medis." },
        { id: "q-8", topik: "Rancak Calung, Semarak Lengger", kunci: "B", alasan: "Keselarasan rima memantulkan dinamika musikal calung." },
        { id: "q-9", topik: "Pesan via WhatsApp...", kunci: "C", alasan: "Struktur Call to Action (CTA) penuntun aksi beli." },
        { id: "q-10", topik: "Kampanye cagar budaya remaja", kunci: "B", alasan: "Format vertikal dinamis relevan dengan dunia gawai siswa." },
        { id: "q-11", topik: "Daya tarik kata 'kencot'", kunci: "B", alasan: "Kosa kata lokal akrab memantik resonansi emosional nyata." },
        { id: "q-12", topik: "Kritik poster Serayu", kunci: "B", alasan: "Perlu slogan penegas dan kalimat ajakan solusi konkret." }
      ],
      misi3Hoaks: [
        { kasus: "1. Minyak Sereh sembuhkan kanker 2 hari", verdict: "HOAKS", alasan: "Pelanggaran klaim medis mutlak obat tradisional BPOM." },
        { kasus: "2. Getuk Goreng berizin P-IRT & Halal", verdict: "IKLAN BENERAN", alasan: "Transparan dan mencantumkan nomor legalitas resmi." },
        { kasus: "3. Tiket Baturraden gratis seumur hidup via link", verdict: "HOAKS", alasan: "Phishing berantai pencurian data medsos." },
        { kasus: "4. Diskon 20% seragam batik warung soto", verdict: "IKLAN BENERAN", alasan: "Promosi kreatif etis mendukung kebanggaan budaya." },
        { kasus: "5. Konser calung berhadiah mobil tanpa syarat", verdict: "HOAKS", alasan: "Iming-iming tidak masuk akal secara finansial/logika." },
        { kasus: "6. Spanduk mendoan digoreng dadakan cabai rawit lokal", verdict: "IKLAN BENERAN", alasan: "Faktual mengenai cara pengolahan dan bahan baku." }
      ],
      misi3Matching: [
        { item: "Semboyan komitmen/nilai moral ringkas", jenis: "Slogan" },
        { item: "Plakat besar di halte fokus ilustrasi mencolok", jenis: "Poster" },
        { item: "Promosi komersial memadukan video, audio, teks, WA CTA", jenis: "Iklan" },
        { item: "'Anget Mendoane, Guyub Wargane!'", jenis: "Slogan" },
        { item: "Pengumuman aksi sosial 'HUTAN SLAMET LESTARI...'", jenis: "Poster" },
        { item: "Brosur diskon 30% batik tulis Jahe Puger", jenis: "Iklan" }
      ]
    },

    dimensiCRT: [
      {
        dimensi: "1. Validasi & Afirmasi Budaya (Cultural Validation)",
        penerapan: "Kuliner mendoan, soto sokaraja, getuk goreng, batik Banyumasan, dan kesenian calung lengger bukan sekadar contoh sampingan, melainkan sumber teks primer (living curriculum) yang dihargai setara dengan teks sastra nasional."
      },
      {
        dimensi: "2. Kesadaran Kritis (Critical Consciousness)",
        penerapan: "Siswa diajak tidak sekadar menjadi konsumen iklan pasif, melainkan detektif bahasa yang kritis menguji etika periklanan (Iklan Jujur vs Hoaks) dan mengkritisi kelestarian lingkungan lereng Gunung Slamet dan Sungai Serayu."
      },
      {
        dimensi: "3. Pemberdayaan Agen Perubahan (Cultural Agency)",
        penerapan: "Melalui model PjBL, siswa diposisikan sebagai 'Duta Promosi Banyumas' yang memproduksi karya nyata untuk memberdayakan UMKM dan melestarikan warisan budaya leluhurnya sendiri."
      }
    ]
  }
};

// Export ke window agar dapat diakses global
window.APP_DATA = APP_DATA;

