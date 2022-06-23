// const userName = "Yong";

// userName = "Maximilian";

// let age = 30;

// age = 29;

// let result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// add(5);

const hobbies = ["독서", "요리"];
const activities = ["등산"];

activities.push(...hobbies);

const person = {
  firstName: "철수",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumber = add(10, 9, 8, 7, 5, 1.3);
console.log(addedNumber);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2); // ['독서', '요리'] '독서' '요리'

const { firstName: userName, age } = person;

console.log(userName, age); //철수 30
