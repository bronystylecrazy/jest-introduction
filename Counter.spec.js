const Counter = require("./counter");

describe("Counter", () => {
  let counter;

  // setup
  beforeEach(() => {
    counter = new Counter(0);
  });

  // tear down
  afterEach(() => {
    counter.reset(); // cleanup state (just demonstration as beforeEach will implicitly reset the state)
  });

  it("should increment the count", () => {
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  it("should decrement the count", () => {
    counter.decrement();
    expect(counter.getCount()).toBe(-1);
  });

  it("should be 4 after 4 increments", () => {
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    expect(counter.getCount()).toBe(4);
  });

  it("should be -4 after 4 decrements", () => {
    counter.decrement();
    counter.decrement();
    counter.decrement();
    counter.decrement();
    expect(counter.getCount()).toBe(-4);
  });

  it("should be 0 after 4 increments and 4 decrements", () => {
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.decrement();
    counter.decrement();
    counter.decrement();
    counter.decrement();
    expect(counter.getCount()).toBe(0);
  });

  it("should be 0 after reset", () => {
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.decrement();
    counter.decrement();
    counter.decrement();
    counter.decrement();
    counter.reset();
    expect(counter.getCount()).toBe(0);
  });
});
