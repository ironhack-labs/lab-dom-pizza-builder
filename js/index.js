//  LAB - Elephant team   - Graziella & Charlotte 

// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
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
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGPep) => {
    if (state.greenPeppers) {
      oneGPep.style.visibility = "visible";
    } else {
      oneGPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce");
  sauce.classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector(".crust");
  crust.classList.toggle("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
// event toggle  in buttons 

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  var totalPrice = basePrice;
  var currentOrder = document.querySelector('.panel.price ul');
  currentOrder.innerHTML = "";

  for (const key in state) {
    if (state[key] === true) {
      totalPrice += ingredients[key].price;
      currentOrder.innerHTML+= `<li> $${ingredients[key].price}  ${ingredients[key].name}</li>`;
    }
    
  }
  document.querySelector('aside.panel.price strong').innerHTML = `$  ${totalPrice}`;
}
//console.log(currentOrder);

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", function(e) {
  state.pepperoni = !state.pepperoni;
  e.target.classList.toggle("active");
  //console.log(this);
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", (e) => {
  state.mushrooms = !state.mushrooms;
  e.target.classList.toggle("active");
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", (e) => {
    state.greenPeppers = !state.greenPeppers;
    e.target.classList.toggle("active");
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", (e) => {
  state.whiteSauce = !state.whiteSauce;
  e.target.classList.toggle("active");
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  e.target.classList.toggle("active");
  renderEverything();
});
