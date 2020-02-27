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
  document.querySelectorAll('.pep').forEach(pep => {
    if (state.pepperoni) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  });
}

let renderMushrooms = () => {
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

let renderGreenPeppers = () => {
  document.querySelectorAll('.green-pepper').forEach(green => {
    if (state.greenPeppers) {
      green.style.visibility = 'visible';
    } else {
      green.style.visibility = 'hidden';
    }
  });
}

let renderWhiteSauce = () => {
  document.querySelectorAll('.sauce').forEach(white => {
    if (state.whiteSauce) {
      white.style.background = '#fff4aa';
    } else {
      white.style.background = "#640d15";
    }
  });
}

let renderGlutenFreeCrust = () => {
  document.querySelectorAll('.crust').forEach(gf => {
    if (state.glutenFreeCrust) {
      gf.style.background = '#e0d5cf';
    } else {
      gf.style.background = "#ab5f2b";
    }
  });
}

let renderButtons = () => {
  document.querySelectorAll('.active').forEach(act => {
    if (state.pepperoni) {
      act.style.active = 'visible';
    } else {
      act.style.active = 'hidden'
    }  
  });
}
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
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
