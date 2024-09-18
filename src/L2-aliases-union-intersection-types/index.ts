/** @format */

// ==============================================================================================
// aliases type
// memberi alias kepada sebuah type
// ==============================================================================================

type Person = {
  nama: string;
  umur: number;
};

let bambang: Person = {
  nama: "Bambang",
  umur: 20,
};

// ==============================================================================================
// union type
// bekerja seperti "OR" pada type
// ==============================================================================================

type Hewan = "Mamalia" | "Amfibi" | "Unggas";
// let ayam: Hewan = "Serangga"; // error krn Serangga tidak termasuk pada tipe Hewan
let ayam: Hewan = "Unggas";

// ==============================================================================================
// intersection type
// bekerja seperti "AND" pada type
// ==============================================================================================

type Karyawan = {
  id: string;
  nama: string;
};

type KaryawanTetap = {
  email: string;
  jabatan: string;
};

type KaryawanYangTetap = Karyawan & KaryawanTetap; // menggabungkan tipe Karyawan dan KaryawanTetap

let karyawanTetap: KaryawanYangTetap = {
  id: "kt12",
  nama: "karyawan",
  email: "karyawan@mail.com",
  jabatan: "staf",
}; // harus menggunakan semua properti di Karyawan dan KaryawanTetap
