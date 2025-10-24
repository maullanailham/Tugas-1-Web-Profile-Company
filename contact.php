
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $nama = htmlspecialchars($_POST['nama']);
  $email = htmlspecialchars($_POST['email']);
  $pesan = htmlspecialchars($_POST['pesan']);
  // In a real app you'd store/send the message. Here we just show confirmation.
  echo '<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Terima Kasih</title><script src="https://cdn.tailwindcss.com"></script></head><body class="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"><div class="max-w-2xl mx-auto p-8 mt-20"><div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"><h2 class="text-2xl font-bold mb-2">Terima kasih, ' . $nama . '!</h2><p class="mb-4">Pesan Anda telah kami terima. Kami akan menghubungi Anda melalui ' . $email . '.</p><a href="contact.php" class="inline-block mt-2 px-4 py-2 bg-emerald-500 text-white rounded">Kembali</a></div></div></body></html>';
  exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Kontak - Pet Pals</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body class="font-sans bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
  <header class="bg-white dark:bg-gray-800 shadow fixed top-0 left-0 right-0 z-40">
    <div class="max-w-6xl mx-auto flex items-center justify-between p-4">
      <div class="flex items-center gap-3">
        <img src="images/logo.png" alt="logo" class="h-10">
        <span class="font-bold text-xl">Pet Pals</span>
      </div>
      <nav class="flex items-center gap-4">
        <a href="index.html" class="text-gray-700 dark:text-gray-200 font-medium">Home</a>
        <a href="about.html" class="text-gray-700 dark:text-gray-200 font-medium">Tentang</a>
        <a href="contact.php" class="text-gray-700 dark:text-gray-200 font-medium underline">Kontak</a>
      </nav>
    </div>
  </header>

  <main class="pt-20">
    <section class="max-w-3xl mx-auto p-6 py-12">
      <h1 class="text-3xl font-bold mb-4 text-center">Hubungi Kami</h1>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-6">Isi formulir di bawah, kami akan merespon secepatnya.</p>

      <div id="formMsg" class="hidden mb-4 p-3 rounded"></div>

      <form id="contactForm" method="POST" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <label class="block mb-2 font-semibold">Nama</label>
        <input name="nama" type="text" class="w-full p-2 mb-4 border rounded" required>
        <label class="block mb-2 font-semibold">Email</label>
        <input name="email" type="email" class="w-full p-2 mb-4 border rounded" required>
        <label class="block mb-2 font-semibold">Pesan</label>
        <textarea name="pesan" rows="5" class="w-full p-2 mb-4 border rounded" required></textarea>

        <button id="submitBtn" type="submit" class="w-full bg-emerald-500 text-white px-4 py-2 rounded">Kirim Pesan</button>
      </form>

      <div class="mt-8 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 class="font-semibold mb-2">Lokasi Kami</h3>
        <img src="images/map-placeholder.svg" alt="map" class="w-full rounded">
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Jl. Contoh No. 123, Kota Contoh - (Gambaran lokasi, placeholder offline)</p>
      </div>
    </section>
  </main>

  <footer class="bg-white dark:bg-gray-800 border-t mt-12">
    <div class="max-w-6xl mx-auto p-6 text-center text-sm text-gray-600 dark:text-gray-300">
      &copy; 2025 Pet Pals Pet Shop
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
