//Back End
// Ask Perry about refactoring
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
      this.price += 3;
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
      this.price += 2;
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
      this.price += 1;
    }
    if (this.toppings.includes("sausage") === true) {
      this.price += 2;
    }
    this.price += 8;
    return this.price;
  }
}

function resetFields() {
  $("input#customer-name").val("")
  $("#pizza-size").val("size");
  $('input[type=checkbox]').each(function() {
        this.checked = false;
  });
}
// Front End
$(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var orderName = $("input#customer-name").val();
    var pizzaSize = $("#pizza-size").val();
    var pizzaToppings = $("input:checkbox[name=toppings]:checked");
    var newPizza = new Pizza(orderName, pizzaSize);
    if (orderName) {
      if (pizzaSize) {
        if (pizzaToppings) {
          /*
          I struggled with pushing the check box values to an array. Found the code snippet below and got it to work, but I'm not entirely sure how it works with the $. at the beginning.
          */
          $.each($(pizzaToppings), function() {
              newPizza.toppings.push($(this).val());
          });
          newPizza.priceCalculator();
          console.log("after price" + newPizza);
          $("#order-name").text(newPizza.name);
          $(".pizza-size-output").text(newPizza.size);
          if (newPizza.toppings.length === 0) {
            $(".pizza-toppings-output1").text("cheese pizza");
            $(".pizza-toppings-output2").empty();
            $(".pizza-toppings-output3").empty();
          }
          if (newPizza.toppings.length === 1) {
            $(".pizza-toppings-output1").text("pizza with" + " " + newPizza.toppings[0]);
            $(".pizza-toppings-output2").empty();
            $(".pizza-toppings-output3").empty();
          } else if (newPizza.toppings.length === 2) {
            $(".pizza-toppings-output1").text("pizza with" + " " + newPizza.toppings[0]);
            $(".pizza-toppings-output2").text(" " + "and" + " " + newPizza.toppings[1]);
            $(".pizza-toppings-output3").empty();
          } else if (newPizza.toppings.length === 3) {
            $(".pizza-toppings-output1").text("pizza with" + " " + newPizza.toppings[0]);
            $(".pizza-toppings-output2").text(" " + "and" + " " + newPizza.toppings[1]);
            $(".pizza-toppings-output3").text("," + " " + newPizza.toppings[2]);
          }
          $(".pizza-price-output").text(newPizza.price);
          $("#output").show();
          $("#size-alert").hide();
          $("#name-alert").hide();
          resetFields();
        }
      } else {
        $("#size-alert").show();
        $("#name-alert").hide();
      }
    } else {
      $("#name-alert").show();
      $("#size-alert").hide();
    }
  })
})
