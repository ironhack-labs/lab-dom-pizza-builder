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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(gpep => {
    if (state.greenPeppers) {
      gpep.style.visibility = 'visible';
    } else {
      gpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach(white => {
    if (state.whiteSauce) {
      white.style.background = '#fff4aa';
    } else {
      white.style.background = '#dd2f25';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.style.background = '#e0d5cf';
    } else {
      crust.style.background = '#ab5f2b';
    }
  });
}



// Set the visibility of buttons
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};




function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  
}

// function buttonMushroom() {
//   document.querySelector('.btn.btn-mushrooms').forEach(mushrooms => {
//     if (state.mushrooms) {
//       btn-mushrooms.style.background = '#b49989';
//     } else {
//       crust.style.background = '#ab5f2b';
//     }
//   });
// }








function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();



// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
