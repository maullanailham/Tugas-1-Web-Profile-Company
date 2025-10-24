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

Kontak
- Nama: [Nama]
- Email: [email@contoh.com]
- Catatan: Sesuaikan bagian kontak dan informasi perusahaan dengan data nyata.

Peran PHP dalam proyek ini
- Untuk apa PHP digunakan:
  - Memproses form kontak (validasi sisi server, kirim email atau simpan ke basis data).
  - Menangani upload file (mis. gambar tim atau portofolio) dengan validasi ukuran/tipe.
  - Menyimpan data sederhana ke database (MySQL) atau file jika ingin menyimpan pesan dari pengunjung.
  - Mengelola sesi dan autentikasi jika Anda menambahkan panel admin sederhana untuk mengubah konten.
  - Menyediakan server-side includes atau templating sederhana agar header/footer bisa dipakai ulang tanpa duplikasi HTML.

Contoh rencana file PHP (contoh nama saja)
- contact.php  -> memproses form kontak dan mengirim email / menyimpan pesan