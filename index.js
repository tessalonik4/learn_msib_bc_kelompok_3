 // Mendefinisikan variabel
var nilai = 75;
var nama = "Tessa";
var isLulus = false;

// Mendefinisikan konstanta
const PI = 3.14159265359;
const MAX_USIA = 18;

// Kondisional if-else
if (nilai >= 70) {
  isLulus = true;
  console.log(nama + " lulus ujian dengan nilai " + nilai);
} else {
  isLulus = false;
  console.log(nama + " tidak lulus ujian dengan nilai " + nilai);
}

// Menggunakan switch case untuk menentukan kategori nilai
var kategori;

switch (true) {
  case nilai >= 90:
    kategori = "A";
    break;
  case nilai >= 80:
    kategori = "B";
    break;
  case nilai >= 70:
    kategori = "C";
    break;
  case nilai >= 60:
    kategori = "D";
    break;
  default:
    kategori = "E";
}

console.log(nama + " mendapatkan kategori nilai " + kategori);

// Menggunakan konstanta
if (MAX_USIA <= 18) {
  console.log("Anda masih di bawah usia maksimum yang diizinkan.");
} else {
  console.log("Anda sudah melewati usia maksimum yang diizinkan.");
}

// Menampilkan apakah lulus atau tidak
if (isLulus) {
  console.log(nama + " lulus ujian.");
} else {
  console.log(nama + " tidak lulus ujian.");
}

