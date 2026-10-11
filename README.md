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
- **Dual-Canvas 2D Graphics Engine**:
  - **Studio Poster Maker (900 x 1200 px - Rasio 3:4)**: Menyediakan 6 motif latar batik/Banyumas, 8 ikon budaya SVG orisinal, kustomisasi tipografi, dan fitur unduh langsung ke gambar **PNG High-Resolution**.
  - **Sertifikat Digital Duta Banyumas (800 x 600 px)**: Mencetak sertifikat resmi dengan nama siswa, total perolehan XP, gelar kelulusan, dan stempel cap basah Kang Mendhoan yang siap diunduh PNG atau dicetak PDF.
- **Web Audio API Sound Synthesizer**: Menghasilkan efek nada ceria laras slendro gamelan tanpa memerlukan berkas MP3 eksternal, menghemat kuota internet siswa.
- **Gamifikasi Terintegrasi**: Peta petualangan 5 misi, sistem poin XP, 5 tingkatan level (*Santri Sinau* s.d. *Maestro Ngiklan*), 4 lencana prestasi, dan efek konfeti kanvas.

---

## 📂 3. Struktur File Proyek

```text
jago-ngiklan-banyumas/
├── index.html              # Struktur utama antarmuka SPA & semantik aksesibel
├── manifest.json           # Web App Manifest untuk instalasi PWA di Android
├── sw.js                   # Service Worker cache offline
├── README.md               # Dokumentasi lengkap & panduan guru
├── css/
│   └── style.css           # Desain tema batik Banyumas, layout responsif & cetak
└── js/
    ├── data.js             # PUSAT DATA: Bank Soal, Materi, Glosarium, Rubrik, GuruData
    └── app.js              # LOGIKA: State Manager, Router, Audio, Canvas 2D Engine
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

## 📊 7. Panduan Integrasi Google Form & Google Sheets (Rekap Nilai Otomatis)

Website ini dilengkapi sistem **pengiriman data otomatis ke Google Form guru** tanpa perlu server khusus! Saat siswa menekan tombol *"Simpan Penilaian & Klaim XP"* di Misi 5, seluruh data hasil belajar siswa (nama, kelas, total XP, skor rubrik 4 kriteria, nilai akhir 0–100, catatan refleksi, dan waktu pengerjaan) akan langsung dikirimkan dan masuk ke Google Spreadsheet guru.

Fitur ini juga dilengkapi **antrean offline cerdas (*Offline Sync Queue*)**: jika siswa berada di daerah minim sinyal internet saat menyimpan penilaian, data tetap tersimpan aman di `localStorage` perangkat siswa dan dikirimkan secara otomatis begitu gawai terhubung kembali ke internet.

---

### Langkah demi Langkah Menyiapkan Google Form Guru:

#### Langkah 1: Buat Google Form Baru
1. Buka [Google Forms](https://forms.google.com/) dan buat formulir kosong (*Blank*).
2. Beri judul formulir, misalnya: `Asesmen Jago Ngiklan Banyumas - Kelas 8`.
3. Buat **7 pertanyaan** berturut-turut dengan format sebagai berikut:
   1. **Pertanyaan 1**: Nama Lengkap Siswa (*Jawaban Singkat / Short Answer*)
   2. **Pertanyaan 2**: Kelas (*Jawaban Singkat / Short Answer*)
   3. **Pertanyaan 3**: Total XP Belajar (*Jawaban Singkat / Short Answer*)
   4. **Pertanyaan 4**: Skor Rubrik (*Jawaban Singkat / Short Answer*)
   5. **Pertanyaan 5**: Nilai Akhir & Predikat (*Jawaban Singkat / Short Answer*)
   6. **Pertanyaan 6**: Catatan Refleksi Siswa (*Paragraf / Paragraph*)
   7. **Pertanyaan 7**: Waktu Pengiriman (*Jawaban Singkat / Short Answer*)

#### Langkah 2: Hubungkan ke Google Sheets (Agar Nilai Menjadi Tabel Otomatis)
1. Pada halaman formulir guru, klik tab **Tanggapan (*Responses*)**.
2. Klik tombol hijau **Tautkan ke Spreadsheet (*Link to Sheets*)**.
3. Pilih opsi **Buat spreadsheet baru**, lalu klik **Buat**.
4. Sekarang, setiap siswa yang menyimpan penilaian di web akan otomatis tercatat sebagai baris data baru di Google Sheets Anda.

#### Langkah 3: Dapatkan ID Kolom (`entry.xxxx`) dan URL `formResponse`
1. Di halaman edit Google Form, klik ikon titik tiga (⋮) di pojok kanan atas (di sebelah tombol *Kirim*).
2. Pilih **Dapatkan tautan yang sudah diisi (*Get pre-filled link*)**.
3. Pada halaman pratinjau yang terbuka, ketikkan teks penanda unik pada setiap kolom:
   - Kolom Nama: ketik `tesnama`
   - Kolom Kelas: ketik `teskelas`
   - Kolom Total XP: ketik `tesxp`
   - Kolom Skor Rubrik: ketik `tesrubrik`
   - Kolom Nilai: ketik `tesnilai`
   - Kolom Refleksi: ketik `tesrefleksi`
   - Kolom Waktu: ketik `teswaktu`
4. Gulir ke bawah dan klik tombol **Dapatkan tautan (*Get link*)**, lalu klik **Salin tautan (*Copy link*)**.
5. Tempelkan tautan tersebut ke Notepad. Strukturnya akan tampak seperti ini:
   ```text
   https://docs.google.com/forms/d/e/1FAIpQLScABC123xyz.../viewform?usp=pp_url&entry.123456789=tesnama&entry.987654321=teskelas&entry.11223344=tesxp&entry.55667788=tesrubrik&entry.99001122=tesnilai&entry.33445566=tesrefleksi&entry.77889900=teswaktu
   ```
6. Ambil dua bagian penting dari tautan tersebut:
   - **Ganti kata `/viewform` menjadi `/formResponse`** pada URL awal.
   - Catat setiap kode angka **`entry.xxxx`** yang berada sebelum teks penanda masing-masing pertanyaan.

#### Langkah 4: Masukkan Konfigurasi ke Berkas `js/data.js`
Buka berkas `js/data.js` di folder proyek, lalu perbarui blok `googleFormConfig`:

```javascript
  googleFormConfig: {
    enabled: true, // Biarkan true agar sinkronisasi aktif

    // Ganti dengan URL formResponse Anda:
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScABC123xyz.../formResponse",

    // Ganti dengan kode entry yang Anda dapatkan di Langkah 3:
    entries: {
      nama: "entry.123456789",       // Pertanyaan 1: Nama Siswa
      kelas: "entry.987654321",      // Pertanyaan 2: Kelas
      totalXp: "entry.11223344",     // Pertanyaan 3: Total XP Belajar
      skorRubrik: "entry.55667788",  // Pertanyaan 4: Skor Rubrik
      nilai: "entry.99001122",       // Pertanyaan 5: Nilai Akhir & Predikat
      refleksi: "entry.33445566",    // Pertanyaan 6: Catatan Refleksi Siswa
      waktu: "entry.77889900"        // Pertanyaan 7: Waktu Pengiriman
    }
  },
```

Simpan berkas `js/data.js`. Selesai! Kini seluruh hasil belajar siswa otomatis terekap rapi di Google Sheets tanpa perlu memeriksa gawai siswa satu per satu.

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
