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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let newSauce = document.querySelector('.sauce');
  state.whiteSauce ? newSauce.classList.add("sauce-white") : newSauce.classList.remove("sauce-white")
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let newCrust = document.querySelector('.crust');
  state.glutenFreeCrust ? newCrust.classList.add("crust-gluten-free") : newCrust.classList.remove("crust-gluten-free")
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let newButton = document.querySelectorAll(".btn");
  newButton.forEach(butto=>{
    const ingredient = butto.dataset.ingredient
    if(state[ingredient]){
      butto.classList.add("active")
    } else{
      butto.classList.remove("active")
    }
  });
};

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let newPrice = document.querySelectorAll(".prc");
  let newFinalPrice = 0;

  newPrice.forEach(prices=>{
    const ingredient = prices.dataset.ingredient
    const price = parseFloat(ingredient.price)
    if(state[ingredient]){
      prices.style.display = "block";
      newFinalPrice += price;
    } else{
      prices.style.display = "none";
      newFinalPrice -= price;
    }
  });
  const priceElement = document.querySelector(".panel.price strong")
  let finalPrice = 10;
  for(let ingredient in state){
    if(state[ingredient]){
      const price = ingredients[ingredient].price;
      finalPrice += price;

    } 
  }
  priceElement.innerHTML = "$" + finalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', e=> {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', e=> { 
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', e=> {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const sauce = document.querySelector('.btn.btn-sauce').addEventListener('click', e=> {
  state.whiteSauce = !state.whiteSauce;
  state.sauce
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', e=> {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
