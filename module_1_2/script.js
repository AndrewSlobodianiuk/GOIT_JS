// "use strict";

// Приобразования типов
// -----------------------------------------------------------------
// -----------------------------------------------------------------

// console.log(1 + "1" / 2);
// console.log(10 + +"10" / 2);
// console.log(+false);
// console.log(!!true);
// console.log(+true - +false);
// console.log(!!0);
// console.log(!+"0");
// console.log("Ba" + String(+undefined));
// console.log(+!null + +"10");
// console.log(![].length + "1");
// console.log((true && 10 && false) || 99);
// console.log((!null && 0) || "Hello".length);
// console.log(!![].length || undefined || null || +null || "" || 0 =="0" || NaN);
// 
// -----------------------------------------------------------------
// -----------------------------------------------------------------

// будет ли ошибка?
// const _ = 10;
// const $ = 10;
// const a45a = 10;
// const a#45 = 10;
// const Привет_я_переменная = 10;
// hello = 10;

// console.log(hello);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// зачем нам use strict?

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Сколько тут оперций const a = b * 3?

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Разница между let и var
// console.log(a);
// console.log(b);
// var a;
// let b;

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Сколько типов данных?
// Boolean, Object, String, Number, Symbol, null, undefined

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// console.log(typeof null === "object");
// console.log(null instanceof Object);

// const a = null;
// a.value = 10;
// console.log(a.value);

// console.log(typeof [] === "object");
// console.log(typeof NaN === "number");
// console.log(NaN === NaN);

// const func = () => {};
// console.log(typeof func);
// console.log(func instanceof Object);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5];
// arr[4] = 555;
// console.log(arr);

// const a = "Hello";
// a[0] = "B";
// console.log(a);

// console.log("hello".toUpperCase());
// console.log(String("hello").toUpperCase());

// console.log("hello".__proto__ === String("hello").__proto__);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// let a = [];
// let b = a;

// b.push(1);
// b.push(2);
// b.push(3);

// console.log(a);
// console.log(b);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// const a = 10;

// if (a) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// if (a) console.log(1);
// else console.log(2);

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(10);
// arr.length = 2;

// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.length = 0;
// arr.push(9);
// arr.length = 10;
// arr.push(10);

// console.log(arr);

// const arr = new Array(9, 10); 
// console.log(arr);

// const arr = new Array(10);
// arr.push(11);
// console.log(arr);

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Пишем регистрацию на prompt. Логин и пароль. Валидацию не делать.
// Аналогично пишем логинизацию, запрашиваем логин и пароль, сравниваем с регистрацией, если верно пишем что логин успешен, если нет заново спрашиваем логин и пароль.
// Запрашиваем максимальную сумму тура.
// Выдаем список стран по сумме, alert
// Выбираем страну и покупаем тур
// Выдаем сообщения что тур куплен осталось на счету столько то денег

const countries = ["Ukraine", "Poland", "Croatia", "Montenegro", "France", "USA"];
const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userCredits;
let userCountry;
let maxPrice;

const filterCountries = () => {
  if (maxPrice < 600) {
    return countries
      .filter((country, index) => {
        return countriesPrice[index] <= maxPrice;
      })
      .toString();
  }

  return countries.toString();
};

const chooseCountry = () => {
  const inputCountry = prompt("Choose country");

  if (inputCountry && countries.includes(inputCountry)) {
    const index = countries.indexOf(inputCountry);

    alert(`You have successfully bought tour to ${inputCountry}, credits left ${maxPrice - countriesPrice[index]}`);
  } else {
    chooseCountry();
  }
};

const selectCountry = () => {
  const availableCountries = filterCountries();

  alert(`Available countries are ${availableCountries}`);

  chooseCountry();
};

const enterMaxPrice = () => {
  const inputMaxPrice = prompt("Enter max price");

  if (!Number.isNaN(+inputMaxPrice) && Number.isInteger(+inputMaxPrice)) {
    maxPrice = +inputMaxPrice;

    selectCountry();
  } else {
    enterMaxPrice();
  }
};

const startLoginProcess = () => {
  const inputUserName = prompt("Enter your username to login");
  const inputUserPass = prompt("Enter yout pass to login");

  if (!!inputUserName && !!inputUserPass) {
    if (userName === inputUserName && userPass === inputUserPass) {
      console.log("Login success");

      enterMaxPrice();
    } else {
      console.log("Try again");

      startLoginProcess();
    }
  }
};

const startRegisterProcess = () => {
  const inputUserName = prompt("Enter your username");
  const inputUserPass = prompt("Enter yout pass");

  if (!!inputUserName && !!inputUserPass) {
    userName = inputUserName;
    userPass = inputUserPass;

    console.log(`Your username is ${inputUserName}`);
    console.log(`Your username is ${inputUserPass}`);

    startLoginProcess();
  } else {
    startRegisterProcess();
  }
};

startRegisterProcess();
