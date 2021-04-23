// Write your Pizza Builder JavaScript in this file.

let buttons = document.querySelectorAll('.btn')
// Constants
let basePrice = 10;
let ingredients = {}
function renderPepperoni() {
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white')
  } else {
    sauce.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
  } else {
    crust.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  buttons.forEach((button)=>{
    if (button.classList.contains('btn-pepperoni') && state.pepperoni){
      button.classList.add('active')
    }else if (button.classList.contains('btn-green-peppers') && state.greenPeppers){
      button.classList.add('active')
    }else if(button.classList.contains('btn-mushrooms') && state.mushrooms){
      button.classList.add('active')
    }else if(button.classList.contains('btn-sauce') && state.whiteSauce){
      button.classList.add('active')
    }else if(button.classList.contains('btn-crust') && state.glutenFreeCrust){
      button.classList.add('active')
    }else{
      button.classList.remove('active')
    }   
  })
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let parentElement = document.querySelector('.price ul')
  parentElement.innerHTML = ''

  let total = 10

  if (state.pepperoni) {
    const pepperoniPrice = document.createElement('li')
    pepperoniPrice.innerText = '$1 pepperoni'
    parentElement.appendChild(pepperoniPrice)
    total += 1
  }

  if (state.mushrooms) {
    const mushroomPrice = document.createElement('li')
    mushroomPrice.innerText = '$1 mushrooms'
    parentElement.appendChild(mushroomPrice)
    total += 1
  }

  if (state.greenPeppers) {
    const greenPepperPrice = document.createElement('li')
    greenPepperPrice.innerText = '$1 green peppers'
    parentElement.appendChild(greenPepperPrice)
    total += 1
  }
  if (state.whiteSauce) {
    const saucePrice = document.createElement('li')
    saucePrice.innerText = '$3 white sauce'
    parentElement.appendChild(saucePrice)
    total += 3
  }
  if (state.glutenFreeCrust) {
    const crustPrice = document.createElement('li')
    crustPrice.innerText = '$5 gluten-free crust'
    parentElement.appendChild(crustPrice)
    total += 5
  }

  document.querySelector('.price strong').innerText = `$${total}`
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
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
  renderEverything()
}); 
