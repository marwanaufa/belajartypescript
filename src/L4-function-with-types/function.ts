/** @format */

// function with typescript
// parameter's type
// 1. optional parameter
// 2. default parameter
// 3. return type
// 4. function's call signature

function tambahAngka(a: number, b: number): number {
  // : number sebelum () adalah deklarasi tipe dari hasil functionnya. atau returnnya.
  return a + b;
}

// console.log(tambahAngka(2, 2));
// console.log(tambahAngka("2", 2));
// console.log(tambahAngka(2, []));

function tambahString(a: string, b: string): void {
  console.log(a + b);
}

// console.log(tambahString(2, 2));
// console.log(tambahString("2", 2));
// console.log(tambahString(2, []));

// ==============================================================================================
// 1. optional parameter
// ==============================================================================================

function tambahAngkaOptional(a: number, b: number, c?: number): void {
  // karena c itu optional maka handle dengan if. jika tidak, maka akan terjadi error
  //   console.log(a + b + c);
  if (c) {
    console.log(a + b + c);
  } else {
    console.log(a + b);
  }
}

console.log(tambahAngkaOptional(2, 2, 2));
console.log(tambahAngkaOptional(2, 2));

// ==============================================================================================
// 2. default parameter
// ==============================================================================================

function tambahAngkaDefault(a: number, b: number, c = 0): void {
  // tipe data c tidak perlu dideskripsikan karena typescript otomatis mendeteksinya sesuai nilai default yang dideklarasikan
  console.log(a + b + c);
}

console.log(tambahAngkaDefault(2, 2, 2));
console.log(tambahAngkaDefault(2, 2));
