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
  document.querySelectorAll('.pep').forEach((onePep) => {
    console.log('hello pep')
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
      console.log('hello mushroom')
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    console.log('Hello GreenPeppers')
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  let renderWhite = document.querySelector('.sauce')
 // console.log(renderWhite.classList)
  if(state.whiteSauce === true){
    renderWhite.classList.add('sauce-white')
  }
  else {renderWhite.classList.remove('sauce-white')
  }
 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  let renderGlutenFree = document.querySelector('.crust')
 // console.log(renderGlutenFree.classList)
  if (state.glutenFreeCrust === true){
    renderGlutenFree.classList.add('crust-gluten-free')
  }
  else {renderGlutenFree.classList.remove('crust-gluten-free')
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  let pepperoniButton = document.querySelector('.btn-pepperoni')
  let mushroomsButton = document.querySelector('.btn-mushrooms')
  let peppersButton = document.querySelector('.btn-green-peppers')
  let sauceButton = document.querySelector('.btn-sauce')
  let crustButton = document.querySelector('.btn-crust')

  // console.log(pepperoniButton.classList)
  // console.log(mushroomsButton.classList)
  // console.log(peppersButton.classList)
  // console.log(sauceButton.classList)
  // console.log(crustButton.classList)
  if (state.pepperoni=== true){
    pepperoniButton.classList.add('active')
  }
  else {pepperoniButton.classList.remove('active')}
  if (state.mushrooms=== true){
    mushroomsButton.classList.add('active')
  }
  else {mushroomsButton.classList.remove('active')}
  if (state.greenPeppers=== true){
    peppersButton.classList.add('active')
  }
  else {peppersButton.classList.remove('active')}
  if (state.whiteSauce=== true){
    sauceButton.classList.add('active')
  }
  else {sauceButton.classList.remove('active')}
  if (state.glutenFreeCrust=== true){
    crustButton.classList.add('active')
  }
  else {crustButton.classList.remove('active')}
  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {

  let list = document.querySelector('.price ul')
  
  let totalPrice = basePrice
  // console.log(pepperoniPrice)
  
  document.querySelector('.price ul').innerHTML = ''
  document.querySelector('.price strong').innerHTML = ''

  if (state.pepperoni=== true){
    list.innerHTML += `<li>${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`
    totalPrice = totalPrice + ingredients.pepperoni.price
  }
  if (state.mushrooms=== true){
    list.innerHTML += `<li>${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
    totalPrice = totalPrice + ingredients.mushrooms.price
  }
  if (state.greenPeppers=== true){
    list.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
    totalPrice = totalPrice + ingredients.greenPeppers.price
  }
  if (state.whiteSauce=== true){
    list.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
    totalPrice = totalPrice + ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust=== true){
    list.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
    totalPrice = totalPrice + ingredients.glutenFreeCrust.price
  }

  document.querySelector('.price strong').innerHTML = `total price $${totalPrice}`

  // Iteration 4: change the HTML of `<aside class="panel price">`
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