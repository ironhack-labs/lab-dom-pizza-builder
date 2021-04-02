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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const whiteSauce = document.querySelector('.sauce-white'); 
    if (state.whiteSauce) {
      whiteSauce.style.visibility = 'visible';
    } else {
      whiteSauce.style.visibility = 'hidden';
    }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenFreeCrust = document.querySelector('.crust-gluten-free');
  if (state.glutenFreeCrust) {
    glutenFreeCrust.style.visibility = 'visible';
  } else {
    glutenFreeCrust.style.visibility = 'hidden';
  }
}

function renderButtons() {
  //Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }
  const mushroomBtn = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    mushroomBtn.classList.add('active');
  } else {
    mushroomBtn.classList.remove('active');
  }
  const pepperBtn = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    pepperBtn.classList.add('active');
  } else {
    pepperBtn.classList.remove('active');
  }
  const sauceBtn = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    sauceBtn.classList.add('active');
  } else {
    sauceBtn.classList.remove('active');
  }
  const crustBtn = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active');
  } else {
    crustBtn.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //get the price list
  const pricePanel = document.querySelector('aside.panel.price ul');

  //set the initial total price to 10 (base price)
  let totalPrice = basePrice;
  
  //set initial pricePanel inner html to empty string
  pricePanel.innerHTML = "";

  //iterate over the objects in the ingredients object
  for (let ingredientKey in ingredients) {
    //if the state of the value of the ingredient key for the current object in the ingredients object equals true then...
    if (state[ingredientKey]) {
      //add the value of the price key for the current object in the ingredients object to the totalPrice 
      totalPrice += ingredients[ingredientKey].price;
      //update the pricePanel innerHTML to add an li with the ingredient price and name (tolowercase to get rid of camel case);
      pricePanel.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`;
    }
  }
  //update the innerHTML of total price;
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice;
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
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  console.log(state.greenPeppers)
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
