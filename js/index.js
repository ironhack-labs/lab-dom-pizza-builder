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
  console.log("render Mushrooms");
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushroom) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(pepper => {
    if(state.greenPeppers) {
      pepper.style.visibility = "visible";
    } else {
      pepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
 let thisSauce = document.querySelector('.sauce');
 if (state.whiteSauce) {
   thisSauce.classList.add('sauce-white');
 } else {
  thisSauce.classList.remove('sauce-white');
 }
 console.log('Sauce!')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let thisCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    thisCrust.classList.add('crust-gluten-free');
  } else {
   thisCrust.classList.remove('crust-gluten-free');
  }
  console.log('Crust!')
} 

function renderButtons() {  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else { 
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }
  if (state.mushroom) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else { 
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }
  // green Peppers
  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else { 
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }
  // Sauce
  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else { 
    document.querySelector('.btn-sauce').classList.remove('active')
  }
  // Crust
  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  } else { 
    document.querySelector('.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  let totalPrice = 10;
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // access the LIs
  //Pepperoni
  let priceOne = document.querySelector('.price li');
  const parentElement = document.querySelector('.price ul');
  if (state.pepperoni) {
     parentElement.removeChild(priceOne);
     totalPrice -=1;
  }
  else {
    parentElement.appendChild(priceOne)
    totalPrice += 1;
  }
   console.log(priceOne);
   console.log(parentElement)
  // Update price
  totalPrice += 1;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushroom = !state.mushroom;
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