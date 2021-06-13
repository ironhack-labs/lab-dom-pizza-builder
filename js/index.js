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

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if(state.mushrooms){
      oneMushroom.style.visibility = 'visible'
    } else{
      oneMushroom.style.visibility = 'hidden'
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneElement) => {
    if(state.greenPeppers){
      oneElement.style.visibility = 'visible'
    } else{
      oneElement.style.visibility = 'hidden'
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneElement) => {
    if(state.whiteSauce){
      oneElement.classList.add('sauce-white')
    } else{
      oneElement.classList.remove('sauce-white')
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneElement => {
    if(state.glutenFreeCrust){
      oneElement.classList.add('crust-gluten-free')

    } else {
      oneElement.classList.remove('crust-gluten-free')
    }
  });
  
}

function renderButtons() {
  if(!state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.remove('active')
  } else{document.querySelector('.btn.btn-crust').classList.add('active')}
  
  if(!state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  } else {
    document.querySelector('.btn.btn-sauce').classList.add('active')
  }
}

function renderPrice() {
  let total = basePrice
  // console.log(total)
  let list = document.querySelector('.panel.price ul')
  list.innerHTML = ''
  
  if(state.pepperoni) {
    list.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    total += ingredients.pepperoni.price
  }
  if(state.mushrooms) { 
    list.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    total += ingredients.mushrooms.price
  }
  if(state.greenPeppers) { 
    list.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    total += ingredients.greenPeppers.price
  }
  if(state.whiteSauce) { 
    list.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    total += ingredients.whiteSauce.price
  }
  if(state.glutenFreeCrust) { 
    list.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    total += ingredients.glutenFreeCrust.price
  }
  document.querySelector('.panel.price strong').innerHTML = `$${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function (event) {
  state.pepperoni = !state.pepperoni;
  if(state.pepperoni){
    event.target.classList.add('active')
  } else{
    event.target.classList.remove('active')
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  state.mushrooms = !state.mushrooms;
  if(state.mushrooms){
    event.target.classList.add('active')
  } else{
    event.target.classList.remove('active')
  }
  renderEverything();
} )
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', (event) => {
  state.greenPeppers = !state.greenPeppers;
  if(state.greenPeppers){
    event.target.classList.add('active')
  } else{
    event.target.classList.remove('active')
  }
  renderEverything()
} )
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', (event) => {
  state.whiteSauce = !state.whiteSauce;
  // if(state.whiteSauce){
  //   event.target.classList.add('active')
  // } else{
  //   event.target.classList.remove('active')
  // }
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', (event) =>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  // if(state.glutenFreeCrust){
  //   event.target.classList.add('active')
  // } else{
  //   event.target.classList.remove('active')
  // }
  renderEverything()
})
