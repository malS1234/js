'use strict';

function submitForm() {
  const input = document.querySelector('.inputs').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.inputs').value = '';
  document.querySelector('.notification').getAttribute('class');
  document.querySelector('.notification').setAttribute('atribute', 'dasds');
}

function inputChange(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
}
console.log(document.querySelectorAll('.one > span')[0].innerText);
console.log(document.querySelectorAll('.one > span')[1].innerText);
console.log(document.getElementById('two').innerText);
console.log(document.querySelector('[user-id="9"]').innerText);

const panelText = 'Panel';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
newElement.innerHTML = `<button class = "${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);

localStorage.setItem('token', 'dasdas');
localStorage.setItem('token1', 312);
localStorage.setItem('token2', true);

console.log(localStorage.getItem('token1'));
localStorage.removeItem('token');
