const calculator = {
  memory: 0,
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  saveToMemory(x) {
    this.memory = x;
  },
  clearMemory() {
    this.memory = 0;
  },
  addToMemory(x) {
    this.memory += x;
  },
  getMemory() {
    return this.memory;
  }
}

calculator.saveToMemory(5);
calculator.addToMemory( calculator.minus(8, 2) );
print( calculator.getMemory() );

calculator.clearMemory();
print( calculator.getMemory() );
