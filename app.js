const cookies = 0;

if (cookies > 2) {
  console.log("Bon appetit!");
} else if (cookies == 0) {
  console.log("Buy cookies");
} else {
  console.log("Don't eat");
}

const capital = 12000;
const stavka = 0.07;
const time = 2;
const dengi = capital * (1 + stavka) ** time;
const dom = 13500;

if (dengi >= dom) {
  console.log(`Сможет купить, остаток после покупки: ${dengi - dom}`);
} else {
  console.log("Не сможет купить");
}

const someNumber = "1";

if (someNumber === 10) {
  console.log("Yes!");
} else if (someNumber == 10) {
  console.log("so-so");
} else {
  console.log("Does not match");
}

// const q = prompt("Введите число");
// if (Number(q) === Number) {
//   console.log("Да");
// }

const phone = "Samsung";

if (phone === "Iphone") {
  console.log("Айфон");
} else if (phone === "Samsung") {
  console.log("Самсунг");
} else {
  console.log("Что за телефон?");
}

switch (phone) {
  case "Iphone":
    console.log("Айфон"); // phone === "Iphone"
  case "Samsung":
    console.log("Самсунг");
    break;
  case "Huawei":
    console.log("Хуавей");
    break;
  default:
    console.log("Что за телефон?");
}

console.log(true === true);

const доширак = 8;
const накопил = 2;

let ответ = накопил > доширак ? "Доширак" : "Без доширака";
console.log(`${ответ}`);

const otvet = prompt("Сколько будет 1+-2");

switch (true) {
  case Number(otvet) === -1:
    console.log(`Да, ${otvet}`);
    break;
  case Number(otvet) === 3:
    console.log(`Да, ${otvet}`);
    break;
  case otvet === "Что?":
    console.log("Прошёл проверку");
    break;
  default:
    console.log("Не прошёл проверку");
    break;
}
