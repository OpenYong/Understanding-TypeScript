type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// type ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Yong Yeon Lee",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number; // Funtion Overloads
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  // Admin이 아닐 수 있기 때문에.
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("운전중...");
  }
}

class Truck {
  drive() {
    console.log("트럭 운전중");
  }

  loadCargo(amount: number) {
    console.log("짐을 싣고 있는중..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//방법 1.
// const inputElement = <HTMLInputElement>(
//   document.querySelector('input[type="text"]')!
// );

//방법 2.
const inputElement = document.querySelector(
  'input[type="text"]'
)! as HTMLInputElement;

console.log(inputElement);

inputElement.value = "Hi";

// Index Properties - 키 네임을 모를때
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "유효한 이메일 주소가 아닙니다!",
  username: "대문자로 시작해야합니다!",
};

// Optional Chaining
type Job = {
  title: string;
  description: string;
};

type UserData = {
  id: string;
  name: string;
  job?: Job;
};

const fetchedUserData: UserData = {
  id: "u1",
  name: "Yong",
  //   job: { title: "Frontend Developer", description: "Grade A" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title);

const userInput = "";

// const storedData = userInput || "DEFAULT";
const storedData = userInput || "DEFAULT";

console.log(storedData);
