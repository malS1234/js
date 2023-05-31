'use strict';

const bmw = {
  band: 'bmw',
  model: 'm3',
  year: 2023,
  damages: [],
  addDamage(part, degree) {
    console.log(
      `The car: ${this.band} ${this.model} ${this.year} added: - damage: ${part}, degree of damage: ${degree}`
    );
    this.damages.push({ part, degree });
  }
};

bmw.addDamage('part1', 2);

const toyota = {
  band: 'toyota',
  model: 'corolla',
  year: 2023,
  damages: []
};

toyota.addDamage = bmw.addDamage;

toyota.addDamage('part2', 4);

const addDamageFunc = bmw.addDamage;

addDamageFunc.call(toyota, 'part3', 10);

addDamageFunc.apply(bmw, ['part4', 5]);

const carManipulation = {
  addDamage(part, degree) {
    console.log(`Добавить повреждение на ${this.band} ${this.model}`);
    this.damages.push({ part, degree });
  }
};

const addDamageToyota = carManipulation.addDamage.bind(toyota, 'part10');

addDamageToyota(3);
console.log(toyota);
addDamageToyota(3);

const user = {
  password: '1233213'
};

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else this.password = '1';
}

const fRemovePassword = removePassword.bind(user);
fRemovePassword();
console.log(user.password);

(function () {
  console.log('Start');
})();

function changeBalance() {
  let balance = 0;
  return function (sum) {
    balance += sum;
    console.log(balance);
  };
}

const change = changeBalance();
change(100);
change(100);

console.dir(change);

const userInfo = {
  balance: 0,
  operation: 0,
  increse(sum) {
    this.balance += sum;
    this.operation++;
  }
};

function addUser() {
  const addUser = {
    ...userInfo
  };
  return function () {
    return addUser;
  };
}

const user1 = addUser();
console.log(user1().increse(150));
console.log(user1());

const user2 = addUser();
console.log(user2().increse(350));
console.log(user2());
