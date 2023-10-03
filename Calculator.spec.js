const Calculator = require("./Calculator");

describe("Calculator", () => {
  let calculator;

  beforeAll(() => {
    calculator = new Calculator();
  });

  it("should add two numbers", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it("should subtract two numbers", () => {
    const result = calculator.subtract(3, 2);
    expect(result).toBe(1);
  });

  it("should multiply two numbers", () => {
    const result = calculator.multiply(3, 2);
    expect(result).toBe(6);
  });

  it("should divide two numbers", () => {
    const result = calculator.divide(6, 2);
    expect(result).toBe(3);
  });

  it("should throw an error if devided by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow();
  });

  it("should be the same value, when instantiated.", () => {
    const a = new Calculator();
    const b = new Calculator();
    expect(a).toEqual(b);
  });

  it("should not be the same memory address, when instantiated.", () => {
    const a = new Calculator();
    const b = new Calculator();
    expect(a).not.toBe(b);
  });
});
