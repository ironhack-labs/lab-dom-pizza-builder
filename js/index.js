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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  const sauceBtn = document.querySelector('.btn-sauce')
  if (sauceBtn.classList.contains("active")) {
    sauce.classList.add("sauce-white")
  } else {
    sauce.classList.remove("sauce-white")
  }

}

function renderGlutenFreeCrust() {
  const crustBtn = document.querySelector('.btn-crust') 
  const crust = document.querySelector('.crust') 
  if (crustBtn.classList.contains(`active`)) {
    crust.classList.add("crust-gluten-free")
  } else {
    crust.classList.remove("crust-gluten-free")
  }
}

function renderButtons() {
  /*Realizado en el propio listener*/
}

function renderPrice() {
  const list = document.querySelector(".list")
  let count = 10
  for(let ingredient in state) {
    if (!state[ingredient]) {
      list.querySelector(`#${ingredient}`).classList.add('hidden')
    } else {
      list.querySelector(`#${ingredient}`).classList.remove('hidden')
      const price = list.querySelector(`#${ingredient}`).textContent[1]
      count += Number(price)
    }
  }
  document.querySelector(`.price strong`).textContent=`$${count}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  const pepperoni = document.querySelector('.btn-pepperoni') 
  if (state.pepperoni) {
    pepperoni.classList.add("active")
    renderPepperoni()
  } else {
    pepperoni.classList.remove("active")
    renderPepperoni()
  }
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  const mushrooms = document.querySelector('.btn-mushrooms') 
  if (state.mushrooms) {
    mushrooms.classList.add("active")
    renderMushrooms()
  } else {
    mushrooms.classList.remove("active")
    renderMushrooms()
  }
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  const greenPeppers = document.querySelector('.btn-green-peppers') 
  if (state.greenPeppers) {
    greenPeppers.classList.add("active")
    renderGreenPeppers()
  } else {
    greenPeppers.classList.remove("active")
    renderGreenPeppers()
  }
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  const sauce = document.querySelector('.btn-sauce') 
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) {
    sauce.classList.add("active")
    renderWhiteSauce()
  } else {
    sauce.classList.remove("active")
    renderWhiteSauce()
  }
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  const crust = document.querySelector('.btn-crust') 
  state.glutenFreeCrust = !state.glutenFreeCrust;

  if (!state.glutenFreeCrust) {
    //crust.classList.add("active")
    crust.classList.remove("active")
    renderGlutenFreeCrust()
  } else {
    //crust.classList.remove("active")
    crust.classList.add("active")
    renderGlutenFreeCrust()
  }
  renderEverything();
});
