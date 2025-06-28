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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach((sauceWhite) => {
    if (state.whiteSauce) {
      sauceWhite.style.visibility = 'visible';
    } else {
      sauceWhite.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-pepperoni').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.classList.add("active");
    } else {
      onePep.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-mushrooms').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.classList.add("active");
    } else {
      mushroom.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-green-peppers').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.classList.add("active");
    } else {
      greenPepper.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-sauce').forEach((sauceWhite) => {
    if (state.whiteSauce) {
      sauceWhite.classList.add("active");
    } else {
      sauceWhite.classList.remove("active");
    }
  });

  document.querySelectorAll('.btn-crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add("active");
    } else {
      crust.classList.remove("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = 10;
  if (state.pepperoni) {
      price += 1;
    } 

  if (state.mushrooms) {
      price += 1;
    } 

  if (state.greenPeppers){
    price += 1;
  }  

  if (state.whiteSauce) {
    price += 3;
  }

  if (state.glutenFreeCrust){
    price += 5;
  }

  document.querySelector("aside strong").textContent = `$${price}`;
  


}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const mushrooms = document.querySelector(".btn-mushrooms");
mushrooms.addEventListener("click", ()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();

})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const greenPepper = document.querySelector(".btn-green-peppers");
greenPepper.addEventListener("click", ()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();

})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const sauce = document.querySelector(".btn-sauce");
sauce.addEventListener("click", ()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">
const crust = document.querySelector(".btn-crust");
crust.addEventListener("click", ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
