let book = {
  topic: 'JavaScript',
  edition: '7'
};

console.log(book.topic);
console.log(book['edition']);

book.author = 'Flanagan';
book.contents = {};

const factorial = function (n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
};

console.log(factorial(4));

const i = undefined;

console.log(i);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let a = new Point(1,2,3)

console.log(a)