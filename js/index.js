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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    switch (button.className.split(" ")[1]) {
      case 'btn-pepperoni':
        if (state.pepperoni === true) {
          button.classList.replace('inactive', 'active');
        } else {
          button.classList.replace('active', 'inactive');
        }
        break;
      case 'btn-mushrooms':
        if (state.mushrooms === true) {
          button.classList.replace('inactive', 'active');
        } else {
          button.classList.replace('active', 'inactive');
        }
        break;
      case 'btn-green-peppers':
        if (state.greenPeppers === true) {
          button.classList.replace('inactive', 'active');
        } else {
          button.classList.replace('active', 'inactive');
        }
        break;
      case 'btn-sauce':
        if (state.whiteSauce === true) {
          button.classList.replace('inactive', 'active');
        } else {
          button.classList.replace('active', 'inactive');
        }
        break;
      case 'btn-crust':
        if (state.glutenFreeCrust === true) {
          button.classList.replace('inactive', 'active');
        } else {
          button.classList.replace('active', 'inactive');
        }
        break;
      default:
        console.error('Unknown button');
        break;
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panel = document.querySelector ('.panel.price')
  let list = panel.querySelector('ul')
  list.innerHTML = ""

  let price = 10;
  if (state.pepperoni){
    price += 1
    list.innerHTML += "<li>$1 pepperoni</li>"
  }
  if (state.mushrooms){
    price += 1
    list.innerHTML += "<li>$1 mushrooms</li>"

  }
  if (state.greenPeppers){
    price += 1
    list.innerHTML += "<li>$1 green peppers</li>"

  }
  if (state.whiteSauce){
    price += 3
    list.innerHTML += "<li>$3 white sauce</li>"

  }
  if (state.glutenFreeCrust){
    price += 5
    list.innerHTML += "<li>$5 gluten-free crust</li>"

  }
  
  panel.querySelector('strong').innerText = "$" + price

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
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
