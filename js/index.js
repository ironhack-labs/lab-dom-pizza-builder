// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    }
    else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = "visible";
    }
    else {
      greenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceSection = document.querySelector("section.sauce");
  if (state.whiteSauce) {
    sauceSection.classList.add("sauce-white");
  }
  else {
    sauceSection.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustSection = document.querySelector("section.crust");
  if (state.glutenFreeCrust) {
    crustSection.classList.add("crust-gluten-free");
  }
  else {
    crustSection.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach(btn => {
    // remove active class from all buttons, then check state and specific button
    btn.classList.remove("active");
    if (state.pepperoni && btn.classList.contains("btn-pepperoni")) {
      btn.classList.add("active");
    }
    if (state.mushrooms && btn.classList.contains("btn-mushrooms")) {
      btn.classList.add("active");
    }
    if (state.greenPeppers && btn.classList.contains("btn-green-peppers")) {
      btn.classList.add("active");
    }
    if (state.whiteSauce && btn.classList.contains("btn-sauce")) {
      btn.classList.add("active");
    }
    if (state.glutenFreeCrust && btn.classList.contains("btn-crust")) {
      btn.classList.add("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceSection = document.querySelector("aside.panel.price");

  // create new list element to dynamically add list items to
  const ingredientsList = document.createElement("ul");
  priceSection.appendChild(ingredientsList)

  // keep track of total price
  let totalPrice = basePrice;

  // iterate over keys in state
  for (const topping in state) {
    if (state[topping]) {
      // if key is true, get the price by key name in ingredients object
      totalPrice += ingredients[topping].price;
      // create new list item
      const newLi = document.createElement("li");
      newLi.innerText = `$${ingredients[topping].price} ${ingredients[topping].name}`;
      // append to list
      ingredientsList.appendChild(newLi);
    }
  }

  // clear previous list in price section
  priceSection.innerHTML = `
    <h2>Your pizza's price</h2>
    <b>$10 cheese pizza</b>`;

  // append list, create total price element, append total price with correct inner text
  priceSection.appendChild(ingredientsList);
  const totalPriceElement = document.createElement("strong");
  totalPriceElement.innerText = `$${totalPrice}`;
  priceSection.appendChild(totalPriceElement);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
