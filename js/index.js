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


  // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = "visible";
    } else {
      oneGreenPepper.style.visibility = "hidden";
    }
  });
}


  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  document.querySelectorAll(".sauce.sauce-white").forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = "visible";
    } else {
      oneSauce.style.visibility = "hidden";
    }
  });
}
// could use the Toggle function here ==> check le cours que Guillaume a fait

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust.crust-gluten-free").forEach((crustElement)=>{
if (state.glutenFreeCrust){
  crustElement.style.visibility = "visible";
} else {
  crustElement.style.visibility = "hidden";
}
  })
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
const buttonPepperoni = document.querySelector(".btn-pepperoni");
const buttonMushrooms = document.querySelector(".btn-mushrooms");
const buttonGreenPeppers = document.querySelector(".btn-green-peppers");
const buttonSauce = document.querySelector(".btn-sauce");
const buttonCrust = document.querySelector(".btn-crust");

function renderButtons(event) {
  if (state.pepperoni) {
    buttonPepperoni.classList.add("active")}
  else {buttonPepperoni.classList.remove("active");
  }
  if (state.mushrooms){
   buttonMushrooms.classList.add("active")
  }
  else {buttonMushrooms.classList.remove("active")}
  if (state.greenPeppers){
    buttonGreenPeppers.classList.add("active")}
   else {buttonGreenPeppers.classList.remove("active")
  } 
  if (state.whiteSauce){
    buttonSauce.classList.add("active")}
    else {buttonSauce.classList.remove("active")}
   if (state.glutenFreeCrust){
    buttonCrust.classList.add("active")}
    else {buttonCrust.classList.remove("active")}
   }
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
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

document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  });


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});