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
  document.querySelectorAll('.mushroom').forEach(onePep => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}




function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}




function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  if (!state.whiteSauce) {
    document.querySelector('.sauce').classList.remove('sauce-white')
  } else {
    document.querySelector('.sauce').classList.add('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (!state.glutenFreeCrust) {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }

}

function renderButtons(str) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(function (button) {

    button.classList.toggle('active')

  })
}




function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let priceTable = document.querySelector('.price ul')

  //for (let key in ingredients) {
  //if (state.key) {
  //priceTable.innerHTML = '<li>hey</li>'
  //}
  //}

}


//+ $ ingredients.key.price ingredients.key.name


// const ulist = document.getElementById('list');

//for (let key in state) {
// console.log(key)
//if (state.key) {
// ulist.innerHTML += '<li>`${ingredients.key.price} + ${key}`</li>'






renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();


});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();

});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
})