/** @format */

// 1. class declaration
// 2. properties $ methods
// 3. constructor
// 4. OOP's concept: Inheritance
// 5. OOP's concept: Abstraction
// 6. OOP's concept: Encapsulation
//    accessors (getter & setter)
//    members visibility / access modifier
// 7. OOP's concept: Polymorphism
// https://www.youtube.com/watch?v=rmk2lLoDDFU

// ==============================================================================================
// class
// class Rekening {
//   nama: string; // properties
//   umur: number; // properties
//   saldo: number; // properties

//   // constructor
//   constructor(nama: string, umur: number, saldo?: number) {
//     this.nama = nama;
//     this.umur = umur;

//     // if (saldo) {
//     //   this.saldo = saldo;
//     // } else {
//     //   this.saldo = 0;
//     // }

//     this.saldo = saldo ?? 0; // alternatif untuk handle parameter yang opsional selain pakai if.
//   }

//   // method
//   deposit(jumlahDeposit: number): void {
//     this.saldo = this.saldo + jumlahDeposit;
//   }

//   // method
//   withdraw(jumlahPenarikan: number): void {
//     this.saldo = this.saldo - jumlahPenarikan;
//   }
// }

// let rekeningDwi = new Rekening("Dwi", 25, 10_000_000);
// let rekeningSkilvul = new Rekening("Skilvul", 30, 12_000_000);

// console.log(rekeningDwi.nama);

// rekeningDwi.deposit(100_000);
// rekeningDwi.saldo = rekeningDwi.saldo + 100_000;

// console.log(rekeningDwi.saldo);
// console.log(rekeningSkilvul);

// ==============================================================================================
// OOP inheritance
// class RekeningTabungan extends Rekening {
//   bunga: number;

//   constructor(nama: string, umur: number, saldo: number, bunga: number) {
//     super(nama, umur, saldo);
//     this.bunga = bunga;

//     this.saldo = saldo ?? 0;
//   }
// }

// let rekeningDanto = new RekeningTabungan("Danto", 25, 10_000_000, 0.1);

// ==============================================================================================
// OOP abstraction
// interface IBunga {
//   hitungBunga: (bungaSaatIni: number) => void;
// }

// class RekeingInvestasi extends Rekening implements IBunga {
//   hitungBunga(bungaSaatIni: number) {
//     this.saldo = this.saldo + this.saldo * bungaSaatIni;
//   }
// }

// ==============================================================================================
// OOP encapsulation
// punya 3 hak akses. public, protected, private

// ==============================================================================================
// public
// bisa diakses siapa saja
// class Rekening {
//   public nama: string;
//   public umur: number;
//   public saldo: number;

//   constructor(nama: string, umur: number, saldo?: number) {
//     this.nama = nama;
//     this.umur = umur;

//     this.saldo = saldo ?? 0;
//   }

//   deposit(jumlahDeposit: number): void {
//     this.saldo = this.saldo + jumlahDeposit;
//   }

//   withdraw(jumlahPenarikan: number): void {
//     this.saldo = this.saldo - jumlahPenarikan;
//   }
// }

// let rekeningSkilvul = new Rekening("Skilvul", 30, 12_000_000);

// console.log(rekeningSkilvul.nama);

// ==============================================================================================
// private
// hanya bisa diakses oleh class tersebut
// menggunakan setter dan getter agar properti bisa dipakai diluar class
// class Rekening {
//   //   private readonly nama: string; // readonly agar properti tidak bisa dirubah. akan ada error jika mencoba merubah
//   private nama: string;
//   private umur: number;
//   private saldo: number;

//   constructor(nama: string, umur: number, saldo?: number) {
//     this.nama = nama;
//     this.umur = umur;

//     this.saldo = saldo ?? 0;
//   }

//   set setName(newName: string) {
//     this.nama = newName;
//   }

//   get getName(): string {
//     return this.nama;
//   }

//   deposit(jumlahDeposit: number): void {
//     this.saldo = this.saldo + jumlahDeposit;
//   }

//   withdraw(jumlahPenarikan: number): void {
//     this.saldo = this.saldo - jumlahPenarikan;
//   }
// }

// let rekeningSkilvul = new Rekening("Skilvul", 30, 12_000_000);

// // console.log(rekeningSkilvul.nama); // error, tidak bisa akses properi nama
// console.log(rekeningSkilvul.getName); // bisa akses menggunakan getter

// // ==============================================================================================
// // protected
// // tidak bisa diakses diluar class, tapi bisa diakses oleh subclass nya
// class Rekening {
//   protected nama: string;
//   private umur: number;
//   private saldo: number;

//   constructor(nama: string, umur: number, saldo?: number) {
//     this.nama = nama;
//     this.umur = umur;

//     this.saldo = saldo ?? 0;
//   }

//   set setName(newName: string) {
//     this.nama = newName;
//   }

//   get getName(): string {
//     return this.nama;
//   }

//   deposit(jumlahDeposit: number): void {
//     this.saldo = this.saldo + jumlahDeposit;
//   }

//   withdraw(jumlahPenarikan: number): void {
//     this.saldo = this.saldo - jumlahPenarikan;
//   }
// }

// let rekeningSkilvul = new Rekening("Skilvul", 30, 12_000_000);

// // console.log(rekeningSkilvul.nama); // error, tidak bisa akses properi nama

// class RekeningTabungan extends Rekening {
//   bunga: number;

//   constructor(nama: string, umur: number, saldo: number, bunga: number) {
//     super(nama, umur, saldo);
//     this.bunga = bunga;

//     this.nama; // bisa akses properti nama karena subclass dari Rekening
//   }
// }

// ==============================================================================================
// OOP polymorphism
class Rekening {
  protected nama: string;
  private umur: number;
  protected saldo: number;

  constructor(nama: string, umur: number, saldo?: number) {
    this.nama = nama;
    this.umur = umur;

    this.saldo = saldo ?? 0;
  }

  set setName(newName: string) {
    this.nama = newName;
  }

  get getName(): string {
    return this.nama;
  }

  bukaRekening(setoranAwal: number) {}

  deposit(jumlahDeposit: number): void {
    this.saldo = this.saldo + jumlahDeposit;
  }

  withdraw(jumlahPenarikan: number): void {
    this.saldo = this.saldo - jumlahPenarikan;
  }
}

class RekeningTabungan extends Rekening {
  bunga: number;

  constructor(nama: string, umur: number, saldo: number, bunga: number) {
    super(nama, umur, saldo);
    this.bunga = bunga;
  }

  bukaRekening(setoranAwal: number) {
    if (setoranAwal < 100_000) {
      throw new Error("Jumlah setoran awal minimal Rp 100.000,-");
    }

    this.saldo = setoranAwal;
  }
}

interface IBunga {
  hitungBunga: (bungaSaatIni: number) => void;
}

class RekeingInvestasi extends Rekening implements IBunga {
  hitungBunga(bungaSaatIni: number) {
    this.saldo = this.saldo + this.saldo * bungaSaatIni;
  }

  bukaRekening(setoranAwal: number) {
    if (setoranAwal < 500_000) {
      throw new Error("Jumlah setoran awal minimal Rp 500.000,-");
    }

    this.saldo = setoranAwal;
  }
}

let rekeningDwi = new RekeningTabungan("Dwi", 25, 10_000_000, 0.1);
rekeningDwi.bukaRekening(10);
