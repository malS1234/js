const userArray = ['Denis', 'Siden', 20];
const user = {
  firstName: 'Denis',
  lastName: 'Siden',
  age: 20,
  array: ['word1', 'word2'],
  func: function () {
    return this.firstName + ' ' + this.lastName;
  }
};
console.log(user.func());

console.log(user.age);
console.log(user['array']);
console.log(user['first' + 'Name']);

// console.log(user[prompt('Enter property')]);

user['newProperty'] = 'PK';
console.log(user.newProperty);

user.lastName = 'Nedis';
console.log(user.lastName);

const people = [
  { name: 'Name1', age: 20 },
  { name: 'Name2', age: 21 },
  { name: 'Name3', age: 19 },
  { name: 'Name4', age: 18 }
];

function sortObjects(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortObjects(people));

const ar1 = [
  { name: 'Name1', sureName: 'SureName1', age: 25, ar: ['i10', 'i11'] },
  { name: 'Name2', sureName: 'SureName2', age: 25, ar: ['i20', 'i21', 'i22'] }
];

function pr(date) {
  const ar111 = [];
  for (let i = 0; i < date.length; i++) {
    ar111.push({
      fullName: `${date[i].name} ${date[i].sureName}`,
      len: date[i].ar.length
    });
  }
  return ar111;
}
console.log(pr(ar1));

const newar = ar1.map(el => {
  return { fullName: `${el.name} ${el.sureName}`, len: el.ar.length };
});

console.log(newar);

const wallet = {
  balance: 0,
  operations: [],
  incBalance: function (reason, sum) {
    this.balance += sum;
    this.operations.push({ reason, sum });
    return true;
  },
  decBalance: function (reason, sum) {
    if (this.balance >= sum) {
      this.balance -= sum;
      this.operations.push({ reason, sum });
      return true;
    }
    return false;
  },
  howOp: function () {
    return this.operations.length;
  }
};

console.log(wallet.decBalance('321', 200));
console.log(wallet.incBalance('321', 500));
console.log(wallet.balance);
console.log(wallet.decBalance('321', 1000));
console.log(wallet.howOp());
console.log(wallet.decBalance('23131', 300));
console.log(wallet.howOp());
console.log(wallet.decBalance('23131', 300));
console.log(wallet.howOp());
console.log(wallet.decBalance('23131', 200));
console.log(wallet.howOp());
console.log(wallet.operations);

const obj = {
  sv1: {
    sv6: 10,
    sv: 14
  },

  sv2: {
    sv6: {
      asd: 1
    },
    sv: 40
  }
};

let avg = 0;
let cc = 0;

for (const key in obj) {
  cc++;
  avg += obj[key].sv;
}
console.log(avg / cc);

const { lastName } = user;
console.log(lastName);
console.log(user);

user.obj = obj;

let home = {
  area: 100,
  street: 'Pushkin'
};

const sellHome = {
  price: 1000
};

const home1 = {
  ...home,
  ...sellHome
};

console.log(home1);

console.log(obj.sv2.sv6.asd?.asdd);

const house = {
  thing: [],
  findThing: function (id) {
    return this.thing.find(thingID => thingID?.id === id);
  },
  addThing: function (thing) {
    if (this.findThing(thing.id) === thing) {
      return 'Вещь уже есть';
    }
    return this.thing.push(thing);
  },
  weightAllThings: function () {
    return this.thing.reduce(
      (acc, thing) => (acc += thing.weight?.kg ? thing.weight.kg : 0),
      0
    );
  }
};

const rug = {
  id: 3,
  area: 10,
  weight: {
    kg: 100
  }
};

const shelf = {
  id: 1,
  area: 15,
  weight: {
    kg: 30
  }
};

const book = {
  id: 2,
  area: 15
};
console.log(house.addThing(rug));
console.log(house.addThing(book));
console.log(house.addThing(shelf));
console.log(house.weightAllThings());
console.log(house.addThing(shelf));
console.log(house.findThing(1));



console.log(house.thing)

