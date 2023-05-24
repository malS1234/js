const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 - (12) 10 > (10) 90 - (12) 5

const a = (25 + 5) / 3;
console.log(a);

let b;
let c;
c = b = 100;
console.log(c);
console.log(b);

const number = 18; // Число
const surName = "Петров"; // Строка
const bulevo = true; // Булево значение
const hz = undefined; // На задано значение
let dat; // На задано значение
let pusto = null; // Пустое значение
const admin = Symbol("Admin"); // Уникальное неизменное значение
const big = BigInt(999999999); // Работа с большими числами

let d = 5;
let e = 5.6;
console.log(typeof d);
d = "list";
console.log(typeof d);
console.log(typeof bulevo);
console.log(typeof hz);
console.log(typeof pusto);

const a1 = "a";
const b1 = "b";
const c1 = "c";
const c1b1a1 = a1 + b1 + c1;
console.log(c1b1a1);

const a1b1c1 = `${a1} ${b1} ${c1}`; // const a1b1c1 = a1 + ' ' + b1 + ' ' + c1
console.log(a1b1c1);

const abc = `${a1}
${b1}
${a1b1c1}`;
console.log(abc);

const age = "25";
console.log(Boolean(age) + 5);
console.log(age - 10);
const imya = "Denis";
console.log(Number(imya) + 5);
console.log(typeof NaN);
const numbe = String(4) + 6;
console.log(typeof numbe);
console.log(Number("hei"));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('')))

//lesson4