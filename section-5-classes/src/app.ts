interface Greetable {
  name: string;
  // age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name + "입니다.");
  }
}

let user1: Greetable;

user1 = new Person("Yong");

user1.greet("안녕하세요. 저는");

console.log(user1);
