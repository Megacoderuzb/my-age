let now = new Date().getFullYear();
let newMonth = new Date().getMonth() + 1;
let newDate = new Date().getDate();

console.log(now);
console.log(newMonth);
console.log(newDate);
let ism = prompt("ismingizni kiriting!").toUpperCase();
let usersBirthYear = +prompt(`${ism} tug'ilgan yilingizni kiriting`);
let usersBirthMonth = +prompt(`${ism} tug'ilgan oyingizni kiriting`);
let usersBirthday = +prompt(`${ism} tug'ilgan kuningizni kiriting`);

let age = `${now - usersBirthYear} yil`;
let monthleft = `${newMonth - usersBirthMonth} oy`;
let daysleft = `${newDate - usersBirthday} kun`;

alert(
  `Hurmatli ${ism} \n Siz ${age} ${monthleft} ${daysleft}ni behuda sarflagansiz`
);
