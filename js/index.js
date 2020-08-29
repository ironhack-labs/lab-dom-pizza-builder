// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
@@ -16,7 +16,7 @@ let state = {
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
@@ -33,51 +33,168 @@ function renderEverything() {
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = 'hidden';
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = "visible";
    } else {
      oneGP.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector(".btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperoni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ul = document.querySelector(".price ul");
  let pricePepperoni,
    priceMushrooms,
    priceGreenPeppers,
    priceWhiteSauce,
    priceGlutenFreeCrust;

  let priceTotal = basePrice;

  if (state.pepperoni) {
    pricePepperoni = `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    priceTotal += ingredients.pepperoni.price;
  } else {
    pricePepperoni = "";
  }
  if (state.mushrooms) {
    priceMushrooms = `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    priceTotal += ingredients.mushrooms.price;
  } else {
    priceMushrooms = "";
  }
  if (state.greenPeppers) {
    priceGreenPeppers = `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    priceTotal += ingredients.greenPeppers.price;
  } else {
    priceGreenPeppers = "";
  }
  if (state.whiteSauce) {
    priceWhiteSauce = `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    priceTotal += ingredients.whiteSauce.price;
  } else {
    priceWhiteSauce = "";
  }
  if (state.glutenFreeCrust) {
    priceGlutenFreeCrust = `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    priceTotal += ingredients.glutenFreeCrust.price;
  } else {
    priceGlutenFreeCrust = "";
  }

  ul.innerHTML =
    pricePepperoni +
    priceMushrooms +
    priceGreenPeppers +
    priceWhiteSauce +
    priceGlutenFreeCrust;

  const totalDisplay = document.querySelector(".price strong");
  totalDisplay.innerText = `$${priceTotal}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  console.log("sauce!");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  console.log("crust!");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});