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
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mush) =>{
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else{
      mush.style.visibility = 'hidden'
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) =>{
    if (state.greenPeppers){
      pepper.style.visibility = 'visible';
    } else{
      pepper.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((white) =>{
    if (state.whiteSauce){
      white.classList.add('sauce-white');
    } else{
      white.classList.remove('sauce-white');
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((glut) => {
    if (state.glutenFreeCrust){
      glut.classList.add('crust-gluten-free');
    } else{
      glut.classList.remove('crust-gluten-free');
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  for (let ingredient in state){
    console.log(ingredient);
    const button = document.querySelector(lookup[ingredient])
    if (state[ingredient]){
      button.classList.add('active');
    }else{
      button.classList.remove('active')
    }
  }}



  // if (state.pepperoni === true){
  //   document.querySelector('.btn-pepperoni)').classList.add('active')
  // }else{
  //   document.querySelector('.btn-pepperoni').classList.remove('active')
  // }
  // // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // if (state.mushrooms === true){
  //   document.querySelector('.btn-mushrooms').classList.add('active')
  // } else{
  //   document.querySelector('.btn-mushrooms').classList.remove('active')
  // }
  // if (state.greenPeppers === true){
  //   document.querySelector('.btn-green-peppers').classList.add('active')
  // } else{
  //   document.querySelector('.btn-green-peppers').classList.remove('active')
  // }
  // if (state.whiteSauce === true){
  //   document.querySelector('.btn-sauce').classList.add('active')
  // }else{
  //   document.querySelector('.btn-sauce').classList.remove('active')
  // }
  // if (state.glutenFreeCrust === true){
  //   document.querySelector('.btn-crust').classList.add('active')
  // }else{
  //   document.querySelector('.btn-crust').classList.remove('active')
  // }

const lookup = {
  pepperoni: ".btn-pepperoni",
  mushrooms: ".btn-mushrooms",
  greenPeppers: ".btn-green-peppers",
  whiteSauce: ".btn-sauce",
  glutenFreeCrust: ".btn-crust"
}

function renderPrice() {
  let list = '';
  let price = basePrice;
  for (let ingredient in state){
    console.log(ingredients[ingredient])
    if (state[ingredient]){
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      price+= ingredients[ingredient].price
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = `$${price}`;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = ! state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = ! state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = ! state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = ! state.glutenFreeCrust;
  renderEverything();
});

//document.uqeryselector(.btn.btn-green peppers).onclick
//on click works like add event listener



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
