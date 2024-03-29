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
// console.log(countAndDescribe(10));

// 98 - keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "yong" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Yong");
textStorage.addItem("Max");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const objYong = { name: "Yong" };
// objStorage.addItem(objYong);
// objStorage.addItem({ name: "Max" });
// objStorage.removeItem(objYong);
// console.log(objStorage.getItems());

// 101. Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Yong", "Movies"];
// names.push('Kim'); // 에러 Readonly이기 때문에

// 102. Generic Types vs Union Types
// 유니온으로 다시 작성해보았음.
// 단점은 숫자 10을 넣어도 에러를 발생시키지 않는다는 점.
// 제네릭을 사용하면 한가지 타입만 사용하도록 해준다.
class DataStorageUnion {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorageUnion = new DataStorageUnion();
textStorageUnion.addItem("Yong");
textStorageUnion.addItem(10);
textStorageUnion.removeItem("Max");
