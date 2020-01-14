// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: {
    name: "Pepperonni",
    price: 1,
    state: true
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1,
    state: true
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1,
    state: true
  },
  whiteSauce: {
    name: "White sauce",
    price: 3,
    state: false
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5,
    state: false
  }
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function(element) {
    if (ingredients.pepperonni.state) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll(".mushroom").forEach(function(element) {
    if (ingredients.mushrooms.state) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function(element) {
    if (ingredients.greenPeppers.state) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce");
  if (ingredients.whiteSauce.state) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector(".crust");
  if (ingredients.glutenFreeCrust.state) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let i = 0;
  for (obj in ingredients) {
    ingredientsArr = Object.keys(ingredients);
    let className = ingredientsArr[i];
    let classFind = document.querySelector(`.btn-${className}`);
    ingredients[obj].state
      ? classFind.classList.add("active")
      : classFind.classList.remove("active");
    i++;
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.getElementById("total");
  var totalPrice = basePrice;

  for (let obj in ingredients) {
    if (ingredients[obj].state) totalPrice += ingredients[obj].price;
  }

  priceList.textContent = "$" + totalPrice;
  console.log(totalPrice);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(
  ".btn.btn-pepperonni, .btn.btn-pepperonni"
).onclick = function() {
  //var btnclicked = evt.target;
  //console.log(btnclicked);
  ingredients.pepperonni.state = !ingredients.pepperonni.state;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  ingredients.mushrooms.state = !ingredients.mushrooms.state;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-greenPeppers").onclick = function() {
  ingredients.greenPeppers.state = !ingredients.greenPeppers.state;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-whiteSauce").onclick = function() {
  ingredients.whiteSauce.state = !ingredients.whiteSauce.state;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-glutenFreeCrust").onclick = function() {
  ingredients.glutenFreeCrust.state = !ingredients.glutenFreeCrust.state;
  renderEverything();
};
