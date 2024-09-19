/** @format */

// ==============================================================================================
// array
// kumpulan data dengan tipe yang sama
// ==============================================================================================

let bilanganDiBawah5 = [1, 2, 3, 4, 5];
let bilanganDiBawahLima: Array<number> = [1, 2, 3, 4, 5];
let bilanganKurangDariLima: number[] = [1, 2, 3, 4, 5];

// ==============================================================================================
// tuples
// subtypes dari array
// perbedaan dg array adalah memiliki panjang data yang tetap dan tipe datanya bisa berbeda2 tapi harus didefinisikan secara explisit
// ==============================================================================================

let bilanganKurangDari5: [string, string, number] = ["kenzo", "programmer", 25];

// ==============================================================================================
// null & undefined
// null biasanya digunakan ketika nilai benar2 tidak ada. bisa dipakai untuk nilai yang bisa ada dan bisa tidak ada.
// undefined digunakan ketika nilai belum ada atau belum didefinisikan
// ==============================================================================================

type Person3 = {
  nama: string;
  umur: number;
  pasangan: string | null; // sebelumnya kita pakai tanda ? untuk opsional.
};

let seorangSingle: Person3 = {
  nama: "Adit",
  umur: 25,
  pasangan: null, // kalau kosong pakai null. akan error jika tidak dideklarasikan si key pasangan
};

// ==============================================================================================
// void & never
// void
// biasanya digunakan pada fungsi.
// digunakan pada fungsi yang tidak mengembalikan sebuah nilai, atau tidak ada return
// never
// tipe yang merepresentasikan nilai yang tidak pernah muncul / seharusnya tidak pernah tercapai. misalnya function error pada try catch.
// ==============================================================================================

function log(message: string): void {
  console.log(message);
}

function error(message: string): never {
  throw new Error(message);
}
