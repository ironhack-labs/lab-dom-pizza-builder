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
  document.querySelectorAll('.mushroom').forEach(function (mush) {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (greenPep) {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }
  else if(!state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.add('active');
  }
  if(state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }
  else if(!state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add('active');
  }
  if(state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }
  else if(!state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add('active');
  }
  if(state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active');
  }
  else if(!state.whiteSauce){
    document.querySelector('.btn-sauce').classList.remove('active');
  }
  if(state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active');
  }
  else if(!state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.remove('active');
  }
}

/*
  I initially tried going over the buttons as an array.
  I couldn't find a way to separate the states without calling .addEventListener()
  However, that was making the call redundant and user needs to click button twice 
  to remove active button state. I know document query selector ingredient
*/
// An Attempt to shorten iteration 3
// function renderButtons() {
//   // console.log("render button");
//   // Iteration 3: add/remove the class "active" of each `<button class="btn">`
//   // document.querySelector(<here is the string>).classList.remove('active')
//   const btns = document.querySelectorAll('.btn');
//   // this only returns the state names which don't match the css button names
//   // const nameOfFood = Object.getOwnPropertyNames(state);
//   // console.log(nameOfFood);
//   // Trying to get the food name by eliminating active and splitting from index 3.
//   // The issue i'm facing is how to detect the one item being clicked.
//   // Currently finalword console.log()'s all the css toppings
//   Array.from(btns).forEach(function (item) {
//     // console.log(item);
//     const removeActive = item.className.replace('active','');
//     const finalWord = removeActive.slice(4, removeActive.length);
//     //console.log(finalWord); 
//     if(item.classList.contains('active'))
//     {
//       // document.querySelector(`${finalWord}`).classList.remove('active');
//     }
//     else {
//       // item.classList.add('active');
//     }
//   });
  
//   // btns.forEach(function (btn) {
//   //   if (state.btn) {
//   //     btn.classList.remove('active');
//   //   } else {
//   //     btn.classList.add('active');
//   //   }
//   // });
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // toggle to <ul> price list on and off onclick()
   //declare empty price list and total price variables

  // let priceList = ''

  // set total price to init value of baseprice declared at the start

  // let totalPrice = basePrice

  // for (let item in state) {
  //   if (state[item] === true) {
  //     priceList += <li>${item.price}</li> ???
  //   }
  // }

  // set list = priceList
  // document.querySelector('.panel .price ul') = priceList
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
