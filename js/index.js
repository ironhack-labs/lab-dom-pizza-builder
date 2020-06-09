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
    document.querySelectorAll('.green-pepper').forEach(pepper => {
      if (state.greenPeppers) {
        pepper.style.visibility = 'visible';
      } else {
        pepper.style.visibility = 'hidden';
      }
    });
  }


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`  
  console.log(document.querySelector('.btn.btn-pepperoni'))
 
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
    } else {
      document.querySelector('.btn.btn-pepperoni').classList.remove('active')
    }
  if (state.mushrooms) {
      document.querySelector('.btn.btn-mushrooms').classList.add('active')
    } else {
      document.querySelector('.btn.btn-mushrooms').classList.remove('active')
    }
    if (state.greenPeppers) {
      document.querySelector('.btn.btn-green-peppers').classList.add('active')
      } else {
        document.querySelector('.btn.btn-green-peppers').classList.remove('active')
      }
    if (state.whiteSauce) {
      document.querySelector('.btn.btn-sauce').classList.add('active')
      } else {
        document.querySelector('.btn.btn-sauce').classList.remove('active')
      }
    if (state.glutenFreeCrust) {
      document.querySelector('.btn.btn-crust').classList.add('active')
    } else {
      document.querySelector('.btn.btn-crust').classList.remove('active')
    }
  }

  


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = '';
  let price = basePrice;
  for (let ingredient in state ) {
    if (state [ingredient]) {
      li += `<li> $ ${ingredients[ingredient].price} ${ingredients[ingredient].name} </li>`;
      price += ingredients[ingredient].price;
    }
  }
  document.querySelector('panel.price ul').innerHTML = list; 
  document.querySelector('panel.price strong').innerHTML = `$ ${price}; 
}

  


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  console.log('pepperoni')
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  console.log('mushroom')
  state.mushrooms = !state.mushrooms;
  // console.log('checkingState', state.mushrooms)
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  console.log('greenPeppers')
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  //console.log('sauce')
  state.whiteSauce = !state.whiteSauce;
  //console.log('checkingState', state.whiteSauce)
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  //console.log('crust')
  state.glutenFreeCrust = !state.glutenFreeCrust;
  //console.log('checkingState', state.glutenFreeCrust)
  renderEverything();
});