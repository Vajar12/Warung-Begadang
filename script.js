// Name : Fajar Harun
// NIM : 202051042

const kodeJenis = prompt ("Masukkan Kode Barang: \n [Ket: MK = Makanan | MN = Minuman | KM = Kebutuhan Mandi | KD = Kebutuhan Dapur]");

let jenisBarang, kodeNama;
    if (kodeJenis == "MK") {
            kodeNama = prompt("Masukkan Kode Jenis Makanan: \n [ket: 11 = Snack | 12 = Roti | 13 = Mie Instan | 14 = Sosis]")
            jenisBarang = "Makanan"        
    } else if (kodeJenis == "MN") {
            kodeNama = prompt("Masukkan Kode Jenis Minuman: \n [ket: 21 = Freshtea | 22 = Cimori | 23 = Pocari Sweet | 24 = Le Mineral]")
            jenisBarang = "Minuman"
    } else if (kodeJenis == "KM") {
            kodeNama = prompt("Masukkan Kode Jenis Kebutuhan Kamar Mandi: \n [ket: 31 = Sabun | 32 = Shampoo | 33 = Pasta Gigi | 34 = Sikat Gigi]")
            jenisBarang = "Kebutuhan Dapur"
    } else if (kodeJenis == "KD") {
            kodeNama = prompt("Masukkan Kode Jenis Kebutuhan Dapur: \n [ket: 41 = Penyedap Rasa | 42 = Minyak Goreng | 43 = Kecap | 44 = Saos]")
            jenisBarang = "Kebutuhan Kamar Mandi"
    } else { "Kode Jenis Makanan tidak terdaftar" }

let namaBarang, harga;
    if (kodeNama == 11) {
        namaBarang = "Snack";
        harga = 5000;
    } else if (kodeNama == 12) {
        namaBarang = "Roti";
        harga = 12000;
    } else if (kodeNama == 13) {
        namaBarang = "Mie Instan";
        harga = 3500;
    } else if (kodeNama == 14) {
        namaBarang = "Sosis";
        harga = 8000;
    } else if (kodeNama == 21) {
        namaBarang = "Freshtea";
        harga = 7000;
    } else if (kodeNama == 22) {
        namaBarang = "Cimori";
        harga = 9000;
    } else if (kodeNama == 23) {
        namaBarang = "Pocari Sweet";
        harga = 8500;
    } else if (kodeNama == 24) {
        namaBarang = "Le Mineral";
        harga = 5000;
    } else if (kodeNama == 31) {
        namaBarang = "Sabun";
        harga = 21000;
    } else if (kodeNama == 32) {
        namaBarang = "Shampoo";
        harga = 25000;
    } else if (kodeNama == 33) {
        namaBarang = "Pasta Gigi";
        harga = 12000;
    } else if (kodeNama == 34) {
        namaBarang = "Sikat Gigi";
        harga = 15500;
    } else if (kodeNama == 41) {
        namaBarang = "Penyedap Rasa";
        harga = 4500;
    } else if (kodeNama == 42) {
        namaBarang = "Minyak Goreng";
        harga = 45000;
    } else if (kodeNama == 43) {
        namaBarang = "Kecap";
        harga = 13000;
    } else if (kodeNama == 44) {
        namaBarang = "Saos";
        harga = 11000;
    } else {
        namaBarang = "Kode barang tidak terdaftar";
        harga = 0;
    }

let kodeBarang = kodeJenis + kodeNama;
let jumlahBeli = prompt ("Masukkan Jumlah Pembelian: \n [ket: 1-10]");
let totalHarga = jumlahBeli * harga;

let diskon = 0.1;
let totalDiskon;
if (totalHarga > 50000 && namaBarang == "Shampoo" || namaBarang == "Minyak Goreng") {
    totalDiskon = totalHarga * diskon;
} else { totalDiskon = totalHarga * 0}

let totalBayar = totalHarga - totalDiskon;

let kodeKasir = prompt ("Masukkan Kode Kasir: \n [ket: 1 = Imel Meilan | 2 = Fajar Harun | 3 = Abdul Mutorib]");
let namaKasir;
    if (kodeKasir == 1) {
        namaKasir = "Imel Meilan";
    } else if (kodeKasir == 2) {
        namaKasir = "Fajar Harun";
    } else if (kodeKasir == 3) {
        namaKasir = "Abdul Mutorib"
    } else {"Kode Kasir tidak terdaftar"}
   
//output
console.log("======= Warung Begadang =======")
console.log( "Kode Barang: " + kodeBarang);
console.log( "Nama Barang: " + namaBarang);
console.log( "Jenis Barang: " + jenisBarang);
console.log( "Harga Satuan: " + harga);
console.log( "Jumlah Pembalian: " + jumlahBeli);
console.log( "Total Harga: " + totalHarga);
console.log( "Diskon: " + totalDiskon);
console.log( "Total Pembayaran: " + totalBayar);
console.log("====== Kasir: " + namaKasir + " ======");