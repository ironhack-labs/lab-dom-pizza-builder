// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let total = 0
let precioUnitario = 0
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
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
  document.querySelectorAll('.mushroom').forEach(mushy => {
    if (state.mushrooms) {
      mushy.style.visibility = 'visible';
    } else {
      mushy.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(saucy => {
    if (state.whiteSauce) {
      saucy.style.visibility = 'visible';
    } else {
      saucy.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(crusty => {
    if (state.glutenFreeCrust) {
      crusty.style.visibility = 'visible';
    } else {
      crusty.style.visibility = 'hidden';
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice(topping) {
  total = precioUnitario + basePrice
  return total
}

function activeButton(button){
  if(button.classList.contains("active")){
    button.classList.remove("active")
    return true
  }else{
    button.classList.add("active")
    return false
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  const contiene = document.querySelector(".btn-pepperoni")
  activeButton(contiene)
  renderPrice()
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  const contiene = document.querySelector(".btn.btn-mushrooms")
  activeButton(contiene)
  // console.log("funciona mushyy")
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  const contiene = document.querySelector(".btn.btn-green-peppers")
  activeButton(contiene)
  console.log("funciona peppers")
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  const contiene = document.querySelector(".btn.btn-sauce")
  activeButton(contiene)
  console.log("funciona saucy")
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  const contiene = document.querySelector(".btn.btn-crust")
  activeButton(contiene)
  console.log( state.glutenFreeCrust)
});


// 1 hacer suma del total seleccionado 
// 2 mostrar 