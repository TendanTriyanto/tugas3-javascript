// 1. Array produkToko untuk menyimpan daftar produk awal
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// 2. Fungsi untuk menambahkan produk baru ke dalam array
function tambahProduk(nama, harga, stok) {
  // Membuat ID otomatis berdasarkan ID terakhir + 1, atau 1 jika array kosong
  let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  
  let produkBaru = {
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok
  };

  produkToko.push(produkBaru);
  console.log(`Sukses: Produk "${nama}" berhasil ditambahkan!`);
}

// 3. Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
  let index = produkToko.findIndex(produk => produk.id === id);
  
  if (index !== -1) {
    let produkDihapus = produkToko.splice(index, 1)[0];
    console.log(`Sukses: Produk "${produkDihapus.nama}" (ID: ${id}) telah dihapus.`);
  } else {
    console.log(`Peringatan: Produk dengan ID ${id} tidak ditemukan.`);
  }
}

// 4. Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
  console.log("=== DAFTAR PRODUK TOKO ONLINE ===");
  if (produkToko.length === 0) {
    console.log("Belum ada produk di dalam toko.");
    return;
  }

  produkToko.forEach(produk => {
    // Format harga ke dalam Rupiah agar lebih mudah dibaca
    let formatHarga = produk.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: ${formatHarga} | Stok: ${produk.stok}`);
  });
  console.log("=================================");
}

// --- CONTOH PENGUJIAN KODE ---

// Menampilkan produk awal
tampilkanProduk();

// Menambahkan produk baru
tambahProduk("Headset", 150000, 12);

// Menampilkan produk setelah penambahan
tampilkanProduk();

// Menghapus produk berdasarkan ID (Contoh: Menghapus Mouse dengan ID 2)
hapusProduk(2);

// Menampilkan produk akhir setelah penghapusan
tampilkanProduk();