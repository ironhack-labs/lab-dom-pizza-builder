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


// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush)=> {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible"; 
    } else {
      oneMush.style.visibility = "hidden"
    }
  });
}


// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGrePep)=> {
    if (state.greenPeppers) {
      oneGrePep.style.visibility = "visible"; 
    } else {
      oneGrePep.style.visibility = "hidden"
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


function renderWhiteSauce() {
  const whiteSauceProperty = document.querySelector(".sauce");

 // console.log(whiteSauceProperty) -> querySelectorAll mit []
  if(!state.whiteSauce){
      whiteSauceProperty.classList.remove("sauce-white")
    } else {
      whiteSauceProperty.classList.add("sauce-white")
    }
  }


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  
  function renderGlutenFreeCrust() {
    const crustProperty = document.querySelector(".crust")
    if(!state.glutenFreeCrust){
      crustProperty.classList.remove("crust-gluten-free")
    } else {
      crustProperty.classList.add("crust-gluten-free") 
    }
  }
  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
function renderButtons() {


  const renderButtonsPepperoni = document.querySelector(".btn")

  if(!state.pepperoni){
    renderButtonsPepperoni.classList.remove("active")
  } else {
    renderButtonsPepperoni.classList.add("active")
  }

  const renderButtonsMushrooms = document.querySelector(".btn")
  
  if(!state.mushrooms){
    renderButtonsMushrooms.classList.remove("active")
  } else {
    renderButtonsMushrooms.classList.add("active")
  }

  const renderButtonsGreenPep = document.querySelector(".btn")
  
  if(!state.greenPeppers){
    renderButtonsGreenPep.classList.remove("active")
  } else {
    renderButtonsGreenPep.classList.add("active")
  }

  const renderButtonsWhiteSauce = document.querySelector(".btn")
  
  if(!state.whiteSauce){
    renderButtonsWhiteSauce.classList.remove("active")
  } else {
    renderButtonsWhiteSauce.classList.add("active")
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let ttl_sum = basePrice;
  const price_panel = document.querySelector('.panel.price');
  const list = price_panel.querySelector('ul');
  const sum_text = price_panel.querySelector('strong');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  for (let key in state) {
    if (state[key] === true) {
      let new_li = document.createElement('li');
      let inner_text = `$${ingredients[key].price} ${ingredients[key].name}`;
      new_li.innerText = inner_text;
      ttl_sum += ingredients[key].price
      list.appendChild(new_li)
    }
  }
  price_panel.querySelector('strong').innerText = `$${ttl_sum}`;
}

renderEverything(); //this function call renders everything from this function 

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
  renderEverything();
});
