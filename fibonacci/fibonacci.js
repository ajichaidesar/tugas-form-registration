/* Menampilkan bilangan ganjil dan genap dengan batas 100 */
console.log("Bilangan Genap:");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

console.log("Bilangan Ganjil:");
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

/* Menampilkan bilangan fibonacci dengan batas 100 */
console.log("Bilangan Fibonacci:");
let a = 0;
let b = 1;
let c;
console.log(a);
console.log(b);
while (a + b <= 100) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}
