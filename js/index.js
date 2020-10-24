// Write your Pizza Builder JavaScript in this file.

//Buttons
const btnPep = document.querySelector('.btn.btn-pepperoni');
const mushBtn = document.querySelector(".btn-mushrooms");
const greenBtn = document.querySelector(".btn-green-peppers");
const sauceBtn = document.querySelector(".btn-sauce");
const crustBtn = document.querySelector(".btn-crust");

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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) crust.classList.add("crust-gluten-free");
  else crust.classList.remove("crust-gluten-free");
  
}

function renderButtons() {
  const acBtnPep = state.pepperoni ? btnPep.classList.add("active") : btnPep.classList.remove("active");
  const acBtnMush = state.mushrooms ? mushBtn.classList.add("active") : mushBtn.classList.remove("active");
  const acBtnGreen = state.greenPeppers ? greenBtn.classList.add("active") : greenBtn.classList.remove("active");
  const acBtnSauce = state.whiteSauce ? sauceBtn.classList.add("active") : sauceBtn.classList.remove("active");
  const acBtnCrust = state.glutenFreeCrust ? crustBtn.classList.add("active") : crustBtn.classList.remove("active");
}

function renderPrice() {
  const list = document.querySelector(".price ul");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild)
  }
  if (state.pepperoni) list.appendChild = "<li>$1 pepperoni</li>";
  else if (state.mushrooms)list.innerHTML = "<li>$1 mushrooms</li>";
  else if (state.greenPeppers)list.innerHTML = "<li>$1 green peppers</li>";
  else if (state.whiteSauce) list.innerHTML = "<li>$3 white sauce</li>";
  else  (state.glutenFreeCrust) list.innerHTML = "<li>$5 gluten-free crust</li>";
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

btnPep.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushBtn.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

greenBtn.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

sauceBtn.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

  crustBtn.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})