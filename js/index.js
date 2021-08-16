// ---- Ismael Lo ----
// ---- 16 Aug 21 ----
// -- Ironhack pizza -

// Constants
const currentPrice = 10;


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
  document.querySelectorAll('.mushroom > div').forEach((oneShroom) => {
    
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}


// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  var element = document.querySelector(".sauce");
  if (!state.whiteSauce){
    //                    V this is done by the button so doing
    //                    V it here switches it back
    // state.whiteSauce = !state.whiteSauce;
    element.classList.remove("sauce-white");
  } else {
    // state.whiteSauce = !state.whiteSauce;
    element.classList.add("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var element = document.querySelector(".crust");
  if (!state.glutenFreeCrust){
    element.classList.remove("crust-gluten-free");
  } else {
    element.classList.add("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //// //// //// //// could do it smarter //// //// //// //// 
  var element = document.querySelector(".btn-pepperoni");
  if (!state.pepperoni){
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  
  element = document.querySelector(".btn-mushrooms");
  if (!state.mushrooms){
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  
  element = document.querySelector(".btn-green-peppers");
  if (!state.greenPeppers){
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  
  element = document.querySelector(".btn-sauce");
  if (!state.whiteSauce){
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  
  element = document.querySelector(".btn-crust");
  if (!state.glutenFreeCrust){
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let currentPrice = 10;
  //                                               V this is wrong ////
  // let displayedPrice = document.querySelector(".panel > b")
  let displayedPrice = document.querySelector("aside.panel > strong:nth-child(4)")
  if (state.pepperoni){
    currentPrice += 1;
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(1)").style.visibility = 'visible';
  } else {
    
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(1)").style.visibility = 'hidden';
  }

  if (state.greenPeppers) {
    currentPrice += 1;
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(2)").style.visibility = 'visible';
  } else {
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(2)").style.visibility = 'hidden';
  }

  if (state.mushrooms) {
    currentPrice += 1;
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(3)").style.visibility = 'visible';
  } else {
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(3)").style.visibility = 'hidden';
    
  }

  if (state.whiteSauce) {
    currentPrice += 3;
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(4)").style.visibility = 'visible';
  } else {
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(4)").style.visibility = 'hidden';
  }

  if (state.glutenFreeCrust) {currentPrice += 5;
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(5)").style.visibility = 'visible';
  } else {
    document.querySelector("aside.panel > ul:nth-child(3) > li:nth-child(5)").style.visibility = 'hidden';
  }
  console.log(`price is now ${currentPrice} <i>`)
  displayedPrice.innerHTML = `<i> ${currentPrice} <i>`
  // aside.panel > strong:nth-child(4)
}



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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
  console.log(state);
  renderEverything();
});

renderEverything();