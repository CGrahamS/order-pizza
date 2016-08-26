//Back End

function Pizza(name, size) {
  this.name = name;
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

// Front End

$(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var orderName = $("input#customer-name").val();
    var pizzaSize = $("#pizza-size").val();
    var newPizza = new Pizza(orderName, pizzaSize);
    console.log(newPizza);
    $.each($("input:checkbox[name=toppings]:checked"), function() {
        newPizza.toppings.push($(this).val());
    });
    console.log(newPizza.toppings);
    newPizza.priceCalculator();
    console.log(newPizza.price);
    console.log(newPizza);
    $("#order-name").text(newPizza.name);
    $(".pizza-size-output").text(newPizza.size);
    if (newPizza.toppings.length === 1) {
      $(".pizza-toppings-output1").text(newPizza.toppings[0]);
    } else if (newPizza.toppings.length === 2) {
      $(".pizza-toppings-output1").text(newPizza.toppings[0]);
      $(".pizza-toppings-output2").text(" and " + newPizza.toppings[1]);
    } else if (newPizza.toppings.length === 3) {
      $(".pizza-toppings-output1").text(newPizza.toppings[0]);
      $(".pizza-toppings-output2").text(" and " + newPizza.toppings[1]);
      $(".pizza-toppings-output3").text(", " + newPizza.toppings[2]);
    }
    $(".pizza-price-output").text(newPizza.price);
    $("#output").show();
  })
})
