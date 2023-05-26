for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

const arr = ["task1", "task2", "task3"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "task2") {
    break;
  }
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "task2") {
    continue;
  }
  console.log(arr[i]);
}

const arr1 = ["!", "JS", "love", "I"];
const arr11 = [];
for (let i = arr1.length; i > 0; i--) {
  arr11.push(arr1[i - 1]);
}
console.log(arr11.join(" "));
console.log(arr1.reverse().join(" "));

for (let i = 1; i < 5; i++) {
  console.log(`first loop - ${i}`);
  for (let j = 1; j < 5; j++) {
    console.log(`second loop - ${j}`);
  }
}

const arr2 = [
  ["element1", "element2"],
  ["element3", "element4"],
];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}

let i = 1;
while (i < 4) {
  console.log("i");
  i++;
}

const arr3 = [1, 2, 3, 4];

let number = 0;
while (arr3[number] <= 4 && number < arr3.length) {
  console.log(arr3[number]);
  number++;
}

let variable = 11;
do {
  console.log(variable);
  variable++;
} while (variable < 13);

for (let number of arr3) {
  console.log(number);
}

for (let l in arr3) {
  console.log(l);
}

const operations = [500, 100, -400, 200, 400, 100, 800];

function total(arrOfNumber, initialAmount) {
  let sum = initialAmount;
  for (const number of arrOfNumber) {
    sum += number;
  }
  return sum;
}

function positiveBalance(arrOfNumber, initialAmount) {
  let sum = initialAmount;
  for (let number of arrOfNumber) {
    sum += number;
    if (sum < 0) {
      return false;
    }
  }
  return true;
}

function average(arrOfNumber) {
  let income = 0;
  let expenditure = 0;
  let i = 0;
  let j = 0;
  for (let number of arrOfNumber) {
    if (number > 0) {
      income += number;
      i++;
    } else if (number < 0) {
      expenditure += number;
      j++;
    }
  }
  return [income / i, expenditure / j];
}

console.log(total(operations, 100));
console.log(positiveBalance(operations, 100));
console.log(average(operations));
