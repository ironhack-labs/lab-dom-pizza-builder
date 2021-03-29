// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}
// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(greenPepper => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  let whiteS = document.querySelector('.sauce-white')
  if(state.whiteSauce){
    whiteS.style.visibility = 'visible'
  } else {
    whiteS.style.visibility = 'hidden'
  }
}


// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  let freeCrust = document.querySelector('.crust')
  if(state.glutenFreeCrust){
    freeCrust.classList.add('crust-gluten-free')
  } else {
    freeCrust.classList.remove('crust-gluten-free')
  }
}


// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  let buttons = document.querySelectorAll('.btn').forEach(function(btn) {
    for (let i = 0; i < btn.classList.length; i++) {
      if (btn.classList[i].includes('active')) {
        btn.classList.remove('active')
      } else {
        btn.classList.add('active')
      }
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let items = '';

  for (status in state) {
    if (state[status]) {
      totalPrice += ingredients[status].price;
      items += `<li>$${ingredients[status].price} ${ingredients[status].name}</li>`
    }
  }
  let totalSum = document.querySelector('.price strong')
  totalSum.innerHTML = `$${totalPrice}`

  let panel = document.querySelector('.price ul')
  panel.innerHTML = items

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
