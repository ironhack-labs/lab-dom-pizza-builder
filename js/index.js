// Write your Pizza Builder JavaScript in this file.

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.cap, .stem').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.querySelector('.sauce');
  state.whiteSauce ? whiteSauce.classList.add("sauce-white") :  whiteSauce.classList.remove("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  state.glutenFreeCrust ? crust.classList.add("crust-gluten-free") :  crust.classList.remove("crust-gluten-free");
  // console.log(crust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoniButton = document.querySelector(".btn-pepperoni")
  state.pepperoni ? pepperoniButton.classList.add("active") : pepperoniButton.classList.remove("active");
  let mushroomButton = document.querySelector(".btn-mushrooms")
  state.mushrooms ? mushroomButton.classList.add("active") : mushroomButton.classList.remove("active");
  let greenPepperButton = document.querySelector(".btn-green-peppers")
  state.greenPeppers ? greenPepperButton.classList.add("active") : greenPepperButton.classList.remove("active");
  let whiteSauceButton = document.querySelector(".btn-sauce")
  state.whiteSauce ? whiteSauceButton.classList.add("active") : whiteSauceButton.classList.remove("active");
  let gfButton = document.querySelector(".btn-crust")
  state.glutenFreeCrust ? gfButton.classList.add("active") : gfButton.classList.remove("active");
}

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;
  state.pepperoni         ? totalPrice += 1 : null;
  state.mushrooms         ? totalPrice += 1 : null;
  state.greenPeppers      ? totalPrice += 1 : null;
  state.whiteSauce        ? totalPrice += 3 : null;
  state.glutenFreeCrust   ? totalPrice += 5 : null;
  let priceList = `<h2>Your pizza's price</h2>\n\n<b>$10 cheese pizza</b>\n<ul>\n${state.pepperoni ? "<li>$1 pepperoni</li>\n" : ""}${state.mushrooms ? "<li>$1 mushrooms</li>\n" : ""}${state.greenPeppers ? "<li>$1 greenPeppers</li>\n" : ""}${state.whiteSauce ? "<li>$3 white sauce</li>\n" : ""}${state.glutenFreeCrust ? "<li>$5 gluten-free crust</li>\n" : ""}</ul>\n<strong>$${totalPrice}</strong>`
  document.querySelector("aside").innerHTML = priceList;
console.log(priceList)
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  console.log("Mushrooms!");
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  console.log("Peppers!");
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});