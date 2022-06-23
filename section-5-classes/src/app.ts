// type AddFn = (a: number, b: number) => number;

// 타입의 대안으로 사용할 수 있다.
// 하지만 타입을 사용하는게 조금 더 일반적이고 짧게 코드를 작성할 수 있다.
interface AddFn {
  (a: number, b: number): number; // 익명함수
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // 함수에도 Optional을 붙일 수 있다.
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name + "입니다.");
    } else {
      console.log("안녕하세요!");
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("안녕하세요. 저는");

console.log(user1);
