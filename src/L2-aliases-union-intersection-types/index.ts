/** @format */

// ==============================================================================================
// aliases type
// memberi alias kepada sebuah type
// menggunakan type atau interface
// ==============================================================================================

type Person = {
  nama: string;
  umur: number;
};

interface Person2 {
  nama: string;
  umur: 20;
}

let bambang: Person = {
  nama: "Bambang",
  umur: 20,
};

// ==============================================================================================
// union type
// bekerja seperti "OR" pada type ( | )
// tidak berlaku untuk interface
// ==============================================================================================

type Hewan = "Mamalia" | "Amfibi" | "Unggas";
// let ayam: Hewan = "Serangga"; // error krn Serangga tidak termasuk pada tipe Hewan
let ayam: Hewan = "Unggas";

// ==============================================================================================
// intersection type
// bekerja seperti "AND" pada type ( & )
// tidak berlaku untuk interface
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
