class SimpleCalculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  division() {
    return this.num1 / this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }
}

const arthimetic = new SimpleCalculator(4,2);

module.exports = arthimetic;