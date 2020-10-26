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
  document.querySelectorAll(".mushroom").forEach(mush => {
    if (state.mushrooms){
      mush.style.visibility = "visible"
    } else{
    mush.style.visibility = "hidden"
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(pepper => {
    if (state.greenPeppers){
      pepper.style.visibility = "visible"
    } else{
      pepper.style.visibility = "hidden"
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(saucewhite => {
    if (state.whiteSauce){
      saucewhite.style.visibility = "visible"
    } else{
      saucewhite.style.visibility = "hidden"
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(crusts => {
    if (state.glutenFreeCrust){
      crusts.style.visibility = "visible"
    } else{
      crusts.style.visibility = "hidden"
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn.btn-pepperoni').forEach(btn => {
    if(state.pepperoni){
      btn.classList.add("active");
    }else{
      btn.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-mushrooms').forEach(btn => {
    if(state.mushrooms){
      btn.classList.add("active");
    }else{
      btn.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-green-peppers').forEach(btn => {
    if(state.greenPeppers){
      btn.classList.add("active");
    }else{
      btn.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-sauce').forEach(btn => {
    if(state.whiteSauce){
      btn.classList.add("active");
    }else{
      btn.classList.remove("active");
    }
  });
  document.querySelectorAll('.btn.btn-crust').forEach(btn => {
    if(state.glutenFreeCrust){
      btn.classList.add("active");
    }else{
      btn.classList.remove("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let prices = document.querySelectorAll(".price > ul >li")
  let count = 10
  let totalPrice = document.querySelector("strong")
  if(state.pepperoni){
    prices[0].textContent = "$1 pepperoni"
    count +=1
  } else {
    prices[0].textContent = ""
    count +=0
  }
  if(state.mushrooms){
    prices[1].textContent = "$1 mushrooms"
    count +=1
  } else {
    prices[1].textContent = ""
    count +=0
  }
  if(state.greenPeppers){
    prices[2].textContent = "$1 greenPeppers"
    count +=1
  } else {
    prices[2].textContent = ""
    count +=0
  }
  if(state.whiteSauce){
    prices[3].textContent = "$3 whiteSauce"
    count +=3
  } else {
    prices[3].textContent = ""
    count +=0
  }
  if(state.glutenFreeCrust){
    prices[4].textContent = "$5 glutenFreeCust"
    count +=5
  } else {
    prices[4].textContent = ""
    count +=0
  }
  totalPrice.textContent = `$${count}`
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