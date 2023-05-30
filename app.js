'use strict';
let variable = 10;

if (true) {
  variable = 3;
}

console.log(variable);

let successMessage = 'success';
const user = {
  name: 'Name1',
  skills: []
};

function addSkills(user, skill) {
  if (skill == 'admin') {
    const message = 'error';
    console.log(message);
    return user;
  }
  user.skills.push(skill);
  let successMessage = '123';
  console.log(successMessage);

  function logSkill() {
    console.log(user.skills);
  }
  logSkill();
  return user;
}

console.log(addSkills(user, 'skill1'));

function aumNum() {
  console.log(this);
  return;
}

const aumNum2 = () => {
  console.log(this);
};
aumNum2();

const user123 = {
  name: 'Vova',
  lastName: 'Avov',
  getFullName: function () {
    console.log(this);
    return this.name + ' ' + this.lastName;
  }
};

const user2 = {
  name: 'Denis',
  lastName: 'Siden'
};

user2.getFullName = user123.getFullName;
user2.getFullName();

const func = user2.getFullName;

const user1234 = {
  name: 'Name1',
  lastName: 'LastName1',
  age: 25,
  this1: this,
  getUserInfo: function () {
    console.log(`${this.name} ${this.lastName}`);

    const is18 = () => {
      if (this.age >= 18) {
        console.log('Есть 18 лет');
        console.log(this);
      } else {
        console.log('Нет 18-ти лет');
      }
    };
    is18();
  },
  getUserInfoArrow: () => {
    console.log(this);
    console.log(`${this.name} ${this.lastName}`);
  }
};

user1234.getUserInfo();
user1234.getUserInfoArrow();
console.log(user1234.this1);

function sumNum(num1, num2) {
  console.log(arguments);
  return num1 + num2;
}

console.log(sumNum(1, 4));

const company = {
  name: 'Name1',
  employees: [{ 
    showEmp: function () {
      return this.name
    },
    name: 'eName1' }],
  ceo: {
    name: 'cName1',
    showCeo: () => {
      return this.name;
    }
  },
  showName: function () {
    return this.name;
  }
};

console.log(company.employees.map(el => el.showEmp()));
