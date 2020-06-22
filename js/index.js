// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(suc => {
    if (state.whiteSauce) {
      suc.style.visibility = 'visible';
    } else {
      suc.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(gfCrust => {
    if (state.glutenFreeCrust) {
      gfCrust.style.visibility = 'visible';
    } else {
      gfCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons(value) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // let clickedButton = document.querySelector(`btn.btn-pepperoni.active`)
  // if (state.pepperoni) {
  //   clickedButton.className = "btn btn-pepperoni active"
  // } else {
  //   clickedButton.className = "btn btn-pepperoni"}
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let addPepperoni = document.querySelector("body > aside > ul > li:nth-child(1)")
  let addmushrooms = document.querySelector("body > aside > ul > li:nth-child(2)")
  let addgreenPeppers = document.querySelector("body > aside > ul > li:nth-child(3)")
  let addwhiteSauce = document.querySelector("body > aside > ul > li:nth-child(4)")
  let addglutenFreeCrust = document.querySelector("body > aside > ul > li:nth-child(5)")
  let pepperoniprice = 0, mushroomsprice = 0, greenPeppersprice = 0, whiteSauceprice = 0, glutenFreeCrustprice = 0
  if (state.pepperoni) {
    addPepperoni.style.visibility = 'visible';
    pepperoniprice = 1
  } else {
    addPepperoni.style.visibility = 'hidden';
  }
  if (state.mushrooms) {
    addmushrooms.style.visibility = 'visible';
    mushroomsprice = 1
  } else {
    addmushrooms.style.visibility = 'hidden';
  }
  if (state.greenPeppers) {
    addgreenPeppers.style.visibility = 'visible';
    greenPeppersprice = 1
  } else {
    addgreenPeppers.style.visibility = 'hidden';
  }
  if (state.whiteSauce) {
    addwhiteSauce.style.visibility = 'visible';
    whiteSauceprice = 3
  } else {
    addwhiteSauce.style.visibility = 'hidden';
  }
  if (state.glutenFreeCrust) {
    addglutenFreeCrust.style.visibility = 'visible';
    glutenFreeCrustprice = 5
  } else {
    addglutenFreeCrust.style.visibility = 'hidden';
  }

  total = 10 + pepperoniprice + mushroomsprice + greenPeppersprice + whiteSauceprice + glutenFreeCrustprice

  document.querySelector("body > aside > strong").innerText = `$${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  let clickedButton = document.querySelector('.btn.btn-pepperoni')
  if (state.pepperoni) {
    clickedButton.className = "btn btn-pepperoni active"
  } else {
    clickedButton.className = "btn btn-pepperoni"
}});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  let clickedButton = document.querySelector('.btn.btn-mushrooms')
  if (state.mushrooms) {
    clickedButton.className = "btn btn-mushrooms active"
  } else {
    clickedButton.className = "btn btn-mushrooms"
}
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  let clickedButton = document.querySelector('.btn.btn-green-peppers')
  if (state.greenPeppers) {
    clickedButton.className = "btn btn-green-peppers active"
  } else {
    clickedButton.className = "btn btn-green-peppers"
} 
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  let clickedButton = document.querySelector('.btn.btn-sauce')
  if (state.whiteSauce) {
    clickedButton.className = "btn btn-sauce active"
  } else {
    clickedButton.className = "btn btn-sauce"
}
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  let clickedButton = document.querySelector('.btn.btn-crust')
  if (state.glutenFreeCrust) {
    clickedButton.className = "btn btn-crust active"
  } else {
    clickedButton.className = "btn btn-crust"
}
});
