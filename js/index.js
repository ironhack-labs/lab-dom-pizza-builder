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
  document.querySelectorAll('.mushroom').forEach(setas => {
    if (state.mushrooms) {
      setas.style.visibility = 'visible';
    } else {
      setas.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(gpepper => {
    if (state.greenPeppers) {
      gpepper.style.visibility = 'visible';
    } else {
      gpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  let glutenCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenCrust.classList.add('crust-gluten-free');
  } else {
    glutenCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  let allButtons = document.querySelectorAll('.btn')

  state.pepperoni ? allButtons[0].classList.add('active') : allButtons[0].classList.remove('active');
  state.mushrooms ? allButtons[1].classList.add('active') : allButtons[1].classList.remove('active');
  state.greenPeppers ? allButtons[2].classList.add('active') : allButtons[2].classList.remove('active');
  state.whiteSauce ? allButtons[3].classList.add('active') : allButtons[3].classList.remove('active');
  state.glutenFreeCrust ? allButtons[4].classList.add('active') : allButtons[4].classList.remove('active');
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let prices = document.querySelectorAll('.price ul li');
  state.pepperoni ? prices[0].style.display = 'block' : prices[0].style.display = 'none';
  state.mushrooms ? prices[1].style.display = 'block' : prices[1].style.display = 'none';
  state.greenPeppers ? prices[2].style.display = 'block' : prices[2].style.display = 'none';
  state.whiteSauce ? prices[3].style.display = 'block' : prices[3].style.display = 'none';
  state.glutenFreeCrust ? prices[4].style.display = 'block' : prices[4].style.display = 'none';


  let finalPrice = parseInt(document.querySelector('.price strong span').innerHTML);


  for (key in prices) {

  }

  //!state.pepperoni ? finalPrice -= ingredients.pepperoni.price : finalPrice;
  //state.mushrooms ? finalPrice.innerHTML = basePrice + ingredients.mushrooms.price : finalPrice.innerHTML
  //state.greenPeppers ? finalPrice.innerHTML = basePrice + ingredients.greenPeppers.price : finalPrice
  //state.whiteSauce ? finalPrice.innerHTML = basePrice + ingredients.whiteSauce.price : finalPrice
  //state.glutenFreeCrust ? finalPrice.innerHTML = basePrice + ingredients.glutenFreeCrust.price : finalPrice
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
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})