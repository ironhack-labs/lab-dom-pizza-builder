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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach($mushroom => {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach($green => {
    if (state.greenPeppers) {
      $green.style.visibility = 'visible';
    } else {
      $green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (!state.whiteSauce) {
    document.getElementsByClassName("sauce")[0].classList.remove("sauce-white")
  } else {
    document.getElementsByClassName("sauce")[0].classList.add("sauce-white")
  }
} 

function renderGlutenFreeCrust() {
  if (!state.glutenFreeCrust) {
    document.getElementsByClassName("crust")[0].classList.remove("crust-gluten-free")
  } else {
    document.getElementsByClassName("crust")[0].classList.add("crust-gluten-free")
  }
}

function renderButtons() {

   if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-pepperoni').classList.add("active")
   }

   if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-mushrooms').classList.add("active")
   }

   if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-green-peppers').classList.add("active")
   }

   if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-sauce').classList.add("active")
   }

   if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-crust').classList.add("active")
   }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.getElementsByClassName("btn btn-sauce")[0].onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.getElementsByClassName("btn btn-crust")[0].onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}