const a = "a";
const b = "b";
const c = "c";

const abc = ["a", "b", "c"];
const ab = [b, "c"];
console.log(abc);
console.log(abc[0]);
console.log(abc[abc.length - 1]);

console.log(abc.at(0));
console.log(abc.at(-1));

const aa = [1, 2, 3] + [1, 2, 3];
console.log(aa);

const someWords = ["Hi", "World", "!"];
console.log(someWords.includes("Hi"));
console.log(someWords);
someWords[0] = "Bye";
console.log(someWords);
someWords[4] = "ok";
console.log(someWords);
console.log(typeof someWords[3]);

someWords.push("addWords");
console.log(someWords.push("addWords"));

someWords.unshift("Hey");
console.log(someWords);

console.log(someWords.pop());
console.log(someWords);

console.log(someWords.shift());
console.log(someWords);

console.log(someWords.indexOf("World"));

console.log(someWords.includes("World"));

console.log(someWords.slice(2));
console.log(someWords);

console.log(someWords.slice(2, 4));
console.log(someWords);

console.log(someWords.slice(-3, -1));

console.log(someWords.splice(3, 1));
console.log(someWords.reverse());
console.log(someWords);

const arr = ["hey", "I"];

console.log(someWords.concat(arr));
console.log(someWords);

const string = "Hey,i,am,fine";
console.log(string.split(","));
console.log(string);

console.log(arr.join("-"));

const cars = [];

function addCar(Car) {
  if (!cars.includes(Car) === true && Car) {
    cars.push(Car);
  }
}

function deletedCar(Car) {
  const index = cars.indexOf(Car);
  if (index === -1) {
    return;
  }
  return cars.splice(index, 1);
}

function Priority(Car) {
  const PriorityCar = deletedCar(Car);
  if (!PriorityCar) {
    return;
  }
  cars.unshift(PriorityCar[0]);
}

addCar("Car1");
addCar("Car3");
addCar("Car2");
addCar("Car3");
addCar("Car3");
console.log(cars);

const data = ["Data11", "Data22", "Data33"];

const [Data1, _, Data3] = ["Data11", "Data22", "Data33"];

console.log(Data1, Data3);

const data1 = [1, 2, 3, 4, 5, 6, 7, 8];
const [one, two, ...asd] = data1;
console.log(asd);

function func(url) {
  const [https, _, cg,...webCat] = url.split('/');

  console.log(`Протокол: ${https.split(':')[0]}`);
  console.log(`Доменное имя: ${cg}`);
  console.log(`Путь в сайте: /${webCat.join('/')}`);
}

func('https://chrome.google.com/webstore/category');
