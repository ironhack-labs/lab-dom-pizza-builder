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

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneShroom => {
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.className = 'sauce sauce-white';
    } else {
      oneSauce.className = 'sauce';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.className = 'crust crust-gluten-free';
    } else {
      oneCrust.className = 'crust'
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(btn => {
    if(btn.className.indexOf('pepperoni') > 0) {
      if(state.pepperoni) {
        btn.className = 'btn btn-pepperoni active';
      }else { btn.className = 'btn btn-pepperoni';}
    }else if(btn.className.indexOf('mushrooms') > 0) {
      if(state.mushrooms) {
        btn.className = 'btn btn-mushrooms active';
      }else {btn.className = 'btn btn-mushrooms';}
    } else if(btn.className.indexOf('green') > 0) {
      if(state.greenPeppers) {
        btn.className = 'btn btn-green-peppers active';
      }else {btn.className = 'btn btn-green-peppers';}
    }else if(btn.className.indexOf('sauce') > 0) {
      if(state.whiteSauce) {
        btn.className = 'btn btn-sauce active';
      } else{ btn.className = 'btn btn-sauce';}
    } else if(btn.className.indexOf('crust') > 0) {
      if(state.glutenFreeCrust) {
        btn.className ='btn btn-crust active';
      } else{btn.className = 'btn btn-crust';}
    }

  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceTotal = 10;
  let pepperoniValue = 0;
  let mushroomValue = 0;
  let greenPepperValue = 0;
  let whiteSauceValue = 0;
  let glutenFreeValue = 0;

  let pepperoniPrice = document.querySelector('.panel.price li:first-child');
  let mushroomPrice = document.querySelector('.panel.price li:nth-child(2)');
  let greenPepperPrice = document.querySelector('.panel.price li:nth-child(3)');
  let whiteSaucePrice = document.querySelector('.panel.price li:nth-child(4)');
  let glutenFreePrice = document.querySelector('.panel.price li:nth-child(5)');

  if(state.pepperoni) {
    pepperoniPrice.style.display = 'block';
    pepperoniValue = 1;
  } else if(!state.pepperoni) {
    pepperoniPrice.style.display = 'none';
    pepperoniValue = 0;
  }

  if(state.mushrooms) {
    mushroomPrice.style.display = 'block';
    mushroomValue = 1;
  } else if(!state.mushrooms) {
    mushroomPrice.style.display = 'none';
    mushroomValue = 0;
  }
  
  if(state.greenPeppers) {
    greenPepperPrice.style.display = 'block';
    greenPepperValue = 1;
  } else if(!state.greenPeppers) {
    greenPepperPrice.style.display = 'none';
    greenpepperValue = 0;
  }

  if(state.whiteSauce) {
    whiteSaucePrice.style.display = 'block';
    whiteSauceValue = 3;
  } else if(!state.whiteSauce) {
    whiteSaucePrice.style.display = 'none';
    whiteSauceValue = 0;
  }
  
  if(state.glutenFreeCrust) {
    glutenFreePrice.style.display = 'block';
    glutenFreeValue = 5;
  } else if(!state.glutenFreeCrust) {
    glutenFreePrice.style.display = 'none';
    glutenFreePrice = 0;
  }

  priceTotal += pepperoniValue + mushroomValue + greenPepperValue + whiteSauceValue + glutenFreeValue;

let finalTotal = document.querySelector('.panel.price strong').innerText = `\$${priceTotal}`;

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
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})