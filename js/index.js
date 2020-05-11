// jshint esversion: 6 

// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
  document.querySelectorAll('.green-pepper').forEach(oneGrPep => {
    if (state.greenPeppers) {
      oneGrPep.style.visibility = 'visible';
    } else {
      oneGrPep.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceElement.classList.add("sauce-white");
  } else {
    sauceElement.classList.remove("sauce-white");
  }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free");
  } else {
    crustElement.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pep = document.querySelector(".btn-pepperoni");
  let mushroom = document.querySelector(".btn-mushrooms");
  let greenPepper = document.querySelector(".btn-green-peppers");
  let sauce = document.querySelector(".btn-sauce");
  let crust = document.querySelector(".btn-crust");
  if (state.pepperoni){
    pep.classList.add('active');
  } else {
    pep.classList.remove('active');
  }
  if (state.mushrooms){
    mushroom.classList.add('active');
  } else {
    mushroom.classList.remove('active');
  }
  if (state.greenPeppers){
    greenPepper.classList.add('active');
  } else {
    greenPepper.classList.remove('active');
  }
  if (state.whiteSauce){
    sauce.classList.add('active');
  } else {
    sauce.classList.remove('active');
  }
  if (state.glutenFreeCrust){
    crust.classList.add('active');
  } else {
    crust.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pep = document.getElementById("cost-pepperoni");
  let mushroom = document.getElementById("cost-mushrooms");
  let greenPepper = document.getElementById("cost-green-pepper");
  let sauce = document.getElementById("cost-white-sauce");
  let crust = document.getElementById("cost-gluten-free");
  let total = 10;
  if (state.pepperoni){
    pep.style.display = "block";
    total += 1;
  } else {
    pep.style.display = "none";
  }
  if (state.mushrooms){
    mushroom.style.display = "block";
    total += 1;
  } else {
    mushroom.style.display = "none";
  }
  if (state.greenPeppers){
    greenPepper.style.display = "block";
    total += 1;
  } else {
    greenPepper.style.display = "none";
  }
  if (state.whiteSauce){
    sauce.style.display = "block";
    total += 3;
  } else {
    sauce.style.display = "none";
  }
  if (state.glutenFreeCrust){
    crust.style.display = "block";
    total += 5;
  } else {
    crust.style.display = "none";
  }
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});