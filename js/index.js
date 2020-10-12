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
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
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
  document.querySelectorAll('.sauce').forEach(wSauce => {
    if(state.whiteSauce) {
      wSauce.classList.add('sauce-white');
    } else {
      wSauce.classList.remove('sauce-white');
    }
  }); 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(pizzaCrust => {
    if(state.glutenFreeCrust) {
      pizzaCrust.classList.add('crust-gluten-free');
    } else {
      pizzaCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    let buttons = document.querySelectorAll('.btn');
    let states = Object.values(state);
    
    for (i = 0; i < states.length; i++){
      if (states[i]) {
        buttons[i].classList.add('active');
      } else {
        buttons[i].classList.remove('active');
      }
    }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  let totalHtml = document.querySelector('aside.panel.price strong');
  let price = document.querySelector('aside.panel.price ul');
  price.innerHTML = "";
  totalHtml.innerText = `$${basePrice}`;
    if (state.pepperoni) {
      let pepperoniText = document.createElement('li');
      pepperoniText.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
      price.appendChild(pepperoniText);
      total += ingredients.pepperoni.price;
      totalHtml.innerText = `$${total}`;
    }
    if (state.mushrooms) {
      let mushroomsText = document.createElement('li');
      mushroomsText.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
      price.appendChild(mushroomsText);
      total += ingredients.mushrooms.price;
      totalHtml.innerText = `$${total}`;
    }
    if (state.greenPeppers) {
      let greenPeppersText = document.createElement('li');
      greenPeppersText.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
      price.appendChild(greenPeppersText);
      total += ingredients.greenPeppers.price;
      totalHtml.innerText = `$${total}`;
    }
    if (state.whiteSauce) {
      let whiteSauceText = document.createElement('li');
      whiteSauceText.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
      price.appendChild(whiteSauceText);
      total += ingredients.whiteSauce.price;
      totalHtml.innerText = `$${total}`;
    }
    if (state.glutenFreeCrust) {
      let glutenFreeText = document.createElement('li');
      glutenFreeText.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
      price.appendChild(glutenFreeText);
      total += ingredients.glutenFreeCrust.price;
      totalHtml.innerText = `$${total}`;
    } 
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
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () =>{
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