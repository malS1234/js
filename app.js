const isDenis = true;
const canPapis = true;

console.log(`Denis papis? ${isDenis && canPapis}`);
console.log(`Denis potchti papis ${isDenis || canPapis}`);
console.log(`Ne Denins ${!isDenis}`);

const isNeDenis = true;

console.log(`Denis papis ne denis? ${isDenis && canPapis && !isNeDenis}`);

console.log("Vasya" || "Denis");
console.log(false || "Denis");
console.log("Vasya" || false);
console.log(false || false);

console.log("Vasya" && "Denis");
console.log(false && "Denis");
console.log("Vasya" && false);
console.log(false && false);

let a = "Oleg";
const userName = a || "Петя";
console.log(userName);

const isMe = true;
const doc = false || "index.html";
console.log(doc);

let login = '';

let da = login ?? 'Login'
console.log(da);

const money = 300;
const gameMoney = 2500;
isNo = true;
isNoGame = false;
isYesGame = true;

if ((money > 2000 || gameMoney > 250) && isNo && isNoGame && isYesGame) {
    console.log('Можете купить');
} else {
    console.log('Не можете купить');
}
