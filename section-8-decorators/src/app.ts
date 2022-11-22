function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("렌더링 Template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger('PERSON 로그')
@Logger("Logging")
@WithTemplate("<h1>나의 Person 객체</h1>", "app")
class Person {
  name = "Yong";

  constructor() {
    console.log("Person 객체 생성");
  }
}

const firstPerson = new Person();
