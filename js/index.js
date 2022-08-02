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
  document.querySelectorAll('.mushroom').forEach((shroom) => {
    if (state.mushrooms)
      shroom.style.visibility = 'visible';
    else
      shroom.style.visibility = 'hidden';
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers)
      pepper.style.visibility = 'visible';
    else
      pepper.style.visibility = 'hidden';
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceClasses = document.querySelector('.sauce').classList
  if (state.whiteSauce)
    sauceClasses.add('sauce-white');
  else
    sauceClasses.remove('sauce-white');
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustClasses = document.querySelector('.crust').classList
  if (state.glutenFreeCrust)
    crustClasses.add('crust-gluten-free')
  else
    crustClasses.remove('crust-gluten-free')
}

function camelToKebab(str){
  let result = [... str].map((letter, index) => {
    if (letter.toUpperCase() === letter){
      if (index !== 0)
	return ('-' + letter.toLowerCase());
      else
	return (letter.toLowerCase());
    }
    else
      return (letter);
  })
  return (result.join(''));
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (let ingredient in state){
    let button = document.querySelector(`.btn-${camelToKebab(ingredient)}`)
    if (ingredient === 'whiteSauce')
      button = document.querySelector('.btn-sauce')
    else if (ingredient === 'glutenFreeCrust')
      button = document.querySelector('.btn-crust')
    if (state[ingredient] === true){
      if (!button.classList.contains('active'))
	button.classList.add('active');
    }
    else
      button.classList.remove('active');
  }
}

function createPriceLi(ingredient){
  const li = document.createElement('li')
  li.textContent = `$${ingredients.ingredient.price} ${ingredients.ingredient.name}`
  return (li)
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // let total = 10
  // let list = document.querySelector('.price ul')
  // for (const ingredient in state){
  //   if (state.ingredient === true){
  //   ul.appendChild(createPriceLi(ingredient))
  //   }
  //   else
  //     ul.remove(li)
  //     }
  // document.querySelector('.price strong').textContent = `$${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()  
})


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()  
})
