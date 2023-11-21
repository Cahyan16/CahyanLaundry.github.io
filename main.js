document.querySelectorAll('.btnDetail').forEach(item => {
  item.addEventListener('click', (e) => {

    let perent = e.target.parentNode.parentNode;
    let gambar = perent.querySelector('.card-img-top').src;
    let harga = perent.querySelector('.harga').innerHTML;
    let judul = perent.querySelector('.card-text').innerHTML;
    let deskripsi = perent.querySelector('.deskripsi') ? perent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi</i>';


    let tombolModal = document.querySelector('.btnModal');
    tombolModal.click();
    document.querySelector('.modalTitle').innerHTML = judul;
    let image = document.createElement('img');
    image.src = gambar;
    image.classList.add('w-100')
    document.querySelector('.modalImage').innerHTML = '';
    document.querySelector('.modalImage').appendChild(image);
    document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
    document.querySelector('.modalHarga').innerHTML = harga;


    const nohp = '6282195059739'
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text= Halo Bambang saya mau pesan produk ini ${gambar}`;
    document.querySelector('.btnBeli').href = pesan;


  });
});
document.querySelectorAll('.btnEdit').forEach(item => {
  item.addEventListener('click', (e) => {

    let perent = e.target.parentNode.parentNode;
    let gambar = perent.querySelector('.card-img-top').src;
    let harga = perent.querySelector('.harga').innerHTML;
    let judul = perent.querySelector('.card-text').innerHTML;
    let deskripsi = perent.querySelector('.deskripsi') ? perent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi</i>';


    let tombolModal = document.querySelector('.btnModal1');
    tombolModal.click();
    document.querySelector('.modalTitle').innerHTML = judul;
    let image = document.createElement('img');
    image.src = gambar;
    image.classList.add('w-100')
    document.querySelector('.modalImage').innerHTML = '';
    document.querySelector('.modalImage').appendChild(image);
    document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
    document.querySelector('.modalHarga').innerHTML = harga;

    const nohp = '6282195059739'
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text= Halo Bambang saya mau pesan produk ini ${gambar}`;
    document.querySelector('.btnEdit1').href = pesan;

    let listItem = editedForm.parentElement;
    listItem.innerHTML = "Nama: " + nama + ", Harga: " + harga + ", Stok: " + stok;

    let editForm = document.createElement(".form");
    editForm.innerHTML = "Nama: <input type='text' value='" + gambar + "'>" +
      "Harga: <input type='number' value='" + harga + "'>" +
      "Stok: <input type='number' value='" + stok + "'>" +
      "<button onclick='simpanEdit(this)'>Simpan</button>";



  });
});

setTimeout(function () {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 3000); // Ganti 3000 dengan jumlah milidetik yang diinginkan