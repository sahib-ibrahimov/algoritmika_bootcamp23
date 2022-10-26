const calculator = {
  memory: 0,

  getMemory() {
    return this.memory;
  },
  clearMemory() {
    this.memory = 0;
  },
  saveToMemory(x) {
    this.memory = x;
    return this;
  },

  plus(x) {
    this.memory += x;
    return this;
  },
  minus(x) {
    this.memory -= x;
    return this;
  },
  multiply(x) {
    this.memory *= x;
    return this;
  },
  divide(x) {
    this.memory /= x;
    return this;
  }
}

calculator.saveToMemory(5).plus(3).divide(4).multiply(10).minus(3);

print( calculator.getMemory() );
