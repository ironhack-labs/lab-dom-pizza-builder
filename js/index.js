// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
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
  document.querySelectorAll(".pep").forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">` 
  document.querySelectorAll(".mushroom").forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = "visible";
    } else {
      greenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector(".sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
      document.querySelector(".btn-pepperoni").classList.add("active");
  } else {
      document.querySelector(".btn-pepperoni").classList.remove("active");
  }

  if (state.mushrooms) {
      document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
      document.querySelector(".btn-mushrooms").classList.remove("active");
  }

  if (state.greenPeppers) {
      document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
      document.querySelector(".btn-green-peppers").classList.remove("active");
  }

  if (state.whiteSauce) {
      document.querySelector(".btn-sauce").classList.add("active");
  } else {
      document.querySelector(".btn-sauce").classList.remove("active");
  }

  if (state.glutenFreeCrust) {
      document.querySelector(".btn-crust").classList.add("active");
  } else {
      document.querySelector(".btn-crust").classList.remove("active");
  }
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const parent = document.querySelector("aside ul");
  let child = parent.lastElementChild;
  let totalPrice = basePrice;

  //reset price panel, calculate total price anew
  while(child){
    parent.removeChild(child);
    child = parent.lastElementChild;
  }

  if (state.pepperoni){
    let newLiPep = document.createElement("li");
    newLiPep.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
    parent.appendChild(newLiPep);
    totalPrice += ingredients.pepperoni.price;
  } 
  
  if(state.mushrooms){
    let newLiShroom = document.createElement("li");
    newLiShroom.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    parent.appendChild(newLiShroom);
    totalPrice += ingredients.mushrooms.price;
  }

  if(state.greenPeppers){
    let newLiGreenPep = document.createElement("li");
    newLiGreenPep.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    parent.appendChild(newLiGreenPep);
    totalPrice += ingredients.greenPeppers.price;
  }

  if(state.whiteSauce){
    let newLiSauce = document.createElement("li");
    newLiSauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    parent.appendChild(newLiSauce);
    totalPrice += ingredients.whiteSauce.price;
  }

  if(state.glutenFreeCrust){
    let newLiCrust = document.createElement("li");
    newLiCrust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    parent.appendChild(newLiCrust);
    totalPrice += ingredients.glutenFreeCrust.price;
  }

  document.querySelector("aside strong").innerText = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons();
  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
});
