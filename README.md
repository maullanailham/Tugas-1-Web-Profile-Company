# PetPals — Web Company Profile

-= V1 =-

Deskripsi
PetPals adalah proyek website company profile sederhana yang menampilkan informasi tentang layanan, tim, kontak, dan portofolio perusahaan yang bergerak di bidang perawatan hewan (contoh). Situs ini dibuat sebagai tugas mata kuliah Web Company Profile.

Fitur
- Halaman beranda dengan banner dan ringkasan perusahaan
- Halaman layanan/produk
- Halaman tentang kami (visi, misi, tim)
- Halaman kontak dengan formulir sederhana atau informasi kontak
- Responsif untuk tampilan perangkat mobile dan desktop

Teknologi
- HTML5
- CSS 
- JavaScript 
- PHP
- Asset: gambar, ikon, font (lokal atau CDN)


Struktur Proyek (contoh)
- index.html
- about.html
- services.html
- contact.html
- assets/
  - css/ (style.css)
  - js/ (script.js)
  - images/ (logo, banner, team, dll)
- README.md

Panduan Pengembangan Singkat
- Edit konten halaman HTML untuk memperbarui teks dan gambar.
- Perbarui `assets/css/style.css` untuk mengubah tampilan.
- Tambahkan atau modifikasi `assets/js/script.js` untuk interaksi (mis. menu responsif, validasi form).
- Pastikan semua aset (gambar, font) berada di folder assets dan path relatif di HTML sesuai.

Deployment
- Situs statis ini dapat di-deploy ke GitHub Pages, Netlify, atau Vercel.
- Untuk GitHub Pages: upload repository ke GitHub dan aktifkan Pages pada branch utama.
- Untuk Netlify/Vercel: drag & drop folder build atau hubungkan repository.

Kontribusi
- Untuk tugas/penambahan: buat branch baru, lakukan perubahan, dan ajukan pull request.
- Sertakan deskripsi perubahan dan file terkait.

Lisensi
- Jika ini proyek tugas, gunakan lisensi sesuai kebutuhan (mis. MIT untuk contoh). Jika tidak ingin menambahkan lisensi, catat bahwa semua hak cipta milik pembuat.

Kontak
- Nama: [Nama Anda]
- Email: [email@contoh.com]
- Catatan: Sesuaikan bagian kontak dan informasi perusahaan dengan data nyata.

Peran PHP dalam proyek ini
- Untuk apa PHP digunakan:
  - Memproses form kontak (validasi sisi server, kirim email atau simpan ke basis data).
  - Menangani upload file (mis. gambar tim atau portofolio) dengan validasi ukuran/tipe.
  - Menyimpan data sederhana ke database (MySQL) atau file jika ingin menyimpan pesan dari pengunjung.
  - Mengelola sesi dan autentikasi jika Anda menambahkan panel admin sederhana untuk mengubah konten.
  - Menyediakan server-side includes atau templating sederhana agar header/footer bisa dipakai ulang tanpa duplikasi HTML.

- Contoh workflow singkat (contact form):
  1. Form HTML di contact.html mengirim POST ke contact.php.
  2. contact.php melakukan validasi (nama, email, pesan).
  3. Jika valid: kirim email menggunakan mail() atau library (PHPMailer) dan/atau simpan ke database.
  4. Redirect ke halaman terima kasih atau tampilkan pesan sukses/eror.

- Cara menjalankan fitur PHP secara lokal:
  - Jika Anda hanya membuka index.html di browser, bagian PHP tidak berjalan. Untuk menggunakan PHP:
    - Gunakan PHP built-in server:
      php -S localhost:8000
      lalu buka http://localhost:8000
    - Atau gunakan paket seperti XAMPP/WAMP/LAMP dan tempatkan folder proyek di direktori htdocs/www.
  - Pastikan file PHP (mis. contact.php) berada di root atau path yang sesuai dan form action mengarah ke file tersebut.

- Keamanan & catatan singkat:
  - Selalu lakukan sanitasi dan validasi input sisi server.
  - Batasi tipe/ukuran file saat menerima upload.
  - Jangan menaruh kredensial DB langsung di file yang bisa diakses publik; gunakan konfigurasi yang aman.
  - Untuk pengiriman email yang handal, pertimbangkan PHPMailer atau layanan pihak ketiga (SendGrid, Mailgun).

Contoh rencana file PHP (contoh nama saja)
- contact.php  -> memproses form kontak dan mengirim email / menyimpan pesan
- upload.php   -> menangani upload gambar (jika fitur ada)
- admin/       -> panel admin sederhana (login.php, dashboard.php)