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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Yong" }, { age: 30 });
console.log(mergedObj.name);
