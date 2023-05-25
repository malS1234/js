function func(a, b) {
  let work = a * b;
  console.log(`This is a:'${a}' and this is b:'${b}' `);
  return;
}

func("First value of the function", "Second value of the function");
console.log(func(2, 5));

const hidenFuction = function (Name) {
  return Name;
};

console.log(hidenFuction("1"));

const strelka = (number) => number ** 2;

const strel = function (number) {
  return console.log(number ** 2);
};
console.log(strel(3));

console.log();
const thePowerOf = (num, power) => num ** power;
console.log(thePowerOf(3, 2));

function func(num, power = 2) {
  const result = num ** power;
  return result;
}
console.log(func(4));

function canBuyChips(money) {
  if (money > 15) {
    return true;
  }
  return false;
}

console.log(canBuyChips(20));

const canBuyChips1 = (money) =>
  money > 15 ? "Сможешь купить" : "Не сможешь купить";
console.log(canBuyChips1(12));

const THREE = 3;
const TWO = 2;

function func2(value) {
  return value * TWO;
}

function func3(value) {
  return value * THREE;
}

function func1(value1, value2) {
  const three = value1 * THREE;
  const two = value2 * TWO;
  return three + two;
}

console.log(func1(10, 3));

function func4(value2) {
  return func2(3) + func3(value2);
}

console.log(func4(2, 3));

function newPhone(age, work = false, money, pricePhone = 0) {
  if (age > 24 && work == true) {
    return money + 200 >= pricePhone;
  } else if (age > 24 && !work == true) {
    return money + 200 >= pricePhone;
  }
  return money >= pricePhone;
}

console.log(newPhone(25, "", 1400,1600));

function howMoneyGive(age, work, money) {
  if (age > 24 && work == true) {
    return money + 200;
  } else if (age > 24 && work == false) {
    return money + 100;
  }
  return money;
}

function buyNewPhone(age1, work1, money1, priceIphone) {
  return howMoneyGive(age1, work1, money1) >= priceIphone;
}

console.log(buyNewPhone(25, false, 1400, 1500));
