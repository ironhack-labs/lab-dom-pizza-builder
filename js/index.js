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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGpep) => {
    if (state.greenPeppers) {
      oneGpep.style.visibility = 'visible';
    } else {
      oneGpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white")
    } else {
      sauce.classList.remove("sauce-white")
    }
}

function renderGlutenFreeCrust() {
  const sauce = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      sauce.classList.add("crust-gluten-free")
    } else {
      sauce.classList.remove("crust-gluten-free")
    }
}

function renderButtons() {

  if(!state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.add('active')
  }
  else{
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }

  if(!state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add('active')
  }
  else{
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }

  if(!state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add('active')
  }
  else{
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }

  if(!state.whiteSauce){
    document.querySelector('.btn-sauce').classList.add('active')
  }
  else{
    document.querySelector('.btn-sauce').classList.remove('active')
  }

  if(!state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.add('active')
  }
  else{
    document.querySelector('.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  const lis = document.querySelectorAll(".price li")
  const totalPrice = document.querySelector(".total-price")
  let price = basePrice 

  lis.forEach(li => {
    const className = li.className.slice(0, li.className.indexOf("-price"))
    
    state[className] ? 
      (li.style.display = "block",
      price += ingredients[className].price) :
      li.style.display = "none" 
  })

  totalPrice.innerText = `$${price}`
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
});