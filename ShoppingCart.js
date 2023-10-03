class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  async checkout() {
    // Simulate a checkout process (e.g., sending an order to a server).
    // In a real application, this would be more complex.
    const response = await fetch("https://example.com/cart/checkout", {
      method: "POST",
      body: JSON.stringify(this.items),
    }).then((res) => res.json());

    if (!response.success) throw new Error("Error checkout");

    return response.success;
  }
}

module.exports = ShoppingCart;
