function Logger(logString : string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('PERSON 로그')
class Person {
  name = "Max";

  constructor() {
    console.log("Person 객체 생성");
  }
}

const firstPerson = new Person();

console.log(firstPerson);
 