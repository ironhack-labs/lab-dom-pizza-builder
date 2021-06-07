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
  document.querySelectorAll('.mushroom').forEach((element) => {
    if (state.mushrooms) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden'
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((element) => {
    if (state.greenPeppers) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  let whiteSauceElement = document.getElementsByClassName("sauce")[0];
  if (state.whiteSauce) { whiteSauceElement.setAttribute('class', 'sauce sauce-white') }
  else { whiteSauceElement.setAttribute('class', 'sauce'); }
}

function renderGlutenFreeCrust() {
  let crustElement = document.getElementsByClassName("crust")[0];
  if (state.glutenFreeCrust) { crustElement.setAttribute('class', 'crust crust-gluten-free') }
  else { crustElement.setAttribute('class', 'crust') };
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {

  // SELECTING ALL THE BTNs
  let crustBtn = document.querySelector('.btn.btn-crust');
  let pepperoniBtn = document.querySelector('.btn.btn-pepperoni');
  let peppersBtn = document.querySelector('.btn.btn-green-peppers');
  let mushroomBtn = document.querySelector('.btn.btn-mushrooms');
  let sauceBtn = document.querySelector('.btn.btn-sauce');
  // CRUST BTN - done
  if (state.glutenFreeCrust) { crustBtn.setAttribute('class', 'btn btn-crust active') }
  if (state.glutenFreeCrust === false) { crustBtn.setAttribute('class', 'btn btn-crust') }
  // PEPPERONI BTN - done 
  if (state.pepperoni) { pepperoniBtn.setAttribute('class', 'btn btn-pepperoni active') }
  if (state.pepperoni === false) { pepperoniBtn.setAttribute('class', 'btn btn-pepperoni') }
  // PEPPER BTN -done 
  if (state.greenPeppers) { peppersBtn.setAttribute('class', 'btn btn-green-peppers active') }
  if (state.greenPeppers === false) { peppersBtn.setAttribute('class', 'btn btn-green-peppers') }
  // MUSHROOM BTN - done
  if (state.mushrooms) { mushroomBtn.setAttribute('class', 'btn btn-mushrooms active') }
  if (state.mushrooms === false) { mushroomBtn.setAttribute('class', 'btn btn-mushrooms') }
  // SAUCE BTN 
  if (state.whiteSauce) { sauceBtn.setAttribute('class', 'btn btn-sauce active') }
  if (state.whiteSauce === false) { sauceBtn.setAttribute('class', 'btn btn-sauce') }
};
// Iteration 3: add/remove the class "active" of each `<button class="btn">`


function renderPrice() {

  let parent = document.querySelector('.panel.price ul');
  let total = document.querySelector('.panel.price strong');

  let price = 10;
 
  if(state.pepperoni){price+=1}
  if(state.mushrooms){price+=1}
  if(state.greenPeppers){price+=1}
  if(state.whiteSauce){price+=3}
  if(state.glutenFreeCrust){price+=5}
  total.innerHTML = '$' + price;

  // CREATING THE ListItems

  let pepChild = document.createElement('li');
  pepChild.setAttribute('id', 'pep');
  pepChild.innerHTML = '$1 pepperoni';

  let mushChild = document.createElement('li');
  mushChild.setAttribute('id', 'mush');
  mushChild.innerHTML = '$1 mushrooms';

  let pepperChild = document.createElement('li');
  pepperChild.setAttribute('id', 'gree');
  pepperChild.innerHTML = '$1 green peppers';

  let crustChild = document.createElement('li');
  crustChild.setAttribute('id', 'glu');
  crustChild.innerHTML = '$5 gluten-free crust';

  let sauceChild = document.createElement('li');
  sauceChild.setAttribute('id', 'whi');
  sauceChild.innerHTML = '$3 white sauce';

  // ADDING AND REMOVING THE ITEMS 
  if (state.pepperoni && document.getElementById('pep') === null) { parent.appendChild(pepChild); }
  if (state.pepperoni === false && document.getElementById('pep')) { parent.removeChild(document.getElementById('pep')) }

  if (state.mushrooms && document.getElementById('mush') === null) { parent.appendChild(mushChild); }
  if (state.mushrooms === false && document.getElementById('mush')) { parent.removeChild(document.getElementById('mush')) }

  if (state.greenPeppers && document.getElementById('gree') === null) { parent.appendChild(pepperChild); }
  if (state.greenPeppers === false && document.getElementById('gree')) { parent.removeChild(document.getElementById('gree')) }

  if (state.whiteSauce && document.getElementById('whi') === null) { parent.appendChild(sauceChild); }
  if (state.whiteSauce === false && document.getElementById('whi')) { parent.removeChild(document.getElementById('whi')) }

  if (state.glutenFreeCrust && document.getElementById('glu') === null) { parent.appendChild(crustChild); }
  if (state.glutenFreeCrust === false && document.getElementById('glu')) { parent.removeChild(document.getElementById('glu')) }
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
  state.greenPeppers = !state.greenPeppers
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
  renderButtons();
})