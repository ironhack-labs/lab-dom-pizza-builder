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
  document.querySelectorAll(".green-pepper").forEach((oneGreenPepp) => {
    if (state.greenPeppers) {
      oneGreenPepp.style.visibility = "visible";
    } else {
      oneGreenPepp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach((theSauce) => {
    if (state.whiteSauce) {
      theSauce.classList.toggle("sauce-white");
  } else {
    theSauce.classList.toggle("sauce-white");
  }
});
}

function renderGlutenFreeCrust() {
  document
    .querySelectorAll(".crust")
    .forEach((noGlutenCrust) => {
      if (state.whiteSauce) {
        noGlutenCrust.classList.toggle("crust-gluten-free");
    } else {
      noGlutenCrust.classList.toggle("crust-gluten-free");
    }
  });
};

//It 3


function renderButtons() {
  document
  .querySelectorAll(".btn")
  .forEach((activeBtn) => {
    if (activeBtn.state) {
      activeBtn.classList.toggle("active");
    } else {
      activeBtn.classList.toggle("active");
    }
  });
};


//Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  document
  .querySelectorAll("aside.panel.price > ul > li")
  .forEach((ele) => { 
    if (ele.state){
      ele.style.visibility = "visible";
    } else {
      ele.style.visibility = "hidden";
    }
  });
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector(".btn.btn-pepperoni")
  .addEventListener("click", () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
});
