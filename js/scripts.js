function Pizza(size) {
  this.size = size;
  this.toppings = []
  this.price = 0;
}

Pizza.prototype.priceCalculator = function() {
  if (this.size === "large") {
    if (this.toppings.includes("pepperoni") === true) {
      this.price += 4;
    }
    this.price += 12;
    return this.price;
  } else if (this.size === "small") {
    this.price += 8;
  }
}
