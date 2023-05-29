'user strict';
const a = 5;

function sumA(a) {
  if (a > 20) {
    return;
  }
  a += 5;
  console.log(a, this);
  return sumA(a);
}

sumA(a, this);

console.log(factorial(5));

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

const property = {
  property1: '1',
  property2: '2'
};

const pr = Object.assign({}, property);

const pr1 = {
  ...property
};
property.property1 = '3';

console.log(pr1);
console.log(property);

