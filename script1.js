let pesanan = [];

function tambahBarang(nama, harga) {
  const kiloan = document.getElementById('kiloan').value;
  const total = kiloan * harga;

  pesanan.push({
    nama: nama,
    kiloan: kiloan,
    harga: harga,
    total: total
  });

  updateRingkasanPesanan();
}

function updateRingkasanPesanan() {
  const ringkasanPesanan = document.getElementById('ringkasanPesanan');
  ringkasanPesanan.innerHTML = '';

  pesanan.forEach((item, index) => {
    ringkasanPesanan.innerHTML += `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.nama}</h5>
        <p class="card-text">Jumlah: ${item.kiloan}</p>
        <p class="card-text">Total: ${item.total}</p>
        <button class="btn btn-warning" onclick="editBarang('${item.nama}')">Edit</button>
        <button class="btn btn-danger" onclick="hapusBarang(${index})">Hapus</button>
      </div>
    </div>
  `;
  });
}

function editBarang(nama) {
  const index = pesanan.findIndex(item => item.nama === nama);

  if (index !== -1) {
    const newKiloan = prompt(`Edit jumlah kiloan untuk ${nama}:`, pesanan[index].kiloan);

    if (newKiloan !== null && !isNaN(newKiloan)) {
      pesanan[index].kiloan = parseFloat(newKiloan);
      pesanan[index].total = pesanan[index].kiloan * pesanan[index].harga;
      updateRingkasanPesanan();
    }
  }
}

function hapusBarang(index) {
  pesanan.splice(index, 1);
  updateRingkasanPesanan();
}

function prosesPesanan() {
  // Implementasikan logika untuk menghitung total dan mengirim pesanan ke WhatsApp
  // ...
  alert('Pesanan telah diproses. Silakan hubungi +62 812-9505-9739 melalui WhatsApp untuk konfirmasi.');
}
