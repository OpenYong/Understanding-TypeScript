function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // constructor를 사용하지 않을때 언더스코어('_')로 이름을 설정해줄 수 있다.
  //   return function (_: Function) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger('PERSON 로그')
@WithTemplate("<h1>나의 Person 객체</h1>", "app")
class Person {
  name = "Yong";

  constructor() {
    console.log("Person 객체 생성");
  }
}

const firstPerson = new Person();

console.log(firstPerson);
