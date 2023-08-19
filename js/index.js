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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if(state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
  
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if(state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  const sauceElement = document.querySelector('.sauce');

if (state.whiteSauce) {
  sauceElement.classList.add('sauce-white'); // from CSS class 
} else {
  sauceElement.classList.remove('sauce-white'); 
}
}
  /* Alternative: 
  Function renderWhiteSauce() {
  document.querySelector('.sauce').forEach((sauceItem) => {
if (state.whiteSauce) {
  sauceItem.style.visibility = "visible";
} else {
  sauceItem.style.visibility = "hidden";
}

  })
  */

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crustElement =document.querySelector('.crust');

  if(state.glutenFreeCrust) {
    crustElement.classList.add('crust-gluten-free');
  } else {
    crustElement.classList.remove('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
 document.querySelector("btn.btn-pepperoni").classList.toggle('active', state.pepperoni);
 document.querySelector("btn.btn-mushrooms").classList.toggle('active', state.mushrooms);
 document.querySelector("btn.btn-green-peppers").classList.toggle('active', state.greenPeppers);
 document.querySelector("btn.btn-sauce").classList.toggle('active', state.whiteSauce);
 document.querySelector("btn.btn-crust").classList.toggle('active', state.glutenFreeCrust);

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  priceList.innerHTML = '';
  let total = basePrice;  


for (const selected in ingredients) {
if (state[selected]) { 
  const ingredientPrice = ingredients[selected].price; 
  total +=ingredientPrice;


 
  const listItem = document.createElement("li");
  listItem.textContent = `$${ingredientPrice} ${ingredients[selected]}`; 
}
}

const HTMLstring = ` 
<h2>Your Pizza's price</h2>
<b>$${basePrice} cheese pizza</b>
<strong>$${total}</strong>`

document.querySelector(".panel.price").innerHTML = HTMLstring;

const ulListup = document.createElement("ul");
ulListup.appendChild(listItem);
document.querySelector(".panel.price b").appendChild(ulListup);

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni; 
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () { 
  state.mushrooms = !state.mushrooms; 
  renderEverything();
})

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () { 
  state.greenPeppers = !state.greenPeppers; 
  renderEverything();
})

document.querySelector('.btn.btn-sauce').addEventListener('click', function () { 
  state. whiteSauce = !state. whiteSauce; 
  renderEverything();
})

document.querySelector('btn.btn-crust').addEventListener('click', function () { 
  state.glutenFreeCrust = !state.glutenFreeCrust; 
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
