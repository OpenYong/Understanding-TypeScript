let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "123";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, erroeCode: code };
}

generateError("에러 발생", 500);
