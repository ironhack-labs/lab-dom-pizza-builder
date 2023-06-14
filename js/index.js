const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderIngredient(ingredientClass, ingredientState) {
  const elements = document.querySelectorAll(ingredientClass)

    for (let i = 0; i < elements.length; i++) {
      const oneElement = elements [i]

      if (state[ingredientState]) {
        oneElement.style.visibility = 'visible';
      } else {
        oneElement.style.visibility = 'hidden';
      }
     }
    } 

function renderPepperoni() {
   renderIngredient(".pep", "pepperoni")
};

function renderMushrooms() {
  renderIngredient(".mushroom", "mushrooms")
}

function renderGreenPeppers() {
  renderIngredient(".gren-pepper", "greenPeppers")  
}

function renderWhiteSauce() {
  const sauce = docuement.querySelector(".sauce")
   if (state.whiteSauce) {
    sauce.classList.add("sauce-white")
    } else {
    sauce.classList.remove("sauce-white")
    }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust")
   if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free")
    } else {
     crust.classList.remove("crust-gluten-free")
    }
}

function renderButton(btnClass, stateName){
  const btn = document.querySelector(btnClass)
    if (state[stateName]) {
      btnPep.classList.add('active')
    } else {
      btnPep.classList.remove('active')
    }
}

function renderButtons() {
  renderButton(".btn-pepperoni", "pepperoni",)
  renderButton(".btn-mushrooms", "mushrooms")
  renderButton(".btn-green-peppers", "grenPeppers")
  renderButton(".btn-sauce", "whiteSauce")
  renderButton(".btn-crust", "glutenFreeCrust")
}

function renderPrice() {
let totalPrice = basePrice
const list = document.querySelector('.panel.price ul')
list.innerHTML = ''
  
  if (state.pepperoni){
        totalPrice += ingredients.pepperoni.price;
        list.innerHTML += '<li>$1 pepperoni</li>'
    }
    if (state.mushrooms){
      totalPrice += ingredients.mushrooms.price;
      list.innerHTML += '<li>$1 mushrooms</li>'
    }
    if (state.greenPeppers){
      totalPrice += ingredients.greenPeppers.price;
      list.innerHTML += '<li>$1 green peppers</li>'
    }
    if (state.whiteSauce){
      totalPrice += ingredients.whiteSauce.price;
      list.innerHTML += '<li>$3 white sauce</li>'
    }
    if (state.glutenFreeCrust){
      totalPrice += ingredients.glutenFreeCrust.price;
      list.innerHTML += '<li>$5 gluten free</li>'
    }

 document.querySelector(".panel.price strong").innerText = `$${totalPrice}`;
}

renderEverything()


document
  .querySelector('.btn.btn-pepperoni')
  .onclick = function() {
    state.pepperoni = !state.pepperoni;
    renderEverything();
};

document
  .querySelector('.btn.btn-mushrooms')
  .onclick = function() {
    state.mushrooms = !state.mushrooms;
    renderEverything();
};

document
  .querySelector('.btn.btn-green-peppers')
  .onclick = function() {
    state.green = !state.green;
    renderEverything();
};

document
  .querySelector('.btn.btn-sauce')
  .onclick = function() {
    state.sauce = !state.sauce;
    renderEverything();
};

document
  .querySelector('.btn.btn-crust')
  .onclick = function() {
    state.crust = !state.crust;
    renderEverything();
}