const ShoppingCart = require("./ShoppingCart");

describe("ShoppingCart Tests", () => {
  let cart = new ShoppingCart();

  afterEach(() => {
    cart = new ShoppingCart();
  });

  // Mocking the addItem method
  test("addItem method", () => {
    // Spy addItem method
    const spyAddItem = jest.spyOn(cart, "addItem");

    // Call the mock addItem method with a parameter
    cart.addItem({ name: "laptop", price: 1000 });

    // Check if the addItem method was called with the correct parameter
    expect(spyAddItem).toHaveBeenCalledTimes(1);
    expect(spyAddItem).toHaveBeenCalledWith({ name: "laptop", price: 1000 });
    expect(cart.items.length).toBe(1);
  });

  // Mocking the getTotal method
  test("getTotal method", () => {
    // Create a mock for the getTotal method
    cart.getTotal = jest.fn(() => 50);

    // Call the mocked getTotal method
    const total = cart.getTotal();

    // Check if the getTotal result is as expected
    expect(total).toBe(50);
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  // Mocking the checkout method
  it("should be true, when successfully calls checkout api.", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    // Call the mocked checkout method
    const result = await cart.checkout(); // << mock call api, used promise.

    // Check if the checkout result is as expected
    expect(result).toBe(true);
  });

  it("should be throw error, when fails to call checkout api.", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false }),
      })
    );

    // Check if the checkout result is as expected
    expect(() => cart.checkout()).rejects.toThrow("Error checkout");
  });
});
