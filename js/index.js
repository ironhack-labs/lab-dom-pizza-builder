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


const buttons = document.querySelectorAll('.btn')

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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
 /* document.querySelectorAll(-gluten-f'.crustree').forEach((gluten) => {
    if (state.glutenFreeCrust) {
      gluten.style.visibility = 'hidden';
    } else {
      gluten.style.visibility = 'visible';
    }
  });*/

  const crust = document.querySelector(".crust")
  if(state.glutenFreeCrust){
    crust.classList.add("crust-gluten-free")
  } else {
    crust.classList.remove("crust-gluten-free")
  }


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  buttons.forEach(btn => {
    if (state[btn.id]) {
      btn.classList.add("active")
     } else {
      btn.classList.remove("active")

     }
  })
//  const pepbtn = document.querySelector('.btn.btn-pepperoni')
//   if(state.pepperoni) {
//     pepbtn.classList.add("active")
//   }
//   else { pepbtn.classList.remove("active")}

//   const musbtn = document.querySelector('.btn.btn-mushrooms')
//   if(state.mushrooms) {
//     musbtn.classList.add("active")
//   }
//   else { musbtn.classList.remove("active")}

//   const greenpepbtn = document.querySelector('.btn.btn-green-peppers')
//   if(state.greenPeppers) {
//     greenpepbtn.classList.add("active")
//   }
//   else { greenpepbtn.classList.remove("active")}

//   const saucebtn = document.querySelector('.btn.btn-sauce')
//   if(!state.whiteSauce) {
//     saucebtn.classList.add("active")
//   }
//   else { saucebtn.classList.remove("active")}

//   const glutenbtn = document.querySelector('.btn.btn-crust')
//   if(!state.glutenFreeCrust) {
//     glutenbtn.classList.add("active")
//   }
//   else { glutenbtn.classList.remove("active")}



  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  const listItems = document.querySelectorAll(".panel.price li")

  listItems.forEach(item => {
    const display = state[item.dataset.id] ? "block" : "none"
    item.style.display = display
  })

  // Iteration 4: change the HTML of `<aside class="panel price">`
}







renderEverything();

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    state[btn.id] = !state[btn.id];
    renderEverything();
    renderButtons();
  });
})

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
// document.querySelector('.btn.btn-pepperoni')

// document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
//   state.mushrooms = !state.mushrooms;
//   renderEverything();
// });

// document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
//   state.greenPeppers = !state.greenPeppers;
//   renderEverything();
// });

// document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
//   state.whiteSauce = !state.whiteSauce;
//   renderEverything();
// });

// document.querySelector('.btn.btn-crust').addEventListener('click', function () {
//   state.glutenFreeCrust = !state.glutenFreeCrust;
//   renderEverything();
// });
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
