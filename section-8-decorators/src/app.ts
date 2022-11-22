function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Person 객체 생성");
  }
}

const firstPerson = new Person();

console.log(firstPerson);
