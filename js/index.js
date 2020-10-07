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
  let price = 0
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      price = 1
    } else {
      onePep.style.visibility = 'hidden';
      price = 0
    }
  })
 return price ;
}

function renderMushrooms() {
  let price = 0
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMus => {
    if (state.mushrooms) {
      oneMus.style.visibility = 'visible';
      price = 1
    } else {
      oneMus.style.visibility = 'hidden';
      price = 0
    }
  })
  return price;   
}

function renderGreenPeppers() {
  let price = 0
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
      price = 1
    } else {
      oneGP.style.visibility = 'hidden';
      price = 0
    }
  })
  return price;  
}

function renderWhiteSauce() {
  let price = 0
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  //document.querySelector(.sauce)
  let sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
    price = 3
  } else {
    sauce.classList.remove("sauce-white") 
    price = 0
  }
  return price
}
  



function renderGlutenFreeCrust() {
  let price = 0
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
    price = 5
  } else {
    crust.classList.remove("crust-gluten-free") 
    price = 0
  }
  return price
}
  


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttons = document.querySelectorAll('.btn')
  let currentValues = Object.values(state)
  
  for (let i = 0; i < currentValues.length; i++) {
    if (currentValues[i]) {
      buttons[i].classList.add('active');
    } else {
      buttons[i].classList.remove('active');
    }
  }


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let listElements = document.querySelectorAll('.price li')
  let currentValues = Object.values(state)
  
  for (let i = 0; i < currentValues.length; i++) {
    if (currentValues[i]) {
      listElements[i].style.display= "block";
    } else {
      listElements[i].style.display="none";
    }
  }
  let pricePizza = 10;
  let pricePep = renderPepperoni();
  let priceMush = renderMushrooms();
  let priceGreenPep = renderGreenPeppers();
  let priceGlutenFree = renderGlutenFreeCrust();
  let priceWhiteSauce = renderWhiteSauce();
  let total = pricePizza + pricePep + priceMush + priceGreenPep + priceGlutenFree + priceWhiteSauce;
  let priceTotalPlaceholder = document.querySelector(".price strong");
  priceTotalPlaceholder.innerHTML = total + "$";
 
  return priceTotalPlaceholder;
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