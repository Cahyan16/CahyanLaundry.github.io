document.addEventListener("DOMContentLoaded", function () {
  // Menampilkan splash screen terlebih dahulu
  document.querySelector('.splash-screen').style.display = 'flex';

  // Menunda penampilan konten utama
  setTimeout(function () {
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
  }, 5000); // 5000 milliseconds (5 seconds) delay
});