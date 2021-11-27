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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
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
  document.querySelectorAll('.green-pepper').forEach((oneMushroom) => {
    if (state.greenPeppers) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce-white').forEach((oneMushroom) => {
    if (state.whiteSauce) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector('.crust').classList.toggle("crust-gluten-free")
}

function renderButtons(buttonSelector) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.classList.toggle("active")
  }
}

function renderPrice() {
  // every time a button is clicked, delete all the "li"
  let a = document.querySelector(".ingredients");
  while (a.firstChild) {
    a.removeChild(a.firstChild);
  }
  // then for every btn clicked (state = true) print the info
  for (ing in state){
    //console.log(ing, state[ing]);
    //console.log(ingredients[ing].name);
    //console.log(ingredients[ing].price);
    if (state[ing]){
      let li = document.createElement("li");
      li.innerText = `$ ${ingredients[ing].price} ${ingredients[ing].name} `;
      document.querySelector(".ingredients").appendChild(li);
    } 
  }  

  // update the price: 
  
}




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  renderButtons(".btn.btn-pepperoni");
  // let ing = ingredients.pepperoni.name;
  // let pri = ingredients.pepperoni.price;
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons(".btn.btn-mushrooms");
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons(".btn.btn-green-peppers");
  renderPrice();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons(".btn.btn-sauce");
  renderPrice();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  renderGlutenFreeCrust();
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderButtons(".btn.btn-crust");
  renderPrice();
});