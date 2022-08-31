// const names: Array<string> = ["Yong", "In"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: "Yong" }, { age: 30 }));

// const mergedObj = merge({ name: "Yong" }, { age: 30 });

// const mergedObj = merge<{ name: string }, { age: number }>(
//     { name: "Yong" },
//     { age: 30 }
//   );

// console.log(mergedObj.name);

// 96.Working with Constraints

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Yong" }, 30);
console.log(mergedObj.name);

interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "받은 Value 없음.";
  if (element.length === 1) {
    descriptionText = "1개의 element.";
  } else if (element.length > 1) {
    descriptionText = "" + element.length + "개의 element.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("안녕!"));
console.log(countAndDescribe(["iOS", "Android"]));
