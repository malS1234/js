function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function func(a, b, fn) {
  console.log(fn.name);
  const res = fn(a, b);
  return res;
}

console.log(func(3, 5, difference));

function multiple(number) {
  return function (num) {
    return num * number;
  };
}

console.log(multiple(3)(4));

const func1 = (number1) => (number2) => number1 * number2;
console.log(func1(3)(4));

const arr = [3, 5, 2, 7];

for (const [i] of arr.entries()) {
  console.log(i);
}

const [a] = arr.entries();
console.log(a);
[
  [0, 3],
  [1, 5],
  [2, 2],
  [3, 7],
];

for (const [index, element] of arr.entries()) {
  console.log(index, element);
}

arr.forEach((el, index) => console.log(el, index));

const arr1 = [0, 0, -1, -2, 5, 0, -1, -1];

const number4 = arr1
  .filter((number) => number > 0)
  .map((number) => number ** 2);

console.log(number4);

const arr11 = [
  [1, 2],
  [3, -4],
  [4, 5],
  [0, 0],
  [3, -6],
];

const positiveDifference = arr11
  .map((number) => number[1] - number[0])
  .filter((DifferenceNumber) => DifferenceNumber > 0);
console.log(positiveDifference);

const sum1 = arr1.reduce((acc, value) => {
  if (acc > value) {
    return acc;
  }
  return value;
}, 0);
console.log(sum1);

const arr123 = [3, -7, -1, 4, 7, 2];

const asd = arr123.reduce((acc, value, i) => {
  if (i < arr123.length - 1) {
    return acc + value;
  }
  return (acc + value) / (i + 1);
}, 0);

console.log(asd);

console.log(arr123.find((number) => number > 5));
console.log(arr123.findIndex((number) => number > 4));

function some(arr, element) {
  return -1 === arr.findIndex((el) => el === element) ? false : true;
}
console.log(some(arr123, 2));

console.log(arr.some((el) => el === 2));

const fl = arr11.flat();
console.log(fl);
console.log(arr11.flatMap((el) => el.splice(0, 1)));

console.log(arr123.sort((a, b) => -(a - b)));

const arr1234 = new Array(3);
arr1234.fill(10, -2, -1);
console.log(arr1234);



console.log(Array.from({length: 5}, (el,i) => i));
console.log(new Array(5).fill(2, 0, 3).fill(5, 2, 5).map((el,i) => el*(i+1)));