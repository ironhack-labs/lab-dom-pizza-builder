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
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">
function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
      sauce.classList.add('sauce-white')
    } else {
      sauce.classList.remove('sauce-white')
    }
};

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free')
    } else {
      crust.classList.remove('crust-gluten-free')
    }
  
};
  
// Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // if (state.pepperoni) {
  //   document.querySelector('.btn-pepperoni').classList.add('active')
  // } else {
  //   document.querySelector('.btn-pepperoni').classList.remove('active')
  // }
  // 
  function renderButtons() {
  document.querySelectorAll('.btn').forEach((btn,index) => {
    const eachBtnState = Object.keys(state)
  if (state[eachBtnState[index]]) {
    btn.classList.add(`active`)
  } else {
    btn.classList.remove(`active`)
  }
})
}

//

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let ul = document.querySelector('.price ul')
  let strong = document.querySelector('.price strong')
  let innerUl = '';
  let sum = 10;
  for (el in state){
    if(state[el]) {
      sum += ingredients[el].price;
      innerUl += `<li> $${ingredients[el].price} ${ingredients[el].name}</li>`
    }
  }
  strong.innerHTML =`$${sum}`
  console.log(innerUl);
  ul.innerHTML = innerUl;


  
  // let pizzahtml = document.querySelector('strong')
  
  // .forEach((li,index) => {
  //   const price = Object.keys(ingredients)
  // if (ingredients[eachBtnState[index]]) {
  //   btn.classList.add(`active`)
  // } else {
  //   btn.classList.remove(`active`)
  // }
  // basePrice += ingredients.price 
// })
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