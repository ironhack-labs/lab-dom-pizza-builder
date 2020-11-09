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
  document.querySelectorAll('.mushroom').forEach(mush => {
    if(state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  }); 
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if(state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce-white');
  if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
  } else {
    sauce.style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust-gluten-free');
  if(state.glutenFreeCrust) {
    crust.style.visibility = 'visible';
  } else {
    crust.style.visibility = 'hidden'
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.getElementsByClassName('btn');
  const buttonsArr = [...buttons];
  const ingrState = Object.values(state);
  for (let i = 0; i < buttonsArr.length; i++) {
    if(ingrState[i] === false) {
      buttons[i].removeAttribute('.active');
    } else {
      buttons[i].setAttribute ('class', 'active') //CÓMO AÑADIR CLASE active SIN CAMBIAR LAS OTRAS
    }
  }
  return ingrState;
}

function renderPrice() {
  let listHtml = ''
  let totalPrice = 10
  if(state.pepperoni){
    listHtml += `<li> $${ingredients.pepperoni.price} ${ingredients.pepperoni.name} </li> `
    totalPrice += 1
  }
  if(state.mushrooms){
    listHtml = listHtml + `<li> $${ingredients.mushrooms.price} ${ingredients.mushrooms.name} </li> `
    totalPrice += 1
  }
  if(state.greenPeppers){
    listHtml = listHtml + `<li> $${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name} </li> `
    totalPrice += 1
  }
  if(state.whiteSauce){
    listHtml = listHtml + `<li> $${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name} </li> `
    totalPrice += 3
  }
  if(state.glutenFreeCrust){
    listHtml = listHtml + `<li> $${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name} </li> `
    totalPrice += 5
  }
  document.querySelector('.panel.price ul').innerHTML = listHtml
  document.querySelector('.panel.price strong').innerText = `$ ${totalPrice}`
}



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () =>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything();
})


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
