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
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
});
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
});
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelectorAll('.sauce').forEach((sauce) => {
  if(state.whiteSauce) {
    sauce.classList.add('.sauce-white')
  } else {
    sauce.classList.remove('.sauce-white')
  }
});
}

function renderGlutenFreeCrust() {
  const crust = document.querySelectorAll('.crust').forEach((crust) => {
  if(state.crust) {
    crust.classList.add('.crust-gluten-free')
  } else {
    crust.classList.remove('.crust-gluten-free')
  }
});
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.toggle('active')
  }

  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.toggle('active')
  }

  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.toggle('active')
  }

  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.toggle('active')
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.toggle('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // Total
  const elementPrice = document.querySelector('.price strong')
  // Base Price
  let total = 10
  // Sum of Ingredients
  if (state.pepperoni) {
    total+=1 
  } else 0
  if (state.mushrooms) {
    total+=1
  } else 0    
  if (state.greenPeppers) {
    total+=1
  } else 0    
  if (state.whiteSauce) {
    total+=3
  } else 0    
  if (state.glutenFreeCrust) {
    total+=5
  } else 0    
  elementPrice.textContent = total
  //  elementPrice.textContent = `$${total}` JEST RED
  //  elementPrice.textContent = '$',total JEST RED

  // 
  const list = document.querySelector('.price ul')
  list.innerHTML = ''

  const pepperoni = document.createElement('li')
  const mushroom = document.createElement('li')
  const greenpepper = document.createElement('li')
  const souce = document.createElement('li')
  const crust = document.createElement('li')

  if (state.pepperoni){
    pepperoni.textContent += '$1 pepperoni'
    list.appendChild(pepperoni)
  } 
  if (state.mushrooms) {
    mushroom.textContent += '$1 mushrooms'
    list.appendChild(mushroom)
  } 
  if (state.greenPeppers) {
    greenpepper.textContent += '$1 green pepper'
    list.appendChild(greenpepper)
  }
  if (state.whiteSauce) {
    souce.textContent += '$3 white souce'
    list.appendChild(souce)
  }
  if (state.glutenFreeCrust) {
    crust.textContent += '$5 gluten-free crust'
    list.appendChild(crust)
  }
}

renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});