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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onegreenpepper => {
    if (state.greenPeppers) {
      onegreenpepper.style.visibility = 'visible';
    } else {
      onegreenpepper.style.visibility = 'hidden';
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white")
  }
  else {
    document.querySelector(".sauce").classList.remove("sauce-white")
  }
  }

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free")
  }
  else {
    document.querySelector(".crust").classList.remove("crust-gluten-free")
  }
  }

function renderButtons() {

  if (state.pepperoni) {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active")
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.add("active")
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active")
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.add("active")
  }
  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.remove("active")
  } else {
    document.querySelector(".btn-green-peppers").classList.add("active")
  }

  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.remove("active")
  } else {
    document.querySelector(".btn.btn-sauce").classList.add("active")
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.remove("active")
  } else {
    document.querySelector(".btn.btn-crust").classList.add("active")
  }

}


// Iteration 3: add/remove the class "active" of each `<button class="btn">`


function renderPrice() {
 
    let totalPrice=10;
  
    if (state.pepperoni) {
      totalPrice += 1;
    }
    if (state.mushrooms) {
      totalPrice += 1;
    }
    if (state.greenPeppers) {
      totalPrice += 1;
    }
    if (state.whiteSauce) {
      totalPrice += 3;
    }
    if (state.glutenFreeCrust) {
      totalPrice += 5;
    }
  
    document.querySelector("strong").innerHTML ="$" + totalPrice

    if (!state.pepperoni) {
      pepper.style.visibility = 'hidden';
    }
    else {
      pepper.style.visibility = 'visible';
    }
    if (!state.mushrooms) {
      mushrooms.style.visibility = 'hidden';
    }
    else {
      mushrooms.style.visibility = 'visible';
    }
    if (!state.greenPeppers) {
      greenpeppers.style.visibility = 'hidden';
    }
    else {
      greenpeppers.style.visibility = 'visible';
    }
    if (!state.whiteSauce) {
      sauce.style.visibility = 'hidden';
    }
    else {
      sauce.style.visibility = 'visible';
    }
    if (!state.glutenFreeCrust) {
      crust.style.visibility = 'hidden';
    }
    else {
      crust.style.visibility = 'visible';
    }
    
  }
  // Iteration 4: change the HTML of `<aside class="panel price">`


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
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});