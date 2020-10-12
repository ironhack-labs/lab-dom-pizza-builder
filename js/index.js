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
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">
  let whiteSauce = document.querySelector('[class ^="sauce"]');

  if (state.whiteSauce) {
    whiteSauce.style.visibility = 'visible';
  } else {
    whiteSauce.style.visibility = 'hidden';
  }

  if (whiteSauce.style.visibility === 'visible') {
    whiteSauce.setAttribute('class', 'sauce sauce-white');
  } else {
    whiteSauce.setAttribute('class', 'sauce');
  } 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  //cheese is a fixed reference to the crust, unless some monster asks for a pizza with no cheese... 
  let cheese = document.querySelector('.cheese'); 

  if (state.glutenFreeCrust) {
    cheese.parentNode.setAttribute('class', 'crust crust-gluten-free');
  } else {
    cheese.parentNode.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
    document.getElementsByClassName('btn btn-pepperoni')[0].setAttribute('class', 'btn btn-pepperoni active');
  } else {
    document.getElementsByClassName('btn btn-pepperoni')[0].setAttribute('class', 'btn btn-pepperoni');
  }

  if (state.mushrooms) {
    document.getElementsByClassName('btn btn-mushrooms')[0].setAttribute('class', 'btn btn-mushrooms active');
  } else {
    document.getElementsByClassName('btn btn-mushrooms')[0].setAttribute('class', 'btn btn-mushrooms');
  }

  if (state.greenPeppers) {
    document.getElementsByClassName('btn btn-green-peppers')[0].setAttribute('class', 'btn btn-green-peppers active');
  } else {
    document.getElementsByClassName('btn btn-green-peppers')[0].setAttribute('class', 'btn btn-green-peppers');
  }

  if (state.whiteSauce) {
    document.getElementsByClassName('btn btn-sauce')[0].setAttribute('class', 'btn btn-sauce active');
  } else {
    document.getElementsByClassName('btn btn-sauce')[0].setAttribute('class', 'btn btn-sauce');
  }

  if (state.glutenFreeCrust) {
    document.getElementsByClassName('btn btn-crust')[0].setAttribute('class', 'btn btn-crust active');
  } else {
    document.getElementsByClassName('btn btn-crust')[0].setAttribute('class', 'btn btn-crust');
  }
}

function renderPrice() {
  let prices = document.querySelectorAll(".price li");
  let states = Object.values(state);
  let total = 10;
  for (let i = 0; i < states.length; i++) {
    if (states[i] === true) {
      prices[i].style.display = "block";
      total += Number(prices[i].innerHTML.slice(1, 2));
    } else {
      prices[i].style.display = "none";
    }
  }
  document.querySelector(".price strong").innerHTML = '$ '+total;
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
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

//Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
