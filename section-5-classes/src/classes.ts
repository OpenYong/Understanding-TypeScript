abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = []; // Modifier를 추가해주었다.

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // 유효성 검사 혹은 어떠한 코드가 작성될 수 있다.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT 부서 - ID :" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("리포트 없음.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("값을 전달해주세요.");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Yong") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accounting 부서 - ID :" + this.id);
  }
}

const it = new ITDepartment("D1", ["Yong"]);

// const accounting = new AccountingDepartment("D2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

it.addEmployee("수영");
it.addEmployee("철수");

it.describe();
it.name = "새 이름";
it.printEmployeeInformation();

accounting.mostRecentReport = "레포트 추가하기 세터";
accounting.addReport("레포트 작성 중...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("김씨");
accounting.getReports();

accounting.printEmployeeInformation();
