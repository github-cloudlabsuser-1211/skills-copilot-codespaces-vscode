class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value !== 0) {
      this.result /= value;
    } else {
      console.error("Cannot divide by zero");
    }
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }
}

// Example usage:
const calc = new Calculator();
calc.add(10).subtract(2).multiply(3).divide(2);
console.log(calc.getResult()); // Output: 12

module.exports = Calculator;