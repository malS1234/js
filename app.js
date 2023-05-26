const userName = "Nishnag Sinep Ivanovich ";
console.log(userName[0]);

console.log(userName.length);
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));
console.log(userName.includes("i"));

console.log(userName.slice(8));

console.log(userName.slice(0, userName.indexOf(" ")));
console.log(userName.slice(userName.lastIndexOf(" ") + 1, userName.length));

console.log(userName.startsWith("N"));
console.log(userName.endsWith("N"));

console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.replace("N", "M"));
console.log(userName.replace(/i/g, "D"));

console.log(userName.trim());

console.log(isNaN(Number("311")));

function rightPhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.trim();
  phoneNumber = phoneNumber.replace('+7', '8');
  phoneNumber = phoneNumber.replace('+7', '8');
  if (!phoneNumber.startsWith('8')) {
    return false;
  }
  phoneNumber = phoneNumber.replaceAll('(', '');
  phoneNumber = phoneNumber.replaceAll('-', '');
  phoneNumber = phoneNumber.replaceAll(' ', '');
  phoneNumber = phoneNumber.replaceAll(')', '');
  if (phoneNumber.length != 11 ) {
    return false;
  }
  for (const symbol of phoneNumber) {
    if (isNaN(Number(symbol))) {
      return false;
    }
  }
  return phoneNumber;
}

console.log(rightPhoneNumber('89(9)999(9)9999'))

const [name1, familyName, sureName] = userName.split(' ');
console.log(name1);

console.log(userName.padStart(40, '??'));
console.log(userName.padEnd(40, '??'));
console.log(userName.repeat(2));



function hide(number) {
  return number.slice(-4).padStart(number.length,'*');
}
console.log(hide('1233213121233232'))
