# Jago Ngiklan Banyumas: Petualangan Slogan, Iklan & Poster
### Karya Inovasi Media Pembelajaran Interaktif – Pendidikan Profesi Guru (PPG)

![Mata Pelajaran](https://img.shields.io/badge/Mata%20Pelajaran-Bahasa%20Indonesia-orange)
![Jenjang](https://img.shields.io/badge/Jenjang-SMP%20Kelas%208%20(Fase%20D)-green)
![Kurikulum](https://img.shields.io/badge/Kurikulum-Kurikulum%20Merdeka-blue)
![Pendekatan](https://img.shields.io/badge/Pendekatan-CRT%20%26%20PjBL-purple)
![Teknologi](https://img.shields.io/badge/Teknologi-Pure%20Vanilla%20Web%20(PWA)-red)

---

## 📖 1. Gambaran Umum Proyek

**"Jago Ngiklan Banyumas"** adalah media pembelajaran berbasis web interaktif mandiri yang dikembangkan untuk memfasilitasi pembelajaran **Bahasa Indonesia Kelas 8 SMP (Fase D Kurikulum Merdeka) Bab 2: Slogan, Iklan, dan Poster**.

Media ini memadukan dua pendekatan pedagogis utama:
1. **Culturally Responsive Teaching (CRT)**: Mengintegrasikan kearifan lokal budaya Banyumas (*Tempe Mendoan, Soto Sokaraja, Getuk Goreng, Batik Jahe Puger/Soga, Kesenian Calung & Tari Lengger, Curug Cipendok, Baturraden, serta filosofi keterbukaan/kejujuran Cablaka*) sebagai sumber belajar bermakna (*living curriculum*).
2. **Project-Based Learning (PjBL)**: Siswa tidak hanya membaca materi, melainkan ditantang menjadi **"Duta Promosi Banyumas"** yang meriset nilai keunggulan produk UMKM lokal, merumuskan slogan persuasif, mendesain poster digital beresolusi tinggi, dan melakukan penilaian karya teman sebaya.

---

## ✨ 2. Keunggulan Teknis & Fitur Unggulan

- **Pure Vanilla Web (Zero-Framework)**: Dibangun 100% menggunakan HTML5, CSS3, dan JavaScript murni tanpa ketergantungan framework berat (*React, Vue, Tailwind, atau bundler*), sehingga sangat cepat dimuat dan ramah memori HP.
- **Mobile-First & Layar 360px Friendly**: Didesain responsif khusus untuk gawai Android peserta didik dengan navigasi bawah (*Bottom Nav*), tombol sentuh minimal 44–48px, dan kontras warna standar **WCAG AA / AAA**.
- **Offline-First Ready (PWA)**: Dilengkapi `manifest.json` dan Service Worker (`sw.js`) dengan strategi caching *stale-while-revalidate*. Siswa dapat tetap belajar saat koneksi internet sekolah/rumah tidak stabil.
- **Pemandu Budaya Kang Bawor**: Tokoh Punakawan khas Banyumasan berkarakter polos, jujur, *cablaka*, dan humoris yang memandu siswa di seluruh tahapan belajar dengan animasi SVG orisinal (lambaian tangan, kedip mata, lompat ceria) serta sapaan dialek *ngapak* berglosarium interaktif.
- **Peta Petualangan Kartun Banyumas**: Ilustrasi peta bergaya kartun semi-realistis yang memuat landmark legendaris (Puncak Gunung Slamet 3.428 mdpl, Curug Baturraden, terasering sawah, Sungai Serayu) dengan 5 pin penanda misi interaktif yang beranimasi halus.
- **Lencana Medali Berkilau**: Desain medali penghargaan 3D berkilau untuk 5 tingkat kemahiran (*Santri Sinau*, *Sahabat Kang Bawor*, *Pendekar Slogan*, *Juragan Promosi*, hingga *Duta Promosi Banyumas*).
- **Dual-Canvas 2D Graphics Engine**:
  - **Studio Poster Maker (900 x 1200 px - Rasio 3:4)**: Menyediakan 8 latar pemandangan kartun dan motif batik Banyumasan, 18 stiker budaya berdetail tinggi (kuliner mendoan, soto sokaraja, getuk goreng, nopia, kesenian calung, lengger, wayang Kang Bawor, kendi, bintang, pita, diskon, dll.), kontrol multi-stiker (geser sentuh, perbesar-perkecil, putar, tumpuk depan/belakang, hapus), 5 bingkai dekoratif, dan 4 preset tata letak poster siap pakai yang dapat diunduh menjadi **PNG High-Resolution** langsung dari HP maupun laptop.
  - **Sertifikat Digital Duta Banyumas (800 x 600 px)**: Mencetak sertifikat penghargaan resmi dengan nama siswa, total perolehan XP, gelar kelulusan, tanda tangan Kang Bawor, dan stempel resmi digital yang siap diunduh PNG atau dicetak PDF.
- **Web Audio API Sound Synthesizer**: Menghasilkan efek nada ceria laras slendro gamelan tanpa memerlukan berkas MP3 eksternal, menghemat kuota internet siswa.
- **Gamifikasi Terintegrasi**: Peta petualangan 5 misi, sistem poin XP, 5 tingkatan level, lencana prestasi, dan efek konfeti kanvas.

---

## 📂 3. Struktur File Proyek

```text
jago-ngiklan-banyumas/
├── index.html              # Struktur utama antarmuka SPA & semantik aksesibel
├── manifest.json           # Web App Manifest untuk instalasi PWA di Android
├── sw.js                   # Service Worker cache offline v5
├── README.md               # Dokumentasi lengkap & panduan guru
├── assets/                 # Aset grafis orisinal SVG kartun semi-realistis
│   ├── maskot/             # Kang Bawor 7-pose suite (menyapa, berpikir, semangat, kreasi, bangga, senang, semangati, favicon, ikon PWA)
│   ├── icons/              # Ilustrasi peta kartun Banyumas & 5 medali berkilau
│   └── poster/             # Latar pemandangan & ornamen kanvas poster
├── css/
│   └── style.css           # Desain tema batik Banyumas, animasi Kang Bawor, layout responsif & cetak
└── js/
    ├── data.js             # PUSAT DATA: 18 Stiker, 8 Latar, 5 Bingkai, 4 Preset, Bank Soal, Glosarium
    └── app.js              # LOGIKA: Multi-sticker Canvas Engine, Router, Audio, State Management
```

---

## 🚀 4. Cara Menjalankan Aplikasi Secara Lokal

1. **Unduh / Clone Repositori**:
   Pastikan seluruh folder `jago-ngiklan-banyumas` berada di komputermu.
2. **Buka Langsung di Peramban**:
   - Cukup klik ganda berkas `index.html` untuk membukanya di Google Chrome, Microsoft Edge, atau Mozilla Firefox.
3. **Menggunakan Local Server (Opsional, untuk Menguji Service Worker)**:
   - Jika menggunakan VS Code: Pasang ekstensi **Live Server**, lalu klik kanan `index.html` > **Open with Live Server**.
   - Atau jalankan perintah sederhana di terminal:
     ```bash
     # Jika terpasang Python 3:
     python -m http.server 8080
     ```
     Lalu buka `http://localhost:8080` di browser.

---

## 🌐 5. Panduan Publikasi / Deploy ke Internet

Karena web ini dibuat dengan HTML, CSS, dan JS murni, media ini dapat dipublikasikan secara **100% gratis** tanpa proses kompilasi (*build step*).

### A. Deploy ke GitHub Pages (Sangat Direkomendasikan untuk Portofolio PPG)

1. **Buat Repositori Baru di GitHub**:
   - Masuk ke akun [GitHub](https://github.com/).
   - Klik tombol **New Repository**.
   - Beri nama repositori, misalnya: `jago-ngiklan-banyumas`.
   - Pilih **Public**, lalu klik **Create repository**.
2. **Unggah Berkas Proyek**:
   - **Cara 1 (Lewat Web GitHub)**: Pada halaman repositori baru, klik tautan *uploading an existing file*, seret seluruh isi folder `jago-ngiklan-banyumas` (*index.html, manifest.json, sw.js, folder css, folder js*), lalu klik **Commit changes**.
   - **Cara 2 (Lewat Git CLI)**:
     ```bash
     cd jago-ngiklan-banyumas
     git init
     git add .
     git commit -m "Inovasi Pembelajaran PPG: Jago Ngiklan Banyumas"
     git branch -M main
     git remote add origin https://github.com/[username-anda]/jago-ngiklan-banyumas.git
     git push -u origin main
     ```
3. **Aktifkan Fitur GitHub Pages**:
   - Masuk ke tab **Settings** repositori di GitHub.
   - Pilih menu **Pages** di bilah sisi kiri (*Sidebar*).
   - Pada bagian **Build and deployment > Source**, pilih **Deploy from a branch**.
   - Pada bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. **Selesai!**:
   - Tunggu sekitar 1–2 menit. Tautan publikasi media belajarmu akan aktif di:
     `https://[username-anda].github.io/jago-ngiklan-banyumas/`

---

### B. Deploy ke Netlify (Paling Cepat – Drag & Drop)

1. Buka laman [Netlify Drop](https://app.netlify.com/drop).
2. Masuk menggunakan akun Google atau GitHub.
3. Seret (*drag and drop*) folder `jago-ngiklan-banyumas` langsung ke kotak unggah Netlify.
4. Dalam hitungan detik, Netlify akan memberikan URL aktif (misalnya `https://jago-ngiklan-banyumas.netlify.app`).

---

## ✏️ 6. Panduan Guru: Cara Mengedit & Menambah Konten di `js/data.js`

Semua konten materi, soal latihan, studi kasus hoaks, dan rubrik sengaja **dipisahkan di dalam file `js/data.js`**. Guru atau mahasiswa PPG dapat memperbarui konten tanpa perlu mengubah kode logika JavaScript sama sekali!

### A. Mengedit atau Menambah Soal Kuis Pilihan Ganda (Misi 3)

Buka `js/data.js`, lalu cari bagian `misi3.quizPool`. Format setiap soal adalah sebagai berikut:

```javascript
{
  id: "q-13", // Berikan ID unik berikutnya
  difficulty: "Sedang", // Pilihan: "Mudah", "Sedang", "Sulit"
  difficultyBadge: "Level Sedang",
  badgeColor: "#D97706", // Warna badge: #166534 (Mudah), #D97706 (Sedang), #DC2626 (Sulit)
  scenario: "Tuliskan skenario konteks lokal Banyumas di sini...",
  question: "Tuliskan kalimat pertanyaan kuis di sini...",
  options: [
    { text: "A. Pilihan jawaban A", isCorrect: false, feedback: "Alasan mengapa A keliru..." },
    { text: "B. Pilihan jawaban B", isCorrect: true,  feedback: "Penjelasan mengapa B benar..." },
    { text: "C. Pilihan jawaban C", isCorrect: false, feedback: "Alasan mengapa C keliru..." },
    { text: "D. Pilihan jawaban D", isCorrect: false, feedback: "Alasan mengapa D keliru..." }
  ],
  explanation: "Pembahasan ringkas konsep kaidah kebahasaannya."
}
```
> **Catatan Guru**: Sistem secara otomatis akan mengacak (*shuffle*) dan mengambil 10 soal dari daftar *pool* ini setiap kali siswa memulai kuis.

---

### B. Menambah Kasus Literasi Kritis: "Iklan Beneran vs Hoaks Promosi" (Misi 3)

Cari bagian `misi3.hoaxVsReal` di `js/data.js`:

```javascript
{
  id: "hvr-7",
  title: "Kasus 7: Nama Produk atau Layanan",
  klaim: "Tuliskan teks kalimat promosi yang beredar di media sosial atau selebaran...",
  verdict: "hoaks", // Pilihan: "hoaks" atau "beneran"
  verdictLabel: "HOAKS PROMOSI / KLAIM MENYESATKAN",
  alasan: "Penjelasan mengapa informasi ini tergolong hoaks atau iklan etis...",
  tipsKritis: "Tips praktis bagi siswa untuk mendeteksi kebenaran promosi ini..."
}
```

---

### C. Menambah Produk Lokal Baru pada Slogan Generator (Misi 4)

Cari bagian `misi4.sloganGenerator.products` di `js/data.js`:

```javascript
{
  id: "nopia",
  name: "Kue Nopia & Mino Banyumas",
  icon: "🥮",
  keywords: ["renyah", "kulit tipis", "gula merah lumer", "panggang genthong", "legit", "khas banyumas"],
  usp: "Kue bulat berongga dengan lelehan gula kelapa legit yang dipanggang tradisional menggunakan genthong tanah liat.",
  hooks: ["Manis Legit Nopia Melekat di Hati", "Renyah Kulitnya, Lumer Gula Merahnya!"]
}
```

---

### D. Menyesuaikan Kriteria Rubrik Asesmen (Misi 5)

Cari bagian `misi5.rubricCriteria` di `js/data.js`. Setiap kriteria memiliki 4 tingkat capaian skor (skala 1 s.d. 4) dengan deskripsi kualitatif yang jelas:

```javascript
{
  id: "crit-custom",
  title: "5. Nilai Kerapian & Estetika Tata Letak",
  desc: "Keseimbangan proporsi ruang kosong dan keterbacaan teks.",
  levels: [
    { score: 1, label: "Kurang (1)", text: "Tata letak berantakan dan teks menumpuk." },
    { score: 2, label: "Cukup (2)", text: "Tata letak cukup rapi namun hierarki judul belum jelas." },
    { score: 3, label: "Baik (3)", text: "Tata letak seimbang dan font terbaca dengan nyaman." },
    { score: 4, label: "Sangat Baik (4)", text: "Tata letak sangat harmonis, profesional, dan kontras sempurna." }
  ]
}
```

---

## 🔒 7. Keamanan Pembelajaran: Proteksi Kunci Jawaban dengan PIN Guru

Untuk mencegah siswa melihat bocoran kunci jawaban saat mengakses media pembelajaran ini di kelas maupun di rumah, tab **"🔑 3. Kunci Jawaban Lengkap"** pada menu **Panduan Guru** dilindungi dengan sistem **PIN Keamanan Pendidik**:
- **Tampilan Siswa**: Siswa hanya akan melihat kotak pengaman bertanda gembok terkunci. Teks kunci jawaban sama sekali tidak ada di halaman sebelum diverifikasi.
- **Akses Guru Pengampu**: Guru cukup memasukkan PIN default: **`guru2026`** (atau **`2026`**), lalu klik **Buka Kunci 🔓**.
- Seluruh kunci jawaban (Mini-Cek Misi 1, Kuis 10 Soal Misi 3, Analisis Iklan vs Hoaks, dan Matching Game) akan terbuka secara dinamis.
- Terdapat tombol **"🔒 Kunci Kembali"** untuk mengunci kembali kunci jawaban kapan saja setelah digunakan oleh guru.

---

## 👨‍🏫 8. Informasi Pengembang & Karya Inovasi PPG

- **Media Pembelajaran**: Jago Ngiklan Banyumas
- **Mata Pelajaran**: Bahasa Indonesia SMP Kelas 8 (Fase D Kurikulum Merdeka)
- **Materi Pokok**: Bab 2 – Teks Slogan, Iklan, dan Poster
- **Pengembang**: Arif Setiyono
- **Nomor Peserta PPG / NIM**: 2501640512
- **Bidang Studi**: Pendidikan Bahasa Indonesia
- **Perguruan Tinggi (LPTK)**: Universitas Muhammadiyah Purwokerto
- **Tahun Pelaksanaan**: 2026

*Karya inovasi ini dirancang dengan integritas akademik untuk memajukan pendidikan nasional yang berakar pada kearifan budaya daerah Indonesia.*
