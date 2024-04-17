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
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceElement = document.querySelector('.sauce');
if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white');
  } else {
    sauceElement.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
      crustElement.classList.add('crust-gluten-free');
    } else {
      crustElement.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepBtn = document.querySelector('.btn-pepperoni')
  if (state.pepperoni)  { pepBtn.classList.add('active') }
  else                  {pepBtn.classList.remove('active') }

  let mushBtn = document.querySelector('.btn-mushrooms')
  if (state.mushrooms)  { mushBtn.classList.add('active') }
  else                  {mushBtn.classList.remove('active') }

  let greenBtn = document.querySelector('.btn-green-peppers')
  if (state.greenPeppers)  { greenBtn.classList.add('active') }
  else                  {greenBtn.classList.remove('active') }

  let sauceBtn = document.querySelector('.btn-sauce')
  if (state.whiteSauce) { sauceBtn.classList.add('active') }
  else                  {sauceBtn.classList.remove('active') }

  let crustBtn = document.querySelector('.btn-crust')
  if (state.glutenFreeCrust)  { crustBtn.classList.add('active') }
  else                  {crustBtn.classList.remove('active') } 
}

function renderPrice() {
    let pay = {
    pep: state.pepperoni? 1:0,
    mush: state.mushrooms? 1: 0,
    green: state.greenPeppers? 1:0,
    sauce: state.whiteSauce? 3 : 0,
    crust: state.glutenFreeCrust? 5 : 0
    }
    pay.total= Object.values(pay).reduce( (a,b) => a+b, 10)
 
    document.getElementById("pepperoniPrice").innerText=
      `$${pay.pep} pepperoni`;
    document.getElementById("pepperoniPrice").style.display = 
      state.pepperoni? '' : 'none'
    
    document.getElementById("mushroomsPrice").innerText=
      `$${pay.mush} mushrooms`;
    document.getElementById("mushroomsPrice").style.display = 
      state.mushrooms? '' : 'none'  
    
    document.getElementById("greenPeppersPrice").innerText=
      `$${pay.green} green peppers`;
    document.getElementById("greenPeppersPrice").style.display = 
      state.greenPeppers? '' : 'none' 

    document.getElementById("whiteSaucePrice").innerText=
      `$${pay.sauce} white sauce`;
    document.getElementById("whiteSaucePrice").style.display = 
      state.whiteSauce? '' : 'none'

    document.getElementById("glutenFreeCrustPrice").innerText=
      `$${pay.crust} gluten-free crust`;
    document.getElementById("glutenFreeCrustPrice").style.display = 
      state.glutenFreeCrust? '' : 'none'

    document.getElementById("totalPrice").innerText =
        `$${pay.total}`
}


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
document.querySelector('.btn.btn-sauce').addEventListener("click", function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener("click", function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})