class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = []; // Modifier를 추가해주었다.

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department " + this.id + ": " + this.name);
  }

  addEmployee(employee: string) {
    // 유효성 검사 혹은 어떠한 코드가 작성될 수 있다.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("D1", "Accounting");

accounting.addEmployee("수영");
accounting.addEmployee("철수");

// 바로 접근하는 것은 바람직하지 않을 수 있다.
// accounting.employees[2] = "존";

accounting.describe();
// accounting.name = "새 이름";
accounting.printEmployeeInformation();
