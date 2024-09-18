/** @format */
// ==============================================================================================
// any
// ==============================================================================================

// compiler tidak mengecek tipe data lebih lanjut krn menganggap kita lebih tahu tipe datanya
// let person: any = { name: "Skilvul" };
// person(); // error karena person bukan function

// ==============================================================================================
// unknown
// ==============================================================================================

// compiler mengecek tipe data dengan lebih ketat
let nilaiUjian: unknown;
nilaiUjian = 100;

console.log(typeof nilaiUjian); // tipe data terdeteksi number

// let nilaiAkhir = nilaiUjian + 100; // error karena tipe nilaiUjian = unknown. harus pakai if

if (typeof nilaiUjian === "number") {
  let nilaiAkhir = nilaiUjian + 100;
  console.log("Nilai Akhir =", nilaiAkhir);
}

// ==============================================================================================
// boolean
// ==============================================================================================

let benarAtauSalah: boolean = true;
let benar: true = true;
let salah = false;
// let sumBol = benar + salah; // dapat peringatan dari compiler kalau operator ini tidak dapat dipakai ke tipe boolean. tidak seperti javascript.

// benar = salah; // dapat peringatan karena tipe data benar adalah boolean tapi true only
// benarAtauSalah = salah; // tidak muncul peringatan karena tipe data benarAtauSalah adalah boolean

// ==============================================================================================
// number & bigint
// ==============================================================================================

// sama-sama tipe data yang berkaitan dengan angka.
let harga1: number = 2000;
let harga2: number = 3_000;

// let angkaKecil: number = 100n; // error, n di belakang angka 100 menandakan bigint
let angkaBesar: bigint = 100n;

// ==============================================================================================
// string
// ==============================================================================================

const userName: string = "Skilvul";
console.log(userName.charAt(0));
console.log(userName.toUpperCase());

// ==============================================================================================
// symbol
// ==============================================================================================

let a = Symbol("a");
let b: symbol = Symbol("a");
console.log(a === b); // false. symbol menghasilkan unique identifier. meskipun nilai yang dimasukan sama, tapi hasilnya benar2 unik dan tidak sama.
