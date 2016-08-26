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
    if (this.toppings.includes("black olives") === true) {
      this.price += 4;
    }
    if (this.toppings.includes("sausage") === true) {
      this.price += 4;
    }
    this.price += 12;
    return this.price;
  } else if (this.size === "medium") {
    if (this.toppings.includes("pepperoni") === true) {
      this.price += 3;
    }
    if (this.toppings.includes("black olives") === true) {
      this.price += 3;
    }
    if (this.toppings.includes("sausage") === true) {
      this.price += 3;
    }
    this.price += 10;
    return this.price;
  } else if (this.size === "small") {
    if (this.toppings.includes("pepperoni") === true) {
      this.price += 2;
    }
    if (this.toppings.includes("black olives") === true) {
      this.price += 2;
    }
    if (this.toppings.includes("sausage") === true) {
      this.price += 2;
    }
    this.price += 8;
    return this.price;
  }
}
