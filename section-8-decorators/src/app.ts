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

console.log(firstPerson);

// ------------------------------------------------------

function Log(target: any, propertyName: string | Symbol) {
  console.log("프로퍼티 데코레이터");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("유효하지 않은 가격 - 음수가 될 수 없음!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
