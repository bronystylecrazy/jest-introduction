class Counter {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }

  reset() {
    this.count = 0;
  }
}

module.exports = Counter;
